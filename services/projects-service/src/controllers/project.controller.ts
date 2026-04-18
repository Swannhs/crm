import { Response } from 'express';
import { ProjectService, BoardService, ColumnService, CardService, TaskService, LabelService } from '../services/project.service.js';
import { AuthenticatedRequest } from '../middleware/identity.js';

export class ProjectController {
  private svc = new ProjectService();

  async list(req: AuthenticatedRequest, res: Response) {
    try {
      const r = await this.svc.getProjects(req.identity.orgId, req.query);
      return res.json({ data: r.data, total: r.total });
    } catch (e: any) { return res.status(500).json({ message: e.message }); }
  }

  async get(req: AuthenticatedRequest, res: Response) {
    try {
      const project = await this.svc.getProject(req.params.id, req.identity.orgId);
      return res.json({ data: project });
    } catch (e: any) {
      if (e.message === 'Not found') return res.status(404).json({ message: e.message });
      return res.status(500).json({ message: e.message });
    }
  }

  async create(req: AuthenticatedRequest, res: Response) {
    try {
      if (!req.body.name) return res.status(400).json({ message: 'name required' });
      const { orgId, userId } = req.identity;
      const project = await this.svc.createProject(orgId, userId, req.body);
      return res.status(201).json({ data: project });
    } catch (e: any) { return res.status(500).json({ message: e.message }); }
  }

  async update(req: AuthenticatedRequest, res: Response) {
    try {
      await this.svc.updateProject(req.params.id, req.identity.orgId, req.body);
      return res.json({ message: 'Updated' });
    } catch (e: any) { return res.status(500).json({ message: e.message }); }
  }

  async delete(req: AuthenticatedRequest, res: Response) {
    try {
      await this.svc.deleteProject(req.params.id, req.identity.orgId);
      return res.json({ message: 'Deleted' });
    } catch (e: any) { return res.status(500).json({ message: e.message }); }
  }
}

export class BoardController {
  private svc = new BoardService();

  async listByProject(req: AuthenticatedRequest, res: Response) {
    try {
      const boards = await this.svc.getBoards(req.params.projectId, req.identity.orgId);
      return res.json({ data: boards });
    } catch (e: any) { return res.status(500).json({ message: e.message }); }
  }

  async get(req: AuthenticatedRequest, res: Response) {
    try {
      const board = await this.svc.getBoard(req.params.id, req.identity.orgId);
      return res.json({ data: board });
    } catch (e: any) {
      if (e.message === 'Not found') return res.status(404).json({ message: e.message });
      return res.status(500).json({ message: e.message });
    }
  }

  async create(req: AuthenticatedRequest, res: Response) {
    try {
      if (!req.body.name) return res.status(400).json({ message: 'name required' });
      const { orgId, userId } = req.identity;
      const board = await this.svc.createBoard(orgId, userId, req.params.projectId, req.body);
      return res.status(201).json({ data: board });
    } catch (e: any) { return res.status(500).json({ message: e.message }); }
  }

  async update(req: AuthenticatedRequest, res: Response) {
    try {
      await this.svc.updateBoard(req.params.id, req.identity.orgId, req.body);
      return res.json({ message: 'Updated' });
    } catch (e: any) { return res.status(500).json({ message: e.message }); }
  }

  async delete(req: AuthenticatedRequest, res: Response) {
    try {
      await this.svc.deleteBoard(req.params.id, req.identity.orgId);
      return res.json({ message: 'Deleted' });
    } catch (e: any) { return res.status(500).json({ message: e.message }); }
  }
}

export class ColumnController {
  private svc = new ColumnService();

  async listByBoard(req: AuthenticatedRequest, res: Response) {
    try {
      const cols = await this.svc.getColumns(req.params.boardId, req.identity.orgId);
      return res.json({ data: cols });
    } catch (e: any) { return res.status(500).json({ message: e.message }); }
  }

  async create(req: AuthenticatedRequest, res: Response) {
    try {
      if (!req.body.name) return res.status(400).json({ message: 'name required' });
      const col = await this.svc.createColumn(req.params.boardId, req.identity.orgId, req.body);
      return res.status(201).json({ data: col });
    } catch (e: any) { return res.status(500).json({ message: e.message }); }
  }

