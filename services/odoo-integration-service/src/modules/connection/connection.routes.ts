import { Router } from 'express';
import type { IdentityRequest } from '../../middleware/identity.js';
import { asError } from '../../lib/errors.js';
import { clearConnection, getConnectionView, setConnection } from './connection.service.js';

export const connectionRoutes = Router();

export async function getConnectionHandler(req: any, res: any) {
  try {
    const identity = (req as IdentityRequest).identity;
    const data = await getConnectionView(identity.orgId);
    return res.json({ success: true, data });
  } catch (error) {
    const appError = asError(error);
    return res.status(appError.status).json({ success: false, code: appError.code, message: appError.message });
  }
}

export async function postConnectHandler(req: any, res: any) {
  try {
    const identity = (req as IdentityRequest).identity;
    const payload = req.body || {};

    setConnection(identity.orgId, {
      baseUrl: payload.baseUrl,
      db: payload.db,
      username: payload.username,
      password: payload.password,
      apiKey: payload.apiKey,
    });

    const data = await getConnectionView(identity.orgId);
    return res.status(201).json({ success: true, data });
  } catch (error) {
    const appError = asError(error);
    return res.status(appError.status).json({ success: false, code: appError.code, message: appError.message });
  }
}

export async function postDisconnectHandler(req: any, res: any) {
  try {
    const identity = (req as IdentityRequest).identity;
    const removed = clearConnection(identity.orgId);
    return res.json({ success: true, data: { disconnected: removed } });
  } catch (error) {
    const appError = asError(error);
    return res.status(appError.status).json({ success: false, code: appError.code, message: appError.message });
  }
}

connectionRoutes.get('/connection', getConnectionHandler);
connectionRoutes.post('/connect', postConnectHandler);
connectionRoutes.post('/disconnect', postDisconnectHandler);
