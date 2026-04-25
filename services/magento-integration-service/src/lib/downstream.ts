import type { Identity } from "../middleware/identity.js";

export async function postJson(url: string, body: unknown, identity: Identity) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-Org-Id": identity.orgId,
      "X-User-Id": identity.userId,
    },
    body: JSON.stringify(body),
  });

  const text = await response.text();
  if (!response.ok) {
    throw new Error(`Downstream error (${response.status}): ${text.slice(0, 300)}`);
  }

  if (!text) return {};
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

export async function getHealth(url: string) {
  const response = await fetch(url);
  const text = await response.text();
  return {
    ok: response.ok,
    status: response.status,
    body: text.slice(0, 400),
  };
}
