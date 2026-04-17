import api from '../lib/api';

export interface Project {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'completed' | 'on-hold';
  progress: number;
}

export interface Task {
  id: string;
  projectId: string;
  title: string;
  status: 'todo' | 'in-progress' | 'review' | 'done';
  priority: 'low' | 'medium' | 'high';
  assigneeId?: string;
}

export const projectService = {
  getProjects: async () => {
    const response = await api.get<{ data: Project[] }>(`/v1/projects`);
    return response.data;
  },
  
  getTasks: async (projectId?: string) => {
    const response = await api.get<{ data: Task[] }>(`/v1/tasks`, {
      params: { projectId }
    });
    return response.data;
  },
  
  updateTaskStatus: async (taskId: string, status: Task['status']) => {
    const response = await api.patch<{ data: Task }>(`/v1/tasks/${taskId}`, { status });
    return response.data;
  }
};
