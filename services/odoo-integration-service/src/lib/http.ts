import { AppError, OdooConnectionError } from './errors.js';

export async function httpJson<T>(url: string, init: RequestInit = {}, timeoutMs = 20000): Promise<T> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, { ...init, signal: controller.signal });
    const text = await response.text();
    const parsed = text ? JSON.parse(text) : null;

    if (!response.ok) {
      const message = parsed?.message || parsed?.error || `Request failed with ${response.status}`;
      throw new AppError(message, response.status, 'HTTP_ERROR');
    }

    return parsed as T;
  } catch (error) {
    if (error instanceof AppError) throw error;
    if (error instanceof Error && error.name === 'AbortError') {
      throw new OdooConnectionError('Request timed out while reaching upstream service.');
    }
    throw new OdooConnectionError(error instanceof Error ? error.message : 'Upstream request failed.');
  } finally {
    clearTimeout(timeout);
  }
}
