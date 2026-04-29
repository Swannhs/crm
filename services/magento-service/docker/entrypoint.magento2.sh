#!/usr/bin/env bash
set -euo pipefail

APP_DIR="/var/www/html"
MAGENTO_GIT_URL="${MAGENTO_GIT_URL:-https://github.com/magento/magento2.git}"
MAGENTO_GIT_REF="${MAGENTO_GIT_REF:-2.4.7-p3}"
MAGENTO_BASE_URL="${MAGENTO_BASE_URL:-http://localhost:8088}"
MAGENTO_BACKEND_FRONTNAME="${MAGENTO_BACKEND_FRONTNAME:-admin}"

DB_HOST="${MAGENTO_DB_HOST:-magento-db}"
DB_PORT="${MAGENTO_DB_PORT:-3306}"
DB_NAME="${MAGENTO_DB_DATABASE:-magento}"
DB_USER="${MAGENTO_DB_USERNAME:-magento}"
DB_PASS="${MAGENTO_DB_PASSWORD:-magento}"

ADMIN_FIRSTNAME="${MAGENTO_ADMIN_FIRSTNAME:-Admin}"
ADMIN_LASTNAME="${MAGENTO_ADMIN_LASTNAME:-User}"
ADMIN_EMAIL="${MAGENTO_ADMIN_EMAIL:-admin@example.com}"
ADMIN_USERNAME="${MAGENTO_ADMIN_USERNAME:-admin}"
ADMIN_PASSWORD="${MAGENTO_ADMIN_PASSWORD:-Admin123!}"

OPENSEARCH_HOST="${OPENSEARCH_HOST:-magento-search}"
OPENSEARCH_PORT="${OPENSEARCH_PORT:-9200}"

wait_for_db() {
  echo "Waiting for MySQL at ${DB_HOST}:${DB_PORT}..."
  until mysql --protocol=TCP --ssl=0 -h"${DB_HOST}" -P"${DB_PORT}" -u"${DB_USER}" -p"${DB_PASS}" -e "SELECT 1" >/dev/null 2>&1; do
    sleep 2
  done
}

bootstrap_source_if_missing() {
  if [ -f "${APP_DIR}/bin/magento" ]; then
    return
  fi

  echo "Magento source is missing at ${APP_DIR}."
  echo "Clone Magento on your host machine first:"
  echo "  git clone https://github.com/magento/magento2.git magento-src"
  echo "  cd magento-src && git checkout 2.4-develop"
  echo "Then restart Docker."
  exit 1
}

install_magento_if_needed() {
  if [ -f "${APP_DIR}/app/etc/env.php" ]; then
    return
  fi

  echo "Installing Magento dependencies..."
  cd "${APP_DIR}"
  git config --global --add safe.directory "${APP_DIR}" || true
  composer install --no-interaction --prefer-dist --no-dev

  echo "Running bin/magento setup:install..."
  php -d memory_limit=-1 bin/magento setup:install \
    --base-url="${MAGENTO_BASE_URL}" \
    --db-host="${DB_HOST}" \
    --db-name="${DB_NAME}" \
    --db-user="${DB_USER}" \
    --db-password="${DB_PASS}" \
    --backend-frontname="${MAGENTO_BACKEND_FRONTNAME}" \
    --admin-firstname="${ADMIN_FIRSTNAME}" \
    --admin-lastname="${ADMIN_LASTNAME}" \
    --admin-email="${ADMIN_EMAIL}" \
    --admin-user="${ADMIN_USERNAME}" \
    --admin-password="${ADMIN_PASSWORD}" \
    --language=en_US \
    --currency=USD \
    --timezone=America/New_York \
    --use-rewrites=1 \
    --search-engine=opensearch \
    --opensearch-host="${OPENSEARCH_HOST}" \
    --opensearch-port="${OPENSEARCH_PORT}"

  php -d memory_limit=-1 bin/magento config:set web/secure/base_url "${MAGENTO_BASE_URL}/" || true
  php -d memory_limit=-1 bin/magento config:set web/unsecure/base_url "${MAGENTO_BASE_URL}/" || true
  php -d memory_limit=-1 bin/magento setup:upgrade || true
  php -d memory_limit=-1 bin/magento indexer:reindex || true
  php -d memory_limit=-1 bin/magento cache:flush || true
}

set_permissions() {
  cd "${APP_DIR}"
  find var generated vendor pub/static pub/media app/etc -type f -exec chmod g+w {} + 2>/dev/null || true
  find var generated vendor pub/static pub/media app/etc -type d -exec chmod g+ws {} + 2>/dev/null || true
  chown -R www-data:www-data "${APP_DIR}" || true
}

wait_for_db
bootstrap_source_if_missing
install_magento_if_needed
set_permissions

exec "$@"
