import { Request } from 'express';

declare global {
  namespace Express {
    interface Request {
      identity?: {
        orgId: string;
        userId: string;
        roles?: string[];
      };
    }
  }
}
