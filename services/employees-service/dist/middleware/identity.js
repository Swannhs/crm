export function identityMiddleware(req, res, next) {
    const orgId = req.header('X-Org-Id');
    const userId = req.header('X-User-Id');
    if (!orgId || !userId) {
        return res.status(401).json({ message: 'Missing identity context headers (X-Org-Id, X-User-Id).' });
    }
    req.identity = { orgId, userId };
    next();
}
