export type SyncEntity = 'customers' | 'orders' | 'all';

export type SyncBody = {
  dryRun?: boolean;
  limit?: number;
  since?: string;
  push?: boolean;
};

export type SyncResponse = {
  dryRun: boolean;
  source: 'magento';
  target: 'odoo';
  entity: SyncEntity;
  seen: number;
  created?: number;
  updated?: number;
  skipped?: number;
  errors?: Array<{ id?: string | number; message: string }>;
  items?: unknown[];
  message?: string;
};

export function normalizeSyncBody(payload: any): Required<Pick<SyncBody, 'dryRun' | 'limit'>> & Pick<SyncBody, 'since' | 'push'> {
  const dryRun = payload?.dryRun !== false;
  const limit = Math.max(1, Math.min(Number(payload?.limit || 50), 500));
  const since = payload?.since ? String(payload.since) : undefined;
  const push = payload?.push === true;
  return { dryRun, limit, since, push };
}
