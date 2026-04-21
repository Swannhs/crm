import { OmniContactFlowStateRepository } from '../repositories/index.js';
import { emitOmniMessageSend } from '../kafka/omni.producer.js';
import { OmniMessageReceivedEvent } from '../types/index.js';

export class OmniFlowExecutor {
  private stateRepo = new OmniContactFlowStateRepository();

  async execute(chatbot: any, event: OmniMessageReceivedEvent, logger: any) {
    const { contactMobile, organizationId, content: userMessage } = event;
    const flow = chatbot.flowData as { nodes: any[]; edges: any[] };

    if (!flow || !flow.nodes || flow.nodes.length === 0) {
      logger.warn({ chatbotId: chatbot.id }, "Chatbot has no flow data, falling back to simple response");
      return this.sendFallback(chatbot, event, logger);
    }

    // 1. Get or Create Flow State
    let state = await this.stateRepo.get(contactMobile, chatbot.id);
    let currentNodeId = state?.currentNodeId;

    if (!state || state.isCompleted) {
      // Start new flow session
      const startNode = flow.nodes.find(n => n.type === 'start') || flow.nodes[0];
      currentNodeId = startNode?.id || 'start';
      state = await this.stateRepo.createOrUpdate({
        organizationId,
        contactMobile,
        chatbotId: chatbot.id,
        currentNodeId: currentNodeId || 'start',
        stateData: {},
        isCompleted: false
      });
      
      // Process the first node
      return this.processNode(chatbot, startNode, state, event, logger);
    }

    // 2. Find Current Node
    const currentNode = flow.nodes.find(n => n.id === currentNodeId);
    if (!currentNode) {
      logger.error({ currentNodeId }, "Current node not found in flow");
      return;
    }

    // 3. Handle Input/Branching from Current Node
    const nextNode = this.findNextNode(flow, currentNode, userMessage);
    if (nextNode) {
      return this.processNode(chatbot, nextNode, state, event, logger);
    } else {
      // No clear path, maybe stay or fallback
      logger.info({ currentNodeId }, "No next node found for input, retrying current node or fallback");
      return this.processNode(chatbot, currentNode, state, event, logger);
    }
  }

  private findNextNode(flow: any, currentNode: any, userMessage: string) {
    const edges = flow.edges.filter((e: any) => e.source === currentNode.id);
    if (edges.length === 0) return null;

    // If only one exit, take it
    if (edges.length === 1 && !edges[0].sourceHandle) {
       return flow.nodes.find((n: any) => n.id === edges[0].target);
    }

    // Branching logic (based on handles or conditions)
    // For now: Simple matching if handle name matches user message
    const matchingEdge = edges.find((e: any) => {
      const handle = e.sourceHandle?.toLowerCase();
      return handle && userMessage.toLowerCase().includes(handle);
    });

    if (matchingEdge) {
      return flow.nodes.find((n: any) => n.id === matchingEdge.target);
    }

    // Default exit if available
    const defaultEdge = edges.find((e: any) => e.sourceHandle === 'default' || !e.sourceHandle);
    if (defaultEdge) {
      return flow.nodes.find((n: any) => n.id === defaultEdge.target);
    }

    return null;
  }

  private async processNode(chatbot: any, node: any, state: any, event: OmniMessageReceivedEvent, logger: any): Promise<void> {
    logger.info({ nodeId: node.id, type: node.type }, "Processing chatbot node");

    // Update state to current node
    await this.stateRepo.createOrUpdate({
      organizationId: event.organizationId,
      contactMobile: event.contactMobile,
      chatbotId: chatbot.id,
      currentNodeId: node.id
    });

    switch (node.type) {
      case 'message':
      case 'start':
        const message = node.data?.message || node.data?.label || chatbot.welcomeMessage;
        await this.sendMessage(message, chatbot, event, logger);
        
        // Auto-advance if there's only one outgoing edge
        const flow = chatbot.flowData as any;
        const edges = flow.edges.filter((e: any) => e.source === node.id);
        if (edges.length === 1 && !node.data?.waitInput) {
           const nextNode = flow.nodes.find((n: any) => n.id === edges[0].target);
           if (nextNode) return this.processNode(chatbot, nextNode, state, event, logger);
        }
        break;

      case 'input':
        await this.sendMessage(node.data?.message, chatbot, event, logger);
        // Wait for next user message to advance
        break;

      case 'end':
        await this.stateRepo.createOrUpdate({ ...state, isCompleted: true });
        if (node.data?.message) await this.sendMessage(node.data?.message, chatbot, event, logger);
        break;

      default:
        logger.warn({ type: node.type }, "Unsupported node type");
    }
  }

  private async sendMessage(content: string, chatbot: any, event: OmniMessageReceivedEvent, logger: any) {
    if (!content) return;
    await emitOmniMessageSend({
      provider: event.provider,
      instanceId: event.instanceId,
      to: event.contactMobile,
      content,
      type: 'text',
      organizationId: event.organizationId
    }, logger);
  }

  private async sendFallback(chatbot: any, event: OmniMessageReceivedEvent, logger: any) {
    const response = chatbot.fallbackMessage || "Sorry, I didn't understand that.";
    await this.sendMessage(response, chatbot, event, logger);
  }
}
