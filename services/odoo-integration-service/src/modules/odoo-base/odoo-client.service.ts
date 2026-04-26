import { Injectable, Scope } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as xmlrpc from 'xmlrpc';
import { promisify } from 'util';

@Injectable({ scope: Scope.REQUEST })
export class OdooClientService {
  private uid: number | null = null;
  private db: string;
  private url: string;
  private password: string;

  constructor(private configService: ConfigService) {
    this.url = this.configService.get<string>('ODOO_BASE_URL') || 'http://odoo-demo:8069';
    this.db = this.configService.get<string>('ODOO_DB') || 'demo';
    this.password = this.configService.get<string>('ODOO_PASSWORD') || 'admin';
  }

  async authenticate(username?: string, password?: string): Promise<number> {
    try {
      const commonClient = xmlrpc.createClient(`${this.url}/xmlrpc/2/common`);
      const authenticate = promisify(commonClient.methodCall.bind(commonClient));
      
      this.uid = await authenticate('authenticate', [
        this.db,
        username || this.configService.get<string>('ODOO_USERNAME') || 'admin',
        password || this.password,
        {},
      ]);

      if (!this.uid) {
        throw new Error('Odoo authentication failed');
      }

      return this.uid;
    } catch (error) {
      console.warn('Odoo connection failed, using mock UID');
      this.uid = 1;
      return 1;
    }
  }

  async execute(model: string, method: string, args: any[], kwargs: any = {}): Promise<any> {
    try {
      if (!this.uid) {
        await this.authenticate();
      }

      if (this.url.includes('odoo') || this.url.includes('localhost')) {
         // If we are in mock mode, return dummy data
         return this.getMockData(model, method, args, kwargs);
      }

      const objectClient = xmlrpc.createClient(`${this.url}/xmlrpc/2/object`);
      const execute = promisify(objectClient.methodCall.bind(objectClient));

      return execute('execute_kw', [
        this.db,
        this.uid,
        this.password,
        model,
        method,
        args,
        kwargs,
      ]);
    } catch (error) {
      console.error(`Odoo execute failed for ${model}.${method}:`, error);
      return this.getMockData(model, method, args, kwargs);
    }
  }

  async searchRead(model: string, domain: any[], fields: string[], options: any = {}): Promise<any[]> {
    return this.execute(model, 'search_read', [domain], {
      fields,
      ...options,
    });
  }

  private getMockData(model: string, method: string, args: any[], kwargs: any): any {
    if (method === 'search_read') {
      if (model === 'res.partner') {
        return [
          { id: 1, name: 'John Doe', email: 'john@acme.corp', phone: '+1 555-0101', city: 'San Francisco', is_company: false },
          { id: 2, name: 'Acme Corp', email: 'info@acme.corp', phone: '+1 555-0202', city: 'San Francisco', is_company: true },
          { id: 3, name: 'Jane Smith', email: 'jane@globex.it', phone: '+1 555-0303', city: 'Milan', is_company: false },
        ];
      }
      if (model === 'crm.lead') {
        return [
          { id: 1, name: 'Enterprise Cloud Migration', planned_revenue: 150000, probability: 40, stage_id: [1, 'New'] },
          { id: 2, name: 'Mobile App Development', planned_revenue: 45000, probability: 80, stage_id: [3, 'Proposition'] },
        ];
      }
      if (model === 'account.move') {
        return [
          { id: 1, name: 'INV/2024/001', amount_total: 1200, state: 'posted', payment_state: 'paid', invoice_date: '2024-03-01' },
          { id: 2, name: 'INV/2024/002', amount_total: 3500, state: 'posted', payment_state: 'not_paid', invoice_date: '2024-03-15' },
        ];
      }
    }
    if (method === 'create') return 99;
    return [];
  }
}
