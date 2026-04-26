const REDACT_KEYS = ['password', 'apiKey', 'token', 'accessToken', 'authorization'];

function redactRecord(input: Record<string, unknown>): Record<string, unknown> {
  const output: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(input)) {
    if (REDACT_KEYS.includes(key)) {
      output[key] = '[REDACTED]';
    } else {
      output[key] = value;
    }
  }
  return output;
}

export function safeMeta(meta?: Record<string, unknown>) {
  if (!meta) return undefined;
  return redactRecord(meta);
}
