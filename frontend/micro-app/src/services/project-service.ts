import axiosInstance from 'src/utils/axios';

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
  if (Array.isArray(response.data?.data)) return response.data.data;
  if (Array.isArray(response.data)) return response.data;
  if (Array.isArray(response.data?.data?.data)) return response.data.data.data;
  return [];
}

export async function createTask(data: any) {
  const response = await axiosInstance.post('/api/projects/v1/tasks', data);
  return response.data;
}

export async function updateTask(id: string, data: any) {
  const response = await axiosInstance.put(`/api/projects/v1/tasks/${id}`, data);
  return response.data?.data ?? response.data;
}

export async function completeTask(id: string) {
  const response = await axiosInstance.post(`/api/projects/v1/tasks/${id}/complete`);
  return response.data?.data ?? response.data;
}

export async function deleteTask(id: string) {
  const response = await axiosInstance.delete(`/api/projects/v1/tasks/${id}`);
  return response.data?.data ?? response.data;
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

export async function updateColumn(id: string, data: any) {
  const response = await axiosInstance.patch(`/api/projects/v1/columns/${id}`, data);
  return response.data;
}

export async function deleteColumn(id: string) {
  const response = await axiosInstance.delete(`/api/projects/v1/columns/${id}`);
  return response.data;
}

export async function reorderColumns(boardId: string, orderedColumnIds: Array<string | number>) {
  const response = await axiosInstance.post(`/api/projects/v1/boards/${boardId}/columns/reorder`, { orderedColumnIds });
  return response.data?.data ?? response.data ?? [];
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

export async function updateCard(id: string, data: any) {
  const response = await axiosInstance.patch(`/api/projects/v1/cards/${id}`, data);
  return response.data;
}

export async function deleteCard(id: string) {
  const response = await axiosInstance.delete(`/api/projects/v1/cards/${id}`);
  return response.data;
}

export async function getWorklogs(taskId: string) {
  const response = await axiosInstance.get(`/api/projects/v1/tasks/${taskId}/worklogs`);
  return response.data?.data ?? response.data ?? [];
}

export async function logWork(taskId: string, data: any) {
  const response = await axiosInstance.post(`/api/projects/v1/tasks/${taskId}/worklogs`, data);
  return response.data;
}

export async function getSubtasks(taskId: string) {
  const response = await axiosInstance.get(`/api/projects/v1/tasks/${taskId}/subtasks`);
  return response.data?.data ?? response.data ?? [];
}

export async function createSubtask(taskId: string, data: any) {
  const response = await axiosInstance.post(`/api/projects/v1/tasks/${taskId}/subtasks`, data);
  return response.data;
}

export async function getComments(taskId: string) {
  const response = await axiosInstance.get(`/api/projects/v1/tasks/${taskId}/comments`);
  return response.data?.data ?? response.data ?? [];
}

export async function addComment(taskId: string, data: any) {
  const response = await axiosInstance.post(`/api/projects/v1/tasks/${taskId}/comments`, data);
  return response.data;
}

export async function addReply(commentId: string, data: any) {
  const response = await axiosInstance.post(`/api/projects/v1/comments/${commentId}/replies`, data);
  return response.data;
}

export const projectService = {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
  getProjectBoards,
  getTasks,
  createTask,
  updateTask,
  completeTask,
  deleteTask,
  createBoard,
  getBoard,
  getColumns,
  createColumn,
  updateColumn,
  deleteColumn,
  reorderColumns,
  getCards,
  createCard,
  updateCard,
  deleteCard,
  getWorklogs,
  logWork,
  getSubtasks,
  createSubtask,
  getComments,
  addComment,
  addReply,
};
