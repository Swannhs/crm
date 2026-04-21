#!/usr/bin/env sh
set -eu

if [ -n "${DB_HOST:-}" ]; then
  echo "Waiting for Postgres at ${DB_HOST}:${DB_PORT:-5432}..."
  php -r '
    $host=getenv("DB_HOST");
    $port=getenv("DB_PORT") ?: "5432";
    $db=getenv("DB_DATABASE");
    $user=getenv("DB_USERNAME");
    $pass=getenv("DB_PASSWORD");
    $dsn="pgsql:host={$host};port={$port};dbname={$db}";
    $start=time();
    while (true) {
      try {
        new PDO($dsn, $user, $pass);
        break;
      } catch (Throwable $e) {
        if (time() - $start > 60) { fwrite(STDERR, "DB not ready after 60s\n"); exit(1); }
        usleep(250000);
      }
    }
  '
fi

php artisan migrate --force

exec php artisan serve --host=0.0.0.0 --port="${PORT:-8010}"

