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

    const state = Buffer.from(JSON.stringify({ orgId, userId, provider: 'outlook' })).toString('base64');

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

  async getToken(code: string) {
    const params = new URLSearchParams({
      client_id: this.clientId,
      client_secret: config.outlook.clientSecret || '',
      code: code,
      redirect_uri: this.redirectUri,
      grant_type: 'authorization_code'
    });

    const response = await fetch('https://login.microsoftonline.com/common/oauth2/v2.0/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: params.toString()
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to get Outlook token: ${errorText}`);
    }

    return await response.json();
  }

  async getUserInfo(accessToken: string) {
    const response = await fetch('https://graph.microsoft.com/v1.0/me', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to get Outlook user info: ${errorText}`);
    }

    return await response.json();
  }

  async sendEmail(
    refreshToken: string,
    params: {
      to: string | string[];
      subject: string;
      body: string;
      cc?: string | string[];
      bcc?: string | string[];
      isHtml?: boolean;
    }
  ) {
    // First, exchange refresh token for an access token
    const tokenParams = new URLSearchParams({
      client_id: this.clientId,
      client_secret: config.outlook.clientSecret || '',
      refresh_token: refreshToken,
      grant_type: 'refresh_token'
    });

    const tokenResponse = await fetch('https://login.microsoftonline.com/common/oauth2/v2.0/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: tokenParams.toString()
    });

    if (!tokenResponse.ok) {
      throw new Error(`Failed to refresh Outlook token`);
    }

    const { access_token } = await tokenResponse.json() as any;

    const toRecipients = (Array.isArray(params.to) ? params.to : [params.to]).map(email => ({
      emailAddress: { address: email }
    }));

    const ccRecipients = params.cc ? (Array.isArray(params.cc) ? params.cc : [params.cc]).map(email => ({
      emailAddress: { address: email }
    })) : [];

    const bccRecipients = params.bcc ? (Array.isArray(params.bcc) ? params.bcc : [params.bcc]).map(email => ({
      emailAddress: { address: email }
    })) : [];

    const message = {
      message: {
        subject: params.subject,
        body: {
          contentType: params.isHtml ? 'HTML' : 'Text',
          content: params.body
        },
        toRecipients,
        ccRecipients,
        bccRecipients
      },
      saveToSentItems: 'true'
    };

    const sendResponse = await fetch('https://graph.microsoft.com/v1.0/me/sendMail', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(message)
    });

    if (!sendResponse.ok) {
      const errorText = await sendResponse.text();
      throw new Error(`Failed to send email via Outlook API: ${errorText}`);
    }

    return { success: true };
  }
}
