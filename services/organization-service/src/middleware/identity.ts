import { Request, Response, NextFunction } from 'express';
import { extractPlatformRolesFromAuthHeader, getHighestPriorityRole } from '@mymanager/node-service-kit';

export function identityMiddleware(req: Request, res: Response, next: NextFunction) {
  const orgId = req.header('X-Org-Id');
  const userId = req.header('X-User-Id');
  const authorization = req.header('Authorization');

  if (!orgId || !userId) {
    return res.status(401).json({ message: 'Missing identity context headers (X-Org-Id, X-User-Id).' });
  }

  const platformRoles = extractPlatformRolesFromAuthHeader(authorization);

  (req as any).identity = {
    orgId,
    userId,
    platformRoles,
    platformRole: getHighestPriorityRole(platformRoles),
  };
  next();
}

export interface AuthenticatedRequest extends Request {
  identity: {
    orgId: string;
    userId: string;
    orgRole?: string | null;
    membership?: any;
    permissions?: string[];
    platformRoles?: string[];
    platformRole?: string | null;
  };
}
