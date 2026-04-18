import api from '../lib/api';

export interface Project {
  id: string;
  orgId: string;
  name: string;
  description?: string;
  status: 'active' | 'archived' | 'completed';
  color?: string;
  createdAt: string;
}

export interface Task {
  id: string;
  orgId: string;
  title: string;
  description?: string;
  status: 'todo' | 'in_progress' | 'done' | 'cancelled';
  priority?: 'low' | 'medium' | 'high';
  dueDate?: string;
  createdAt: string;
}

export const projectsService = {
  getProjects: async (params?: { status?: string }) => {
    const response = await api.get<{ data: Project[]; total: number }>('/projects/v1/projects', { params });
    return response.data;
  },

  getProject: async (id: string) => {
    const response = await api.get<{ data: Project }>(`/projects/v1/projects/${id}`);
    return response.data;
  },

  createProject: async (data: Partial<Project>) => {
    const response = await api.post<{ data: Project }>('/projects/v1/projects', data);
    return response.data;
  },

  getTasks: async (params?: { status?: string }) => {
    const response = await api.get<{ data: Task[]; total: number }>('/projects/v1/tasks', { params });
    return response.data;
  },
};
