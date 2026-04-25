import type { NextFunction, Request, Response } from "express";

export interface Identity {
  orgId: string;
  userId: string;
}

export interface IdentityRequest extends Request {
  identity: Identity;
}

export function identityMiddleware(req: Request, res: Response, next: NextFunction) {
  const orgId = req.header("X-Org-Id");
  const userId = req.header("X-User-Id");

  if (!orgId || !userId) {
    return res.status(401).json({ message: "Missing identity context headers (X-Org-Id, X-User-Id)." });
  }

  (req as IdentityRequest).identity = { orgId, userId };
  next();
}
