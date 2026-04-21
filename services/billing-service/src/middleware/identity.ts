import { Request, Response, NextFunction } from 'express';
import { UnauthorizedError } from '../errors.js';

export function identityMiddleware(req: Request, res: Response, next: NextFunction) {
  let orgId = req.header('X-Org-Id');
  let userId = req.header('X-User-Id');

  // Handle comma-separated values if multiple headers are present
  if (orgId?.includes(',')) orgId = orgId.split(',').pop()?.trim();
  if (userId?.includes(',')) userId = userId.split(',').pop()?.trim();

  console.log(`[IdentityMiddleware] Org: ${orgId}, User: ${userId}`);

  if (!orgId || !userId) {
    const error = new UnauthorizedError('Missing identity context headers (X-Org-Id, X-User-Id).');
    return res.status(error.statusCode).json({ message: error.message, code: error.code });
  }

  (req as any).identity = { orgId, userId };

  next();
}

export interface AuthenticatedRequest extends Request {
  log?: {
    error: (meta: unknown, message: string) => void;
  };
  identity: {
    orgId: string;
    userId: string;
  };
}
