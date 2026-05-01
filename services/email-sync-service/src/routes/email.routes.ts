import { Router } from 'express';
import { requireIdentityContext } from '@mymanager/node-service-kit';

import { GoogleAuthService } from '../services/google-auth.service.js';
import { prisma } from '../lib/prisma.js';

const router = Router();
const identityMiddleware = (req: any, res: any, next: any) => requireIdentityContext(req, res, next);
const googleAuthService = new GoogleAuthService();

// All routes require identity context
router.use(identityMiddleware);

// GET /email/accounts - List connected email accounts
router.get('/accounts', async (req, res, next) => {
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
router.post('/accounts/connect', async (req, res, next) => {
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
      // TODO: Implement Outlook OAuth URL generation
      return res.status(501).json({ success: false, error: 'Outlook not yet implemented' });
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
router.get('/messages', async (req: any, res: any, next: any) => {
  try {
    const { accountId, search, limit, offset } = req.query;
    const orgId = req.identity!.orgId;

    const parsedLimit = parseInt(limit as string, 10) || 50;
    const parsedOffset = parseInt(offset as string, 10) || 0;

    const where: any = {
      orgId
    };

    if (accountId) {
      where.accountId = accountId;
    }

    if (search) {
      where.OR = [
        { subject: { contains: search as string, mode: 'insensitive' } },
        { fromEmail: { contains: search as string, mode: 'insensitive' } },
        { snippet: { contains: search as string, mode: 'insensitive' } }
      ];
    }

    const [emails, total] = await Promise.all([
      prisma.email.findMany({
        where,
        take: parsedLimit,
        skip: parsedOffset,
        orderBy: {
          receivedAt: 'desc'
        }
      }),
      prisma.email.count({ where })
    ]);

    res.json({
      success: true,
      data: emails,
      meta: {
        total,
        limit: parsedLimit,
        offset: parsedOffset
      },
      message: 'Email messages retrieved successfully'
    });
  } catch (error) {
    next(error);
  }
});

// POST /email/send - Send an email
router.post('/send', async (req, res, next) => {
  try {
    const { to, subject, body, cc, bcc, dealId } = req.body;
    const orgId = req.identity!.orgId;
    const userId = req.identity!.userId;

    if (!to || !subject) {
      return res.status(400).json({
        success: false,
        error: 'Recipient and subject are required'
      });
    }

    // TODO: Implement email sending
    res.json({
      success: true,
      data: {
        messageId: 'TODO: Generate message ID'
      },
      message: 'Email send endpoint - implementation in progress'
    });
  } catch (error) {
    next(error);
  }
});

// GET /email/templates - List email templates
router.get('/templates', async (req, res, next) => {
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
router.post('/templates', async (req, res, next) => {
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
router.get('/sequences', async (req, res, next) => {
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
router.post('/sequences', async (req, res, next) => {
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