  async update(req: AuthenticatedRequest, res: Response) {
    try {
      await this.svc.updateColumn(req.params.id, req.identity.orgId, req.body);
      return res.json({ message: 'Updated' });
    } catch (e: any) { return res.status(500).json({ message: e.message }); }
  }

  async delete(req: AuthenticatedRequest, res: Response) {
    try {
      await this.svc.deleteColumn(req.params.id, req.identity.orgId);
      return res.json({ message: 'Deleted' });
    } catch (e: any) { return res.status(500).json({ message: e.message }); }
  }
}

export class CardController {
  private svc = new CardService();

  async listByBoard(req: AuthenticatedRequest, res: Response) {
    try {
      const cards = await this.svc.getCards(req.params.boardId, req.identity.orgId);
      return res.json({ data: cards });
    } catch (e: any) { return res.status(500).json({ message: e.message }); }
  }

  async get(req: AuthenticatedRequest, res: Response) {
    try {
      const card = await this.svc.getCard(req.params.id, req.identity.orgId);
      return res.json({ data: card });
    } catch (e: any) {
      if (e.message === 'Not found') return res.status(404).json({ message: e.message });
      return res.status(500).json({ message: e.message });
    }
  }

  async create(req: AuthenticatedRequest, res: Response) {
    try {
      if (!req.body.columnId || !req.body.title) return res.status(400).json({ message: 'columnId and title required' });
      const { orgId, userId } = req.identity;
      const card = await this.svc.createCard(req.params.boardId, orgId, userId, req.body);
      return res.status(201).json({ data: card });
    } catch (e: any) { return res.status(500).json({ message: e.message }); }
  }

  async update(req: AuthenticatedRequest, res: Response) {
    try {
      await this.svc.updateCard(req.params.id, req.identity.orgId, req.body);
      return res.json({ message: 'Updated' });
    } catch (e: any) { return res.status(500).json({ message: e.message }); }
  }

  async delete(req: AuthenticatedRequest, res: Response) {
    try {
      await this.svc.deleteCard(req.params.id, req.identity.orgId);
      return res.json({ message: 'Deleted' });
    } catch (e: any) { return res.status(500).json({ message: e.message }); }
  }
}

export class TaskController {
  private svc = new TaskService();

  async list(req: AuthenticatedRequest, res: Response) {
    try {
      const r = await this.svc.getTasks(req.identity.orgId, req.query);
      return res.json({ data: r.data, total: r.total });
    } catch (e: any) { return res.status(500).json({ message: e.message }); }
  }

  async create(req: AuthenticatedRequest, res: Response) {
    try {
      if (!req.body.title) return res.status(400).json({ message: 'title required' });
      const { orgId, userId } = req.identity;
      const task = await this.svc.createTask(orgId, userId, req.body);
      return res.status(201).json({ data: task });
    } catch (e: any) { return res.status(500).json({ message: e.message }); }
  }

  async update(req: AuthenticatedRequest, res: Response) {
    try {
      await this.svc.updateTask(req.params.id, req.identity.orgId, req.body);
      return res.json({ message: 'Updated' });
    } catch (e: any) { return res.status(500).json({ message: e.message }); }
  }

  async delete(req: AuthenticatedRequest, res: Response) {
    try {
      await this.svc.deleteTask(req.params.id, req.identity.orgId);
      return res.json({ message: 'Deleted' });
    } catch (e: any) { return res.status(500).json({ message: e.message }); }
  }
}

export class LabelController {
  private svc = new LabelService();

  async list(req: AuthenticatedRequest, res: Response) {
    try { return res.json({ data: await this.svc.getLabels(req.identity.orgId) }); }
    catch (e: any) { return res.status(500).json({ message: e.message }); }
  }

  async create(req: AuthenticatedRequest, res: Response) {
    try {
      if (!req.body.name) return res.status(400).json({ message: 'name required' });
      const label = await this.svc.createLabel(req.identity.orgId, req.body.name, req.body.color);
      return res.status(201).json({ data: label });
    } catch (e: any) { return res.status(500).json({ message: e.message }); }
  }

  async delete(req: AuthenticatedRequest, res: Response) {
    try {
      await this.svc.deleteLabel(req.params.id, req.identity.orgId);
      return res.json({ message: 'Deleted' });
    } catch (e: any) { return res.status(500).json({ message: e.message }); }
  }
}
