import { google } from 'googleapis';
import { config } from '../config/env.js';

export class GoogleAuthService {
  private oauth2Client;

  constructor() {
    this.oauth2Client = new google.auth.OAuth2(
      config.gmail.clientId,
      config.gmail.clientSecret,
      process.env.GMAIL_REDIRECT_URI || 'http://localhost:3000/auth/callback/google'
    );
  }

  generateAuthUrl(orgId: string, userId: string) {
    const scopes = [
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/gmail.readonly',
      'https://www.googleapis.com/auth/gmail.send',
      'https://www.googleapis.com/auth/gmail.modify'
    ];

    return this.oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: scopes,
      prompt: 'consent',
      state: Buffer.from(JSON.stringify({ orgId, userId })).toString('base64')
    });
  }

  async getToken(code: string) {
    const { tokens } = await this.oauth2Client.getToken(code);
    return tokens;
  }

  async getUserInfo(accessToken: string) {
    const client = new google.auth.OAuth2();
    client.setCredentials({ access_token: accessToken });
    const oauth2 = google.oauth2({ version: 'v2', auth: client });
    const { data } = await oauth2.userinfo.get();
    return data;
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
    const client = new google.auth.OAuth2(
      config.gmail.clientId,
      config.gmail.clientSecret
    );
    client.setCredentials({ refresh_token: refreshToken });

    const gmail = google.gmail({ version: 'v1', auth: client });

    const to = Array.isArray(params.to) ? params.to.join(', ') : params.to;

    let messageParts = [
      `To: ${to}`,
      `Subject: ${params.subject}`,
      'MIME-Version: 1.0',
    ];

    if (params.cc) {
      const cc = Array.isArray(params.cc) ? params.cc.join(', ') : params.cc;
      messageParts.push(`Cc: ${cc}`);
    }

    if (params.bcc) {
      const bcc = Array.isArray(params.bcc) ? params.bcc.join(', ') : params.bcc;
      messageParts.push(`Bcc: ${bcc}`);
    }

    const contentType = params.isHtml ? 'text/html; charset="UTF-8"' : 'text/plain; charset="UTF-8"';
    messageParts.push(`Content-Type: ${contentType}`);

    // Empty line separates headers from body
    messageParts.push('');
    messageParts.push(params.body);

    const message = messageParts.join('\r\n');

    // Base64url encode the message
    const encodedMessage = Buffer.from(message)
      .toString('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');

    const res = await gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: encodedMessage
      }
    });

    return res.data;
  }
}
