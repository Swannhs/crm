import { Injectable, Scope, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { INITIAL_MOCK_DATA } from './odoo-mock.constants.js';

@Injectable({ scope: Scope.REQUEST })
export class OdooClientService {
  private readonly logger = new Logger(OdooClientService.name);
  private url: string;
  private db: string;
  private password: string;
  private uid: number | null = null;

  // Shared in-memory store across requests (static)
  private static mockStore: Record<string, any[]> = { ...INITIAL_MOCK_DATA };

  constructor(private configService: ConfigService) {
    this.url = this.configService.get<string>('ODOO_BASE_URL') || 'http://odoo-demo:8069';
    this.db = this.configService.get<string>('ODOO_DB') || 'demo';
    this.password = this.configService.get<string>('ODOO_PASSWORD') || 'admin';
  }

  /**
   * Internal JSON-RPC caller
   */
  private async jsonRpcCall(service: 'common' | 'object', method: string, args: any[]) {
    const payload = {
      jsonrpc: '2.0',
      method: 'call',
      params: {
        service,
        method,
        args,
      },
      id: Math.floor(Math.random() * 1000000),
    };

    try {
      const response = await axios.post(`${this.url}/jsonrpc`, payload, {
        headers: { 'Content-Type': 'application/json' },
        timeout: 5000,
      });

      if (response.data?.error) {
        throw new Error(response.data.error.message || 'Odoo JSON-RPC Error');
      }

      return response.data?.result;
    } catch (error) {
      this.logger.error(`JSON-RPC error at ${service}.${method}: ${error.message}`);
      throw error;
    }
  }

  async authenticate(username?: string, password?: string): Promise<number> {
    try {
      if (!this.url.includes('odoo-demo') && !this.url.includes('localhost')) {
        const uid = await this.jsonRpcCall('common', 'authenticate', [
          this.db,
          username || this.configService.get<string>('ODOO_USERNAME') || 'admin',
          password || this.password,
          {},
        ]);
        
        if (!uid || typeof uid !== 'number') {
          throw new Error('Authentication failed: Invalid credentials or database');
        }

        this.uid = uid;
        return uid;
      }
      
      this.uid = 1;
      return 1;
    } catch (error) {
      this.logger.warn(`Odoo JSON-RPC authentication failed, falling back to mock mode: ${error.message}`);
      this.uid = 1;
      return 1;
    }
  }

  async execute(model: string, method: string, args: any[], kwargs: any = {}): Promise<any> {
    if (!this.uid) await this.authenticate();

    try {
      if (!this.url.includes('odoo-demo') && !this.url.includes('localhost')) {
        return await this.jsonRpcCall('object', 'execute_kw', [
          this.db,
          this.uid,
          this.password,
          model,
          method,
          args,
          kwargs,
        ]);
      }
      return this.handleMockExecute(model, method, args, kwargs);
    } catch (error) {
      this.logger.warn(`Odoo JSON-RPC execution failed for ${model}.${method}, falling back to mock mode: ${error.message}`);
      return this.handleMockExecute(model, method, args, kwargs);
    }
  }

  async searchRead(model: string, domain: any[] = [], fields: string[] = [], options: any = {}): Promise<any[]> {
    return this.execute(model, 'search_read', [domain], {
      fields,
      ...options,
    });
  }

  private normalizeComparable(value: any): any {
    if (Array.isArray(value)) {
      return value[0];
    }
    return value;
  }

  private evaluateCondition(record: any, condition: any[]): boolean {
    const [field, operator, rawValue] = condition;
    const left = this.normalizeComparable(record?.[field]);
    const right = operator === 'in' ? rawValue : this.normalizeComparable(rawValue);

    switch (operator) {
      case '=':
        return left === right;
      case '!=':
        return left !== right;
      case '>':
        return Number(left ?? 0) > Number(right ?? 0);
      case '>=':
        return Number(left ?? 0) >= Number(right ?? 0);
      case '<':
        return Number(left ?? 0) < Number(right ?? 0);
      case '<=':
        return Number(left ?? 0) <= Number(right ?? 0);
      case 'in':
        return Array.isArray(rawValue) ? rawValue.includes(left) : false;
      case 'ilike': {
        const leftText = String(left ?? '').toLowerCase();
        const pattern = String(right ?? '').toLowerCase().replaceAll('%', '');
        return leftText.includes(pattern);
      }
      default:
        return true;
    }
  }

  private filterByDomain(records: any[], domain: any[]): any[] {
    if (!Array.isArray(domain) || domain.length === 0) {
      return records;
    }

    return records.filter((record) => {
      let cursor = 0;

      const evalNode = (): boolean => {
        const token = domain[cursor++];

        if (token === '|') {
          const left = evalNode();
          const right = evalNode();
          return left || right;
        }

        if (token === '&') {
          const left = evalNode();
          const right = evalNode();
          return left && right;
        }

        if (token === '!') {
          return !evalNode();
        }

        if (Array.isArray(token)) {
          return this.evaluateCondition(record, token);
        }

        return true;
      };

      // Odoo domains without explicit operators are AND-ed.
      let result = true;
      while (cursor < domain.length) {
        result = result && evalNode();
      }

      return result;
    });
  }

  private handleMockExecute(model: string, method: string, args: any[], kwargs: any): any {
    if (!OdooClientService.mockStore[model]) {
      OdooClientService.mockStore[model] = [];
    }

    const store = OdooClientService.mockStore[model];

    switch (method) {
      case 'search_count':
        return this.filterByDomain(store, args?.[0] ?? []).length;

      case 'search_read':
        const domain = args?.[0] ?? [];
        const filtered = this.filterByDomain(store, domain);
        const offset = kwargs.offset || 0;
        const limit = kwargs.limit || 100;
        return filtered.slice(offset, offset + limit);

      case 'create':
        const newId = store.length + 1001;
        const newRecord = { 
          id: newId, 
          ...args[0], 
          create_date: new Date().toISOString(),
          createdAt: new Date().toISOString(),
          priority: args[0].priority || '0',
          kanban_state: args[0].kanban_state || 'normal'
        };
        store.unshift(newRecord);
        return newId;

      case 'write':
        const idsToUpdate = args[0];
        const updateData = args[1];
        idsToUpdate.forEach((id: number) => {
          const index = store.findIndex(item => item.id === id);
          if (index !== -1) {
            store[index] = { ...store[index], ...updateData, write_date: new Date().toISOString() };
          }
        });
        return true;

      case 'unlink':
        const idsToDelete = args[0];
        OdooClientService.mockStore[model] = store.filter(item => !idsToDelete.includes(item.id));
        return true;

      case 'action_post':
        return true;

      case '_render_qweb_pdf':
        // Return a dummy PDF base64
        return ['JVBERi0xLjEKMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMiAwIFIKPj4KZW5kb2JqCjIgMCBvYmoKPDAKL1R5cGUgL1BhZ2VzCi9LaWRzIFszIDAgUl0KL0NvdW50IDEKPj4KZW5kb2JqCjMgMCBvYmoKPDAKL1R5cGUgL1BhZ2UKL1BhcmVudCAyIDAgUgovTWVkaWFCb3ggWzAgMCA2MTIgNzkyXQovUmVzb3VyY2VzIDw8Pj4KL0NvbnRlbnRzIDQgMCBSCj4+CmVuZG9iago0IDAgb2JqCjw8Ci9MZW5ndGggMAo+PgpzdHJlYW0KZW5kc3RyZWFtCmVuZG9iagp4cmVmCjAgNQowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAwMTggMDAwMDAgbiAKMDAwMDAwMDA2NiAwMDAwMCBuIAowMDAwMDAwMTIxIDAwMDAwIG4gCjAwMDAwMDAyMzEgMDAwMDAgbiAKdHJhaWxlcgo8PAovU2l6ZSA1Ci9Sb290IDEgMCBSCj4+CnN0YXJ0eHJlZgoyNzIKJSVFT0Y=', 'pdf'];

      default:
        return Array.isArray(store) ? store : [];
    }
  }
}
