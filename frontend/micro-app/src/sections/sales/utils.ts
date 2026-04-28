import { fNumber, fCurrency } from 'src/utils/format-number';

import type { SalesStage, SalesOpportunity } from './types';

export const SALES_STAGE_ORDER: SalesStage[] = ['new', 'qualified', 'proposal', 'negotiation', 'won', 'lost'];

export const SALES_STAGE_LABEL: Record<SalesStage, string> = {
  new: 'New',
  qualified: 'Qualified',
  proposal: 'Proposal',
  negotiation: 'Negotiation',
  won: 'Won',
  lost: 'Lost',
};

export function hasNumber(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value);
}

export function formatOptionalNumber(value: unknown) {
  return hasNumber(value) ? fNumber(value) : 'Unavailable';
}

export function formatOptionalCurrency(value: unknown) {
  return hasNumber(value) ? fCurrency(value) : 'Unavailable';
}

export function formatOptionalPercent(value: unknown) {
  return hasNumber(value) ? `${value.toFixed(1)}%` : 'Unavailable';
}

export function normalizeStage(stage: string | undefined): SalesStage {
  const s = String(stage || '').toLowerCase();
  if (s === 'new' || s === 'qualified' || s === 'proposal' || s === 'negotiation' || s === 'won' || s === 'lost') return s;
  if (s.includes('qual')) return 'qualified';
  if (s.includes('prop')) return 'proposal';
  if (s.includes('nego')) return 'negotiation';
  if (s.includes('won')) return 'won';
  if (s.includes('lost')) return 'lost';
  return 'new';
}

export function groupOpportunitiesByStage(opportunities: SalesOpportunity[]) {
  return SALES_STAGE_ORDER.map((stage) => ({
    stage,
    label: SALES_STAGE_LABEL[stage],
    items: opportunities.filter((o) => normalizeStage(o.stage) === stage),
  }));
}
