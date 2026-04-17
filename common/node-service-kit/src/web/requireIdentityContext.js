export function requireIdentityContext(req, res, next) {
  const userId = req.header("X-User-Id") || null;
  const orgId = req.header("X-Org-Id") || null;
  if (!userId || !orgId) {
    return res.status(401).json({ message: "Missing identity context headers." });
  }

  req.identity = { userId, orgId };
  return next();
}

