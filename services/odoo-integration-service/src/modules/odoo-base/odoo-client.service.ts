import { Injectable, Scope } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as xmlrpc from 'xmlrpc';
import { promisify } from 'util';

@Injectable({ scope: Scope.REQUEST })
export class OdooClientService {
  private uid: number;
  private db: string;
  private url: string;
  private password: string;

  constructor(private configService: ConfigService) {
    this.url = this.configService.get<string>('ODOO_BASE_URL');
    this.db = this.configService.get<string>('ODOO_DB');
    this.password = this.configService.get<string>('ODOO_PASSWORD');
  }

  async authenticate(username?: string, password?: string): Promise<number> {
    const commonClient = xmlrpc.createSecureClient(`${this.url}/xmlrpc/2/common`);
    const authenticate = promisify(commonClient.methodCall.bind(commonClient));
    
    this.uid = await authenticate('authenticate', [
      this.db,
      username || this.configService.get<string>('ODOO_USERNAME'),
      password || this.password,
      {},
    ]);

    if (!this.uid) {
      throw new Error('Odoo authentication failed');
    }

    return this.uid;
  }

  async execute(model: string, method: string, args: any[], kwargs: any = {}): Promise<any> {
    if (!this.uid) {
      await this.authenticate();
    }

    const objectClient = xmlrpc.createSecureClient(`${this.url}/xmlrpc/2/object`);
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
  }

  async searchRead(model: string, domain: any[], fields: string[], options: any = {}): Promise<any[]> {
    return this.execute(model, 'search_read', [domain], {
      fields,
      ...options,
    });
  }
}
