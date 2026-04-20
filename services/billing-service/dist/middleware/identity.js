import { UnauthorizedError } from '../errors.js';
export function identityMiddleware(req, res, next) {
    const orgId = req.header('X-Org-Id');
    const userId = req.header('X-User-Id');
    if (!orgId || !userId) {
        const error = new UnauthorizedError('Missing identity context headers (X-Org-Id, X-User-Id).');
        return res.status(error.statusCode).json({ message: error.message, code: error.code });
    }
    req.identity = { orgId, userId };
    next();
}
