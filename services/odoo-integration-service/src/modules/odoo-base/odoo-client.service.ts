import { Injectable, Scope, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as xmlrpc from 'xmlrpc';
import { promisify } from 'util';
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

  async authenticate(username?: string, password?: string): Promise<number> {
    try {
      // Logic for real Odoo connection
      if (!this.url.includes('odoo-demo') && !this.url.includes('localhost')) {
        const commonClient = xmlrpc.createClient(`${this.url}/xmlrpc/2/common`);
        const authenticate = promisify(commonClient.methodCall.bind(commonClient));
        const uid = await authenticate('authenticate', [
          this.db,
          username || this.configService.get<string>('ODOO_USERNAME') || 'admin',
          password || this.password,
          {},
        ]);
        this.uid = uid;
        return uid;
      }
      
      // Mock fallback
      this.uid = 1;
      return 1;
    } catch (error) {
      this.logger.warn(`Odoo authentication failed, falling back to mock mode: ${error.message}`);
      this.uid = 1;
      return 1;
    }
  }

  async execute(model: string, method: string, args: any[], kwargs: any = {}): Promise<any> {
    if (!this.uid) await this.authenticate();

    try {
      if (!this.url.includes('odoo-demo') && !this.url.includes('localhost')) {
        const objectClient = xmlrpc.createClient(`${this.url}/xmlrpc/2/object`);
        const execute = promisify(objectClient.methodCall.bind(objectClient));
        return await execute('execute_kw', [
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
      if (error.code === 'ECONNREFUSED' || error.code === 'ENOTFOUND') {
        return this.handleMockExecute(model, method, args, kwargs);
      }
      throw error;
    }
  }

  async searchRead(model: string, domain: any[] = [], fields: string[] = [], options: any = {}): Promise<any[]> {
    return this.execute(model, 'search_read', [domain], {
      fields,
      ...options,
    });
  }

  /**
   * Refactored Mock Engine
   * Handles CRUD operations in-memory when Odoo is unreachable.
   */
  private handleMockExecute(model: string, method: string, args: any[], kwargs: any): any {
    if (!OdooClientService.mockStore[model]) {
      OdooClientService.mockStore[model] = [];
    }

    const store = OdooClientService.mockStore[model];

    switch (method) {
      case 'search_count':
        return store.length;

      case 'search_read':
        const offset = kwargs.offset || 0;
        const limit = kwargs.limit || 100;
        return store.slice(offset, offset + limit);

      case 'create':
        const newId = store.length + 1001;
        const newRecord = { 
          id: newId, 
          ...args[0], 
          create_date: new Date().toISOString(),
          createdAt: new Date().toISOString(), // Compatibility with frontend
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

      default:
        return Array.isArray(store) ? store : [];
    }
  }
}
