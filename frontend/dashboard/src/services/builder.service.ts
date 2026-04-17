import api from '../lib/api';

export interface BuilderComponent {
  id: string;
  type: 'input' | 'select' | 'textarea' | 'trigger' | 'action';
  label: string;
  config: Record<string, any>;
}

export interface Workflow {
  id: string;
  name: string;
  components: BuilderComponent[];
  createdAt: string;
}

export const builderService = {
  getWorkflows: async () => {
    const response = await api.get<{ data: Workflow[] }>(`/v1/workflows`);
    return response.data;
  },
  
  getWorkflowById: async (id: string) => {
    const response = await api.get<{ data: Workflow }>(`/v1/workflows/${id}`);
    return response.data;
  },
  
  saveWorkflow: async (data: Partial<Workflow>) => {
    const response = await api.post<{ data: Workflow }>(`/v1/workflows`, data);
    return response.data;
  }
};
