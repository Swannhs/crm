export const PLATFORM_ROLES = ['platform_admin'] as const;

export const ORG_ROLES = [
  'org_owner',
  'org_admin',
  'org_manager',
  'org_staff',
  'org_viewer',
] as const;

const ROLE_PRIORITY: Record<string, number> = {
  platform_admin: 100,
  org_owner: 90,
  org_admin: 80,
  org_manager: 70,
  org_staff: 60,
  org_viewer: 50,
};

export function getHighestPriorityRole(roles: Array<string | null | undefined>) {
  return [...new Set((roles || []).filter(Boolean) as string[])].sort(
    (a, b) => (ROLE_PRIORITY[b] || 0) - (ROLE_PRIORITY[a] || 0)
  )[0] || null;
}

export function extractPlatformRolesFromToken(tokenParsed: any, clientId: string) {
  const realmRoles = Array.isArray(tokenParsed?.realm_access?.roles)
    ? tokenParsed.realm_access.roles
    : [];

  const clientRoles = Array.isArray(tokenParsed?.resource_access?.[clientId]?.roles)
    ? tokenParsed.resource_access[clientId].roles
    : [];

  return [...new Set([...realmRoles, ...clientRoles])].filter((role) =>
    PLATFORM_ROLES.includes(role as (typeof PLATFORM_ROLES)[number])
  );
}

export function toCurrentRoles(user: any): string[] {
  return [
    user?.orgRole,
    user?.platformRole,
    ...(Array.isArray(user?.platformRoles) ? user.platformRoles : []),
  ].filter(Boolean);
}
