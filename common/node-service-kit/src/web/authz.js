const DEFAULT_ORGANIZATION_SERVICE_URL =
  process.env.ORGANIZATION_SERVICE_URL || "http://organization-service:7010";

const DEFAULT_KEYCLOAK_CLIENT_ID = process.env.KEYCLOAK_CLIENT_ID || "mymanager-web";

export const PLATFORM_ROLES = ["platform_admin"];

export const ORG_ROLES = [
  "org_owner",
  "org_admin",
  "org_manager",
  "org_staff",
  "org_viewer",
];

const ROLE_PRIORITY = new Map([
  ["platform_admin", 100],
  ["org_owner", 90],
  ["org_admin", 80],
  ["org_manager", 70],
  ["org_staff", 60],
  ["org_viewer", 50],
]);

export function decodeJwtPayload(authHeader) {
  if (!authHeader || typeof authHeader !== "string" || !authHeader.startsWith("Bearer ")) {
    return null;
  }

  const [, token] = authHeader.split(" ");
  const segments = token?.split(".");
  if (!segments || segments.length < 2) {
    return null;
  }

  try {
    const normalized = segments[1].replace(/-/g, "+").replace(/_/g, "/");
    const padding = "=".repeat((4 - (normalized.length % 4 || 4)) % 4);
    return JSON.parse(Buffer.from(`${normalized}${padding}`, "base64").toString("utf8"));
  } catch {
    return null;
  }
}

export function getHighestPriorityRole(roles = []) {
  return [...new Set((roles || []).filter(Boolean))]
    .sort((a, b) => (ROLE_PRIORITY.get(b) || 0) - (ROLE_PRIORITY.get(a) || 0))[0] || null;
}

export function extractPlatformRolesFromPayload(payload, clientId = DEFAULT_KEYCLOAK_CLIENT_ID) {
  if (!payload || typeof payload !== "object") {
    return [];
  }

  const realmRoles = Array.isArray(payload.realm_access?.roles) ? payload.realm_access.roles : [];
  const clientRoles = Array.isArray(payload.resource_access?.[clientId]?.roles)
    ? payload.resource_access[clientId].roles
    : [];

  return [...new Set([...realmRoles, ...clientRoles])].filter((role) =>
    PLATFORM_ROLES.includes(role)
  );
}

export function extractPlatformRolesFromAuthHeader(authHeader, clientId = DEFAULT_KEYCLOAK_CLIENT_ID) {
  return extractPlatformRolesFromPayload(decodeJwtPayload(authHeader), clientId);
}

async function fetchResolvedMembership({
  organizationServiceUrl,
  orgId,
  userId,
  authorization,
}) {
  const response = await fetch(`${organizationServiceUrl}/v1/memberships/resolve`, {
    method: "GET",
    headers: {
      "X-Org-Id": orgId,
      "X-User-Id": userId,
      ...(authorization ? { Authorization: authorization } : {}),
    },
  });

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Membership resolve failed (${response.status}): ${body}`);
  }

  const json = await response.json();
  return json?.data ?? null;
}

export function createRoleContextMiddleware({
  organizationServiceUrl = DEFAULT_ORGANIZATION_SERVICE_URL,
  clientId = DEFAULT_KEYCLOAK_CLIENT_ID,
} = {}) {
  return async function roleContextMiddleware(req, res, next) {
    if (!req.identity?.orgId || !req.identity?.userId) {
      return res.status(401).json({ message: "Missing identity context headers." });
    }

    try {
      const authorization = req.header("Authorization") || null;
      const platformRoles = extractPlatformRolesFromAuthHeader(authorization, clientId);
      const platformRole = getHighestPriorityRole(platformRoles);
      const membership = await fetchResolvedMembership({
        organizationServiceUrl,
        orgId: req.identity.orgId,
        userId: req.identity.userId,
        authorization,
      });

      req.identity = {
        ...req.identity,
        platformRoles,
        platformRole,
        orgRole: membership?.role || null,
        permissions: membership?.permissions || [],
        membership,
      };

      return next();
    } catch (error) {
      return res.status(502).json({
        message: "Unable to resolve organization role context.",
        detail: error instanceof Error ? error.message : String(error),
      });
    }
  };
}

function hasAnyRole(identity = {}, { orgRoles = [], platformRoles = [], allowPlatformAdmin = true } = {}) {
  const currentPlatformRoles = identity.platformRoles || [];
  const currentOrgRole = identity.orgRole || null;

  if (allowPlatformAdmin && currentPlatformRoles.includes("platform_admin")) {
    return true;
  }

  if (platformRoles.some((role) => currentPlatformRoles.includes(role))) {
    return true;
  }

  if (currentOrgRole && orgRoles.includes(currentOrgRole)) {
    return true;
  }

  return false;
}

export function requireOrgRoles(orgRoles = [], options = {}) {
  return function orgRoleGuard(req, res, next) {
    if (hasAnyRole(req.identity, { ...options, orgRoles })) {
      return next();
    }

    return res.status(403).json({
      message: "You do not have permission to perform this action.",
      requiredOrgRoles: orgRoles,
      currentOrgRole: req.identity?.orgRole || null,
    });
  };
}

export function requirePlatformRoles(platformRoles = []) {
  return function platformRoleGuard(req, res, next) {
    if (hasAnyRole(req.identity, { platformRoles, allowPlatformAdmin: false })) {
      return next();
    }

    return res.status(403).json({
      message: "You do not have permission to perform this action.",
      requiredPlatformRoles: platformRoles,
      currentPlatformRoles: req.identity?.platformRoles || [],
    });
  };
}

export function requireAnyRole({ orgRoles = [], platformRoles = [], allowPlatformAdmin = true } = {}) {
  return function anyRoleGuard(req, res, next) {
    if (hasAnyRole(req.identity, { orgRoles, platformRoles, allowPlatformAdmin })) {
      return next();
    }

    return res.status(403).json({
      message: "You do not have permission to perform this action.",
      requiredOrgRoles: orgRoles,
      requiredPlatformRoles: platformRoles,
      currentOrgRole: req.identity?.orgRole || null,
      currentPlatformRoles: req.identity?.platformRoles || [],
    });
  };
}
