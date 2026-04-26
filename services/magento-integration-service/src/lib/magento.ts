import type { Identity } from "../middleware/identity.js";
import { db } from "./prisma.js";

export interface MagentoConnection {
  baseUrl: string;
  accessToken: string;
  storeCode: string;
  connectedAt: string;
}

export interface ConnectInput {
  baseUrl?: string;
  accessToken?: string;
  username?: string;
  password?: string;
  storeCode?: string;
}

function normalizeBaseUrl(baseUrl: string): string {
  return baseUrl.replace(/\/+$/, "");
}

function storeKey(identity: Identity): string {
  return `${identity.orgId}:${identity.userId}`;
}

async function resolveToken(baseUrl: string, input: ConnectInput): Promise<string> {
  if (input.accessToken) return input.accessToken;
  if (!input.username || !input.password) {
    throw new Error("Either accessToken or username/password is required.");
  }

  const response = await fetch(`${normalizeBaseUrl(baseUrl)}/rest/V1/integration/admin/token`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ username: input.username, password: input.password }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Magento auth failed (${response.status}): ${text.slice(0, 300)}`);
  }

  const token = await response.json();
  if (!token || typeof token !== "string") {
    throw new Error("Magento auth returned invalid token.");
  }

  return token;
}

function fromEnv(): MagentoConnection | null {
  const baseUrl = process.env.MAGENTO_BASE_URL;
  const accessToken = process.env.MAGENTO_ACCESS_TOKEN;
  if (!baseUrl || !accessToken) return null;

  return {
    baseUrl: normalizeBaseUrl(baseUrl),
    accessToken,
    storeCode: process.env.MAGENTO_STORE_CODE || "default",
    connectedAt: "env",
  };
}

export async function connectMagento(identity: Identity, input: ConnectInput): Promise<MagentoConnection> {
  const baseUrl = normalizeBaseUrl(input.baseUrl || process.env.MAGENTO_BASE_URL || "");
  if (!baseUrl) {
    throw new Error("baseUrl is required (or set MAGENTO_BASE_URL).");
  }

  const accessToken = await resolveToken(baseUrl, input);
  const storeCode = input.storeCode || process.env.MAGENTO_STORE_CODE || "default";

  const data = {
    orgUserId: storeKey(identity),
    baseUrl,
    accessToken,
    storeCode,
  };

  const saved = await db.magentoConnection.upsert({
    where: { orgUserId: data.orgUserId },
    update: data,
    create: data,
  });

  return {
    baseUrl: saved.baseUrl,
    accessToken: saved.accessToken,
    storeCode: saved.storeCode,
    connectedAt: saved.createdAt.toISOString(),
  };
}

export async function getMagentoConnection(identity: Identity): Promise<MagentoConnection | null> {
  const saved = await db.magentoConnection.findUnique({ where: { orgUserId: storeKey(identity) } });
  if (saved) {
    return {
      baseUrl: saved.baseUrl,
      accessToken: saved.accessToken,
      storeCode: saved.storeCode,
      connectedAt: saved.createdAt.toISOString(),
    };
  }
  return fromEnv();
}

export async function disconnectMagento(identity: Identity): Promise<boolean> {
  try {
    await db.magentoConnection.delete({ where: { orgUserId: storeKey(identity) } });
    return true;
  } catch {
    return false;
  }
}

export function publicConnection(connection: MagentoConnection) {
  return {
    baseUrl: connection.baseUrl,
    storeCode: connection.storeCode,
    connectedAt: connection.connectedAt,
    tokenPreview: `${connection.accessToken.slice(0, 6)}...`,
  };
}

export async function magentoRequest(
  connection: MagentoConnection,
  method: string,
  path: string,
  query: Record<string, unknown> = {},
  body?: unknown
) {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const url = new URL(`${connection.baseUrl}${cleanPath}`);

  for (const [k, v] of Object.entries(query)) {
    if (v === undefined || v === null || v === "") continue;
    url.searchParams.set(k, String(v));
  }

  const response = await fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${connection.accessToken}`,
      "Content-Type": "application/json",
    },
    ...(body === undefined ? {} : { body: JSON.stringify(body) }),
  });

  const text = await response.text();
  if (!response.ok) {
    throw new Error(`Magento API error (${response.status}): ${text.slice(0, 300)}`);
  }

  if (!text) return {};
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}
