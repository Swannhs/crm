import crypto from "node:crypto";

const ALGORITHM = 'aes-256-gcm';
const IV_LENGTH = 16;

/**
 * Encrypts a plaintext string using AES-256-GCM.
 * Requires process.env.TOKEN_ENCRYPTION_KEY (32-byte hex string)
 */
export function encryptToken(plaintext) {
  if (!plaintext) return null;
  
  const keyHex = process.env.TOKEN_ENCRYPTION_KEY;
  if (!keyHex || keyHex.length !== 64) {
    throw new Error('TOKEN_ENCRYPTION_KEY must be a 32-byte hex string (64 characters).');
  }

  const key = Buffer.from(keyHex, 'hex');
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv(ALGORITHM, key, iv);

  let encrypted = cipher.update(plaintext, 'utf8', 'hex');
  encrypted += cipher.final('hex');

  const tag = cipher.getAuthTag().toString('hex');

  // Format: iv:tag:encrypted
  return `${iv.toString('hex')}:${tag}:${encrypted}`;
}

/**
 * Decrypts a ciphertext string using AES-256-GCM.
 */
export function decryptToken(ciphertext) {
  if (!ciphertext) return null;

  const keyHex = process.env.TOKEN_ENCRYPTION_KEY;
  if (!keyHex || keyHex.length !== 64) {
    throw new Error('TOKEN_ENCRYPTION_KEY must be a 32-byte hex string (64 characters).');
  }

  const key = Buffer.from(keyHex, 'hex');
  const parts = ciphertext.split(':');
  
  if (parts.length !== 3) {
    throw new Error('Invalid ciphertext format. Expected iv:tag:encrypted');
  }

  const [ivHex, tagHex, encryptedHex] = parts;
  const iv = Buffer.from(ivHex, 'hex');
  const tag = Buffer.from(tagHex, 'hex');
  const decipher = crypto.createDecipheriv(ALGORITHM, key, iv);

  decipher.setAuthTag(tag);

  let decrypted = decipher.update(encryptedHex, 'hex', 'utf8');
  decrypted += decipher.final('utf8');

  return decrypted;
}
