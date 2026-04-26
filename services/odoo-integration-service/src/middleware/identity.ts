import type { NextFunction, Request, Response } from 'express';

export interface Identity {
  orgId: string;
  userId: string;
  token: string;
}

export interface IdentityRequest extends Request {
  identity: Identity;
}

export function identityMiddleware(req: Request, res: Response, next: NextFunction) {
  const authorization = req.header('Authorization');
  const orgId = req.header('X-Org-Id');
  const userId = req.header('X-User-Id');

  if (!authorization || !authorization.toLowerCase().startsWith('bearer ')) {
    return res.status(401).json({ success: false, message: 'Missing Authorization bearer token.' });
  }

  if (!orgId || !userId) {
    return res.status(401).json({
      success: false,
      message: 'Missing identity context headers (X-Org-Id, X-User-Id).',
    });
  }

  const token = authorization.slice('Bearer '.length).trim();
  (req as IdentityRequest).identity = { orgId, userId, token };
  next();
}
