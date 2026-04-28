#!/usr/bin/env sh
set -eu

APP_DIR="/workspace/services/magento-inegration-service"

cd "$APP_DIR"

if [ ! -f vendor/autoload.php ]; then
  composer install --no-dev --prefer-dist --no-interaction
fi

if [ ! -f .env ]; then
  cp .env.example .env
fi

php artisan key:generate --force >/dev/null 2>&1 || true

exec php artisan serve --host=0.0.0.0 --port="${PORT:-7210}"
