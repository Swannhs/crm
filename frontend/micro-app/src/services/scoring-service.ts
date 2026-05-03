import axios from 'src/utils/axios';

function unwrap<T>(payload: unknown): T {
  const typed = payload as { data?: T };
  return (typed?.data ?? payload) as T;
}

export type ScoreRule = {
  id: string;
  scope: 'contact' | 'lead' | 'both';
  category: string;
  name: string;
  weight: number;
  condition?: Record<string, unknown> | null;
  active: boolean;
};

export async function getContactScore(id: string | number) {
  const response = await axios.get(`/api/odoo/scores/contacts/${encodeURIComponent(String(id))}`);
  return unwrap<any>(response.data);
}

export async function getHotLeads(limit = 20, threshold = 60) {
  const response = await axios.get('/api/odoo/scores/leads/hot', { params: { limit, threshold } });
  return unwrap<any[]>(response.data);
}

export async function getScoreRules() {
  const response = await axios.get('/api/odoo/scores/rules');
  return unwrap<ScoreRule[]>(response.data);
}

export async function createScoreRule(payload: Partial<ScoreRule> & { condition?: any }) {
  const response = await axios.post('/api/odoo/scores/rules', payload);
  return unwrap<ScoreRule>(response.data);
}

export async function updateScoreRule(id: string, payload: Partial<ScoreRule> & { condition?: any }) {
  const response = await axios.put(`/api/odoo/scores/rules/${encodeURIComponent(id)}`, payload);
  return unwrap<any>(response.data);
}

export const scoringService = {
  getContactScore,
  getHotLeads,
  getScoreRules,
  createScoreRule,
  updateScoreRule,
};
