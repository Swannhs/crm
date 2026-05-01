import { config } from '../config/env.js';

export class OutlookAuthService {
  private clientId: string;
  private redirectUri: string;

  constructor() {
    this.clientId = config.outlook.clientId || '';
    this.redirectUri = process.env.OUTLOOK_REDIRECT_URI || 'http://localhost:3000/auth/callback/outlook';
  }

  generateAuthUrl(orgId: string, userId: string) {
    const scopes = [
      'offline_access',
      'User.Read',
      'Mail.Read',
      'Mail.ReadWrite',
      'Mail.Send'
    ];

    const state = Buffer.from(JSON.stringify({ orgId, userId })).toString('base64');

    const params = new URLSearchParams({
      client_id: this.clientId,
      response_type: 'code',
      redirect_uri: this.redirectUri,
      response_mode: 'query',
      scope: scopes.join(' '),
      state: state,
      prompt: 'consent'
    });

    return `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?${params.toString()}`;
  }
}
