-- Ensure email account uniqueness is tenant + user + provider scoped
DROP INDEX IF EXISTS "email_accounts_email_key";
CREATE UNIQUE INDEX IF NOT EXISTS "email_accounts_orgId_userId_provider_email_key"
ON "email_accounts"("orgId", "userId", "provider", "email");
