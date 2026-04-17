import { api } from "@/lib/api";

export interface Pipeline {
  id: string;
  name: string;
  stages: Stage[];
}

export interface Stage {
  id: string;
  name: string;
  order: number;
  contacts: any[];
}

export const pipelineService = {
  getPipelines: async () => {
    const response = await api.get('/crm/v1/pipelines');
    return response.data;
  },
  
  getPipelineView: async (pipelineId: string) => {
    const response = await api.get(`/crm/v1/pipelines/${pipelineId}/view`);
    return response.data;
  },
  
  moveContact: async (pipelineContactId: string, stageId: string) => {
    const response = await api.post(`/crm/v1/pipeline-contacts/${pipelineContactId}/move`, {
      stage_id: stageId
    });
    return response.data;
  }
};
