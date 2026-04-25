import { ForbiddenException, UnauthorizedException } from "@nestjs/common";
import type { Request } from "express";

export type Identity = {
  userId: string;
  orgId: string;
};

function getHeader(req: Request, name: string): string | undefined {
  const value = req.headers[name];
  if (Array.isArray(value)) return value[0];
  return value;
}

export function requireIdentity(req: Request): Identity {
  const userId = getHeader(req, "x-user-id");
  const orgId = getHeader(req, "x-org-id");
  if (!userId || !orgId) {
    throw new UnauthorizedException("Missing identity headers");
  }
  return { userId, orgId };
}

function getUserRole(req: Request): string | undefined {
  return getHeader(req, "x-role") || getHeader(req, "x-user-role") || getHeader(req, "x-user-type");
}

export function requireSuperAdmin(req: Request): Identity {
  const identity = requireIdentity(req);
  const role = getUserRole(req);
  if (role !== "super-admin") {
    throw new ForbiddenException("Super admin role required");
  }
  return identity;
}
