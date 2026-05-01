import { Router } from 'express';
import { requireIdentityContext } from '@mymanager/node-service-kit';

import { GoogleAuthService } from '../services/google-auth.service.js';
<<<<<<< feature/implement-email-sending-14229016848080909968
import { prisma } from '../lib/prisma.js';
=======
import { OutlookAuthService } from '../services/outlook-auth.service.js';
>>>>>>> main

const router = Router();
// @ts-ignore - temporary fix for missing type declarations
const identityMiddleware = (req: any, res: any, next: any) => requireIdentityContext(req, res, next);
const googleAuthService = new GoogleAuthService();
const outlookAuthService = new OutlookAuthService();

// All routes require identity context
router.use(identityMiddleware);

// GET /email/accounts - List connected email accounts
router.get('/accounts', async (req: any, res, next) => {
  try {
    const orgId = req.identity!.orgId;
    // TODO: Implement account listing from DB
    res.json({
      success: true,
      data: [],
      message: 'Email accounts list'
    });
  } catch (error) {
    next(error);
  }
});

// POST /email/accounts/connect - Initiate OAuth connection
router.post('/accounts/connect', async (req: any, res, next) => {
  try {
    const { provider } = req.body; // 'gmail' or 'outlook'
    const orgId = req.identity!.orgId;
    const userId = req.identity!.userId;
    
    if (!provider || !['gmail', 'outlook'].includes(provider)) {
      return res.status(400).json({
        success: false,
        error: 'Provider must be gmail or outlook'
      });
    }

    let authUrl = '';
    if (provider === 'gmail') {
      authUrl = googleAuthService.generateAuthUrl(orgId, userId);
    } else {
      authUrl = outlookAuthService.generateAuthUrl(orgId, userId);
    }

    res.json({
      success: true,
      data: {
        authUrl,
        provider
      },
      message: 'OAuth connection initiation successful'
    });
  } catch (error) {
    next(error);
  }
});

// GET /email/callback - Handle OAuth callback
router.get('/callback', async (req, res, next) => {
  try {
    const { code, state, error } = req.query;

    if (error) {
      return res.status(400).json({ success: false, error });
    }

    if (!code || !state) {
      return res.status(400).json({ success: false, error: 'Missing code or state' });
    }

    const { orgId, userId } = JSON.parse(Buffer.from(state as string, 'base64').toString());

    // Exchange code for tokens
    const tokens = await googleAuthService.getToken(code as string);
    const userInfo = await googleAuthService.getUserInfo(tokens.access_token!);

    // TODO: Store tokens and account info in DB
    // This requires implementing the EmailAccount repository or service

    res.json({
      success: true,
      data: {
        email: userInfo.email,
        provider: 'gmail',
        isConnected: true
      },
      message: 'Email account connected successfully'
    });
  } catch (error) {
    next(error);
  }
});

// GET /email/messages - List emails with filters
router.get('/messages', async (req: any, res, next) => {
  try {
    const { accountId, search, limit, offset } = req.query;
    const orgId = req.identity!.orgId;

    // TODO: Implement email listing
    res.json({
      success: true,
      data: [],
      meta: {
        total: 0,
        limit: limit || 50,
        offset: offset || 0
      },
      message: 'Email messages endpoint - implementation in progress'
    });
  } catch (error) {
    next(error);
  }
});

// POST /email/send - Send an email
router.post('/send', async (req: any, res, next) => {
  try {
    const { to, subject, body, cc, bcc, dealId, isHtml, accountId } = req.body;
    const orgId = req.identity!.orgId;
    const userId = req.identity!.userId;

    if (!to || !subject) {
      return res.status(400).json({
        success: false,
        error: 'Recipient and subject are required'
      });
    }

    let account;
    if (accountId) {
      account = await prisma.emailAccount.findFirst({
        where: { id: accountId, orgId, userId }
      });
    } else {
      account = await prisma.emailAccount.findFirst({
        where: { orgId, userId, provider: 'gmail', isConnected: true }
      });
    }

    if (!account) {
      return res.status(404).json({
        success: false,
        error: 'No connected email account found'
      });
    }

    if (account.provider !== 'gmail') {
       return res.status(400).json({
        success: false,
        error: `Sending via ${account.provider} is not currently supported`
      });
    }

    const settings = account.settings as { refresh_token?: string } | null;
    if (!settings || !settings.refresh_token) {
      return res.status(400).json({
        success: false,
        error: 'Email account is missing required authentication tokens'
      });
    }

    const sendResult = await googleAuthService.sendEmail(settings.refresh_token, {
      to,
      subject,
      body,
      cc,
      bcc,
      isHtml
    });

    if (!sendResult.id) {
       throw new Error('Failed to send email via Google API');
    }

    // Persist to database
    const emailRecord = await prisma.email.create({
      data: {
        orgId,
        accountId: account.id,
        messageId: sendResult.id,
        subject,
        fromEmail: account.email,
        toEmails: Array.isArray(to) ? to : [to],
        ccEmails: cc ? (Array.isArray(cc) ? cc : [cc]) : [],
        bccEmails: bcc ? (Array.isArray(bcc) ? bcc : [bcc]) : [],
        textBody: isHtml ? undefined : body,
        htmlBody: isHtml ? body : undefined,
        direction: 'outbound',
        sentAt: new Date(),
        receivedAt: new Date(), // It's a sent email, so just use now
        relatedDealId: dealId
      }
    });

    res.json({
      success: true,
      data: {
        messageId: emailRecord.messageId,
        id: emailRecord.id
      },
      message: 'Email sent successfully'
    });
  } catch (error) {
    next(error);
  }
});

// GET /email/templates - List email templates
router.get('/templates', async (req: any, res, next) => {
  try {
    const { category } = req.query;
    const orgId = req.identity!.orgId;

    // TODO: Implement template listing
    res.json({
      success: true,
      data: [],
      message: 'Email templates endpoint - implementation in progress'
    });
  } catch (error) {
    next(error);
  }
});

// POST /email/templates - Create email template
router.post('/templates', async (req: any, res, next) => {
  try {
    const { name, subject, body, category } = req.body;
    const orgId = req.identity!.orgId;
    const userId = req.identity!.userId;

    // TODO: Implement template creation
    res.status(201).json({
      success: true,
      data: {
        id: 'TODO: Generate template ID'
      },
      message: 'Template creation endpoint - implementation in progress'
    });
  } catch (error) {
    next(error);
  }
});

// GET /email/sequences - List email sequences
router.get('/sequences', async (req: any, res, next) => {
  try {
    const orgId = req.identity!.orgId;

    // TODO: Implement sequence listing
    res.json({
      success: true,
      data: [],
      message: 'Email sequences endpoint - implementation in progress'
    });
  } catch (error) {
    next(error);
  }
});

// POST /email/sequences - Create email sequence
router.post('/sequences', async (req: any, res, next) => {
  try {
    const { name, description, steps } = req.body;
    const orgId = req.identity!.orgId;
    const userId = req.identity!.userId;

    // TODO: Implement sequence creation
    res.status(201).json({
      success: true,
      data: {
        id: 'TODO: Generate sequence ID'
      },
      message: 'Sequence creation endpoint - implementation in progress'
    });
  } catch (error) {
    next(error);
  }
});

export default router;
