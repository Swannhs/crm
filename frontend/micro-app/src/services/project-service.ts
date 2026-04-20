import axiosInstance, { endpoints } from 'src/utils/axios';

// ----------------------------------------------------------------------

export async function getProjects() {
  const response = await axiosInstance.get('/api/projects/v1/projects');
  return response.data?.data ?? response.data ?? [];
}

export async function getProject(id: string) {
  const response = await axiosInstance.get(`/api/projects/v1/projects/${id}`);
  return response.data?.data ?? response.data;
}

export async function createProject(data: any) {
  const payload = {
    ...data,
    name: data.name ?? data.title,
  };
  const response = await axiosInstance.post('/api/projects/v1/projects', payload);
  return response.data;
}

export async function updateProject(id: string, data: any) {
  const response = await axiosInstance.put(`/api/projects/v1/projects/${id}`, data);
  return response.data;
}

export async function deleteProject(id: string) {
  const response = await axiosInstance.delete(`/api/projects/v1/projects/${id}`);
  return response.data;
}

// Kanban / Boards
export async function getProjectBoards(projectId: string) {
  const response = await axiosInstance.get(`/api/projects/v1/projects/${projectId}/boards`);
  return response.data?.data ?? response.data ?? [];
}

export async function getTasks() {
  const response = await axiosInstance.get('/api/projects/v1/tasks');
  return response.data?.data ?? response.data ?? [];
}

export async function createTask(data: any) {
  const response = await axiosInstance.post('/api/projects/v1/tasks', data);
  return response.data;
}

export async function createBoard(projectId: string, data: any) {
  const response = await axiosInstance.post(`/api/projects/v1/projects/${projectId}/boards`, data);
  return response.data;
}

// Columns
export async function getColumns(boardId: string) {
  const response = await axiosInstance.get(`/api/projects/v1/boards/${boardId}/columns`);
  return response.data?.data ?? response.data ?? [];
}

export async function createColumn(boardId: string, data: any) {
  const response = await axiosInstance.post(`/api/projects/v1/boards/${boardId}/columns`, data);
  return response.data;
}

// Cards / Tasks
export async function getCards(boardId: string) {
  const response = await axiosInstance.get(`/api/projects/v1/boards/${boardId}/cards`);
  return response.data?.data ?? response.data ?? [];
}

export async function getBoard(boardId: string) {
  const response = await axiosInstance.get(`/api/projects/v1/boards/${boardId}`);
  return response.data?.data ?? response.data;
}

export async function createCard(boardId: string, data: any) {
  const response = await axiosInstance.post(`/api/projects/v1/boards/${boardId}/cards`, data);
  return response.data;
}

export const projectService = {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
  getProjectBoards,
  createBoard,
  getColumns,
  createColumn,
  getCards,
  getBoard,
  createCard,
};
