import { OdooClient } from '../../clients/odooClient.js';
import { config } from '../../config/env.js';

export type OdooConnectionInput = {
  baseUrl?: string;
  db?: string;
  username?: string;
  password?: string;
  apiKey?: string;
};

export type OdooResolvedConnection = {
  baseUrl: string;
  db: string;
  username: string;
  password?: string;
  apiKey?: string;
  usingApiKey: boolean;
};

export type OdooConnectionView = {
  connected: boolean;
  baseUrl: string;
  db: string | null;
  username: string | null;
  usingApiKey: boolean;
  credentialSource: 'env-only' | 'memory';
};

// NOTE: Temporary first-version storage only.
// Credentials in this map are kept in process memory and are not production-safe.
const inMemoryConnections = new Map<string, OdooConnectionInput>();

export function setConnection(orgId: string, input: OdooConnectionInput) {
  inMemoryConnections.set(orgId, {
    ...input,
    baseUrl: input.baseUrl?.trim(),
    db: input.db?.trim(),
    username: input.username?.trim(),
  });
}

export function clearConnection(orgId: string) {
  return inMemoryConnections.delete(orgId);
}

export function resolveConnection(orgId: string): OdooResolvedConnection {
  const override = inMemoryConnections.get(orgId);

  const baseUrl = (override?.baseUrl || config.odooBaseUrl).trim();
  const db = (override?.db || config.odooDb).trim();
  const username = (override?.username || config.odooUsername).trim();
  const apiKey = (override?.apiKey || config.odooApiKey).trim();
  const password = (override?.password || config.odooPassword).trim();

  return {
    baseUrl,
    db,
    username,
    apiKey: apiKey || undefined,
    password: password || undefined,
    usingApiKey: Boolean(apiKey),
  };
}

export function createOdooClient(orgId: string) {
  const resolved = resolveConnection(orgId);
  return new OdooClient({
    baseUrl: resolved.baseUrl,
    db: resolved.db,
    username: resolved.username,
    apiKey: resolved.apiKey,
    password: resolved.password,
  });
}

export async function getConnectionView(orgId: string): Promise<OdooConnectionView> {
  const resolved = resolveConnection(orgId);
  const source = inMemoryConnections.has(orgId) ? 'memory' : 'env-only';

  const hasCore = Boolean(resolved.baseUrl && resolved.db && resolved.username && (resolved.apiKey || resolved.password));
  if (!hasCore) {
    return {
      connected: false,
      baseUrl: resolved.baseUrl,
      db: resolved.db || null,
      username: resolved.username || null,
      usingApiKey: resolved.usingApiKey,
      credentialSource: source,
    };
  }

  try {
    const client = createOdooClient(orgId);
    await client.authenticate();
    return {
      connected: true,
      baseUrl: resolved.baseUrl,
      db: resolved.db,
      username: resolved.username,
      usingApiKey: resolved.usingApiKey,
      credentialSource: source,
    };
  } catch {
    return {
      connected: false,
      baseUrl: resolved.baseUrl,
      db: resolved.db || null,
      username: resolved.username || null,
      usingApiKey: resolved.usingApiKey,
      credentialSource: source,
    };
  }
}
