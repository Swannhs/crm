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
}
