import axios from 'src/utils/axios';

function unwrap<T>(payload: unknown): T {
  const typed = payload as { data?: T };
  return (typed?.data ?? payload) as T;
}

export async function listTickets(status?: string) {
  const response = await axios.get('/api/odoo/support/tickets', { params: { status } });
  return unwrap<any[]>(response.data);
}

export async function getTicket(id: string) {
  const response = await axios.get(`/api/odoo/support/tickets/${encodeURIComponent(id)}`);
  return unwrap<any>(response.data);
}

export async function createTicket(payload: any) {
  const response = await axios.post('/api/odoo/support/tickets', payload);
  return unwrap<any>(response.data);
}

export async function updateTicket(id: string, payload: any) {
  const response = await axios.patch(`/api/odoo/support/tickets/${encodeURIComponent(id)}`, payload);
  return unwrap<any>(response.data);
}

export async function addTicketNote(id: string, body: string) {
  const response = await axios.post(`/api/odoo/support/tickets/${encodeURIComponent(id)}/notes`, { body });
  return unwrap<any>(response.data);
}

export async function addTicketReply(id: string, body: string, visibleToCustomer = true) {
  const response = await axios.post(`/api/odoo/support/tickets/${encodeURIComponent(id)}/replies`, { body, visibleToCustomer });
  return unwrap<any>(response.data);
}

export async function listKbCategories() {
  const response = await axios.get('/api/odoo/support/kb/categories');
  return unwrap<any[]>(response.data);
}

export async function listKbArticles(categoryId?: string) {
  const response = await axios.get('/api/odoo/support/kb/articles', { params: { categoryId } });
  return unwrap<any[]>(response.data);
}

export async function createKbArticle(payload: any) {
  const response = await axios.post('/api/odoo/support/kb/articles', payload);
  return unwrap<any>(response.data);
}

export async function listPublicKbArticles() {
  const response = await axios.get('/api/odoo/support/portal/articles');
  return unwrap<any[]>(response.data);
}

export const supportService = {
  listTickets,
  getTicket,
  createTicket,
  updateTicket,
  addTicketNote,
  addTicketReply,
  listKbCategories,
  listKbArticles,
  createKbArticle,
  listPublicKbArticles,
};
