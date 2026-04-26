import { extractPlatformRolesFromAuthHeader, getHighestPriorityRole } from '@mymanager/node-service-kit';
export function identityMiddleware(req, res, next) {
    const orgId = req.header('X-Org-Id');
    const userId = req.header('X-User-Id');
    const authorization = req.header('Authorization');
    if (!orgId || !userId) {
        return res.status(401).json({ message: 'Missing identity context headers (X-Org-Id, X-User-Id).' });
    }
    const platformRoles = extractPlatformRolesFromAuthHeader(authorization);
    req.identity = {
        orgId,
        userId,
        platformRoles,
        platformRole: getHighestPriorityRole(platformRoles),
    };
    next();
}
