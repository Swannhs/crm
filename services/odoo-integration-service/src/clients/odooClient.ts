import { OdooApiError, OdooAuthError, OdooConnectionError } from '../lib/errors.js';

type JsonRpcSuccess<T> = { result: T };
type JsonRpcFailure = { error?: { message?: string; data?: { message?: string } } };

type SearchReadOptions = {
  limit?: number;
  offset?: number;
  order?: string;
};

export type OdooClientOptions = {
  baseUrl: string;
  db: string;
  username: string;
  password?: string;
  apiKey?: string;
  timeoutMs?: number;
};

export class OdooClient {
  private readonly baseUrl: string;
  private readonly db: string;
  private readonly username: string;
  private readonly secret: string;
  private readonly timeoutMs: number;

  private uid: number | null = null;
  private sessionCookie: string | null = null;

  constructor(options: OdooClientOptions) {
    const secret = (options.apiKey || options.password || '').trim();
    if (!options.baseUrl || !options.db || !options.username || !secret) {
      throw new OdooAuthError('Missing required Odoo credentials (baseUrl, db, username, secret).');
    }

    this.baseUrl = options.baseUrl.replace(/\/+$/, '');
    this.db = options.db;
    this.username = options.username;
    this.secret = secret;
    this.timeoutMs = Number(options.timeoutMs || 20000);
  }

  async authenticate(): Promise<number> {
    if (this.uid && this.sessionCookie) return this.uid;

    const payload = {
      jsonrpc: '2.0',
      method: 'call',
      params: {
        db: this.db,
        login: this.username,
        password: this.secret,
      },
      id: Date.now(),
    };

    const response = await this.request<JsonRpcSuccess<{ uid?: number }> & JsonRpcFailure>('/web/session/authenticate', {
      method: 'POST',
      body: JSON.stringify(payload),
    });

    const uid = Number(response?.result?.uid || 0);
    if (!uid) {
      throw this.toApiError(response, 'Odoo authentication failed.');
    }

    this.uid = uid;
    return uid;
  }

  async searchRead(
    model: string,
    domain: unknown[],
    fields: string[],
    options?: SearchReadOptions
  ): Promise<unknown[]> {
    const result = await this.call(model, 'search_read', [domain], {
      fields,
      ...(options || {}),
    });

    if (!Array.isArray(result)) {
      throw new OdooApiError(`Unexpected Odoo response for ${model}.search_read`);
    }

    return result;
  }

  async create(model: string, values: Record<string, unknown>): Promise<number> {
    const result = await this.call(model, 'create', [values]);
    const id = Number(result || 0);
    if (!id) {
      throw new OdooApiError(`Failed to create ${model} record.`);
    }
    return id;
  }

  async write(model: string, ids: number[], values: Record<string, unknown>): Promise<boolean> {
    const result = await this.call(model, 'write', [ids, values]);
    return Boolean(result);
  }

  async call(
    model: string,
    method: string,
    args: unknown[] = [],
    kwargs: Record<string, unknown> = {}
  ): Promise<unknown> {
    await this.authenticate();

    const payload = {
      jsonrpc: '2.0',
      method: 'call',
      params: {
        model,
        method,
        args,
        kwargs,
      },
      id: Date.now(),
    };

    const response = await this.request<JsonRpcSuccess<unknown> & JsonRpcFailure>(
      `/web/dataset/call_kw/${encodeURIComponent(model)}/${encodeURIComponent(method)}`,
      {
        method: 'POST',
        body: JSON.stringify(payload),
      }
    );

    if (response?.error) {
      throw this.toApiError(response, `Odoo API error for ${model}.${method}`);
    }

    return response.result;
  }

  private async request<T>(path: string, init: RequestInit): Promise<T> {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), this.timeoutMs);

    try {
      const headers = new Headers(init.headers || {});
      headers.set('Content-Type', 'application/json');
      if (this.sessionCookie) {
        headers.set('Cookie', this.sessionCookie);
      }

      const response = await fetch(`${this.baseUrl}${path}`, {
        ...init,
        headers,
        signal: controller.signal,
      });

      const setCookie = response.headers.get('set-cookie');
      if (setCookie) {
        this.sessionCookie = setCookie.split(';')[0];
      }

      const text = await response.text();
      const parsed = text ? JSON.parse(text) : {};

      if (response.status === 401 || response.status === 403) {
        throw new OdooAuthError('Odoo authentication rejected the request.');
      }

      if (!response.ok) {
        const message = parsed?.error?.data?.message || parsed?.error?.message || `Odoo HTTP ${response.status}`;
        throw new OdooApiError(message);
      }

      return parsed as T;
    } catch (error) {
      if (error instanceof OdooAuthError || error instanceof OdooApiError) throw error;
      if (error instanceof Error && error.name === 'AbortError') {
        throw new OdooConnectionError('Odoo request timed out.');
      }
      throw new OdooConnectionError(error instanceof Error ? error.message : 'Unable to reach Odoo.');
    } finally {
      clearTimeout(timeout);
    }
  }

  private toApiError(response: JsonRpcFailure, fallback: string): OdooApiError {
    const message = response?.error?.data?.message || response?.error?.message || fallback;
    return new OdooApiError(message);
  }
}
