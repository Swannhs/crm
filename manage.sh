#!/usr/bin/env bash

# MyManager Microservices Orchestrator
# A single script to manage development, testing, and production environments.

set -euo pipefail

# Configuration
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
COMPOSE_DIR="$ROOT_DIR/infra/compose"
BASE_FILE="$COMPOSE_DIR/docker-compose.yml"

# Helper for colorful output
info() { echo -e "\033[0;34m[INFO]\033[0m $1"; }
success() { echo -e "\033[0;32m[SUCCESS]\033[0m $1"; }
error() { echo -e "\033[0;31m[ERROR]\033[0m $1"; exit 1; }

usage() {
    echo "Usage: $0 [env] [command]"
    echo ""
    echo "Environments:"
    echo "  dev       Development environment (uses .env.docker.dev.example)"
    echo "  prod      Production environment (uses .env.docker.prod)"
    echo "  test      Web-test environment (uses .env.docker.web-test.example)"
    echo ""
    echo "Commands:"
    echo "  up        Start services (with --build)"
    echo "  down      Stop and remove services (with -v)"
    echo "  restart   Restart services"
    echo "  logs      Follow logs"
    echo "  ps        List containers"
    echo "  seed      Generate dummy data & test users"
    echo "  clean     Remove all volumes & clean install"
    echo ""
    echo "Optional flags:"
    echo "  --with-magento   Include local Magento Open Source stack addon (app + DB + search)"
    echo ""
    echo "Example:"
    echo "  $0 dev up"
    echo "  $0 prod logs"
    exit 1
}

pick_env_file() {
    for candidate in "$@"; do
        if [ -f "$candidate" ]; then
            echo "$candidate"
            return 0
        fi
    done
    return 1
}

if [ $# -lt 2 ]; then
    usage
fi

ENV=$1
CMD=$2
shift 2

WITH_MAGENTO=false
FILTERED_ARGS=()
for arg in "$@"; do
    if [ "$arg" = "--with-magento" ]; then
        WITH_MAGENTO=true
    else
        FILTERED_ARGS+=("$arg")
    fi
done
set -- "${FILTERED_ARGS[@]}"

# Select environment files
case $ENV in
    dev)
        ENV_FILE="$(pick_env_file "$ROOT_DIR/.env.docker.dev" "$ROOT_DIR/.env.docker.dev.example" || true)"
        FILES="-f $BASE_FILE -f $COMPOSE_DIR/docker-compose.dev.yml"
        ;;
    prod)
        ENV_FILE="$(pick_env_file "$ROOT_DIR/.env.docker.prod" || true)"
        FILES="-f $BASE_FILE -f $COMPOSE_DIR/docker-compose.prod.yml"
        ;;
    test)
        ENV_FILE="$(pick_env_file "$ROOT_DIR/.env.docker.web-test" "$ROOT_DIR/.env.docker.web-test.example" || true)"
        FILES="-f $BASE_FILE -f $COMPOSE_DIR/docker-compose.prod.yml -f $COMPOSE_DIR/docker-compose.web-test.yml"
        ;;
    *)
        error "Unknown environment: $ENV"
        ;;
esac

if [ "$WITH_MAGENTO" = true ]; then
    FILES="$FILES -f $COMPOSE_DIR/docker-compose.magento.yml"
    info "Magento addon enabled via docker-compose.magento.yml"
fi

# Configure compose env arguments
COMPOSE_ENV_ARGS=()
if [ -n "${ENV_FILE:-}" ] && [ -f "$ENV_FILE" ]; then
    COMPOSE_ENV_ARGS=(--env-file "$ENV_FILE")
elif [ "$ENV" = "prod" ]; then
    error "Environment file not found: $ROOT_DIR/.env.docker.prod"
else
    info "No dedicated env file found for $ENV; using default docker compose env resolution"
fi

if [ -n "${ENV_FILE:-}" ] && [ "$ENV" = "dev" ] && [ "$ENV_FILE" = "$ROOT_DIR/.env.docker.dev.example" ]; then
    info "Using fallback env file: .env.docker.dev.example"
fi

if [ -n "${ENV_FILE:-}" ] && [ "$ENV" = "test" ] && [ "$ENV_FILE" = "$ROOT_DIR/.env.docker.web-test.example" ]; then
    info "Using fallback env file: .env.docker.web-test.example"
fi

compose() {
    docker compose "${COMPOSE_ENV_ARGS[@]}" $FILES "$@"
}

wait_for_services_ready() {
    local timeout_seconds="$1"
    shift
    local services=("$@")
    local deadline=$((SECONDS + timeout_seconds))
    local pending=()

    while :; do
        pending=()
        for service in "${services[@]}"; do
            local cid
            cid="$(compose ps -q "$service" 2>/dev/null || true)"
            if [ -z "$cid" ]; then
                pending+=("$service")
                continue
            fi
            local status
            status="$(docker inspect --format '{{if .State.Health}}{{.State.Health.Status}}{{else}}{{.State.Status}}{{end}}' "$cid" 2>/dev/null || echo starting)"
            if [ "$status" != "healthy" ] && [ "$status" != "running" ]; then
                pending+=("$service")
            fi
        done

        if [ "${#pending[@]}" -eq 0 ]; then
            return 0
        fi

        if [ "$SECONDS" -ge "$deadline" ]; then
            error "Timed out waiting for services to become ready: ${pending[*]}"
        fi

        sleep 2
    done
}

# Map commands to docker compose actions
case $CMD in
    up)
        info "Starting $ENV environment..."
        if [ "$ENV" = "dev" ] && [ "$#" -eq 0 ]; then
            DB_SERVICES=(
                keycloak-db community-db commerce-db crm-db organization-db billing-db booking-db
                finance-db documents-db payments-db notification-db employees-db marketing-db projects-db
                calendar-db pos-db automation-db device-db file-db integrations-db realtime-db
                scoring-db deal-db email-sync-db
            )
            CORE_SERVICES=(kafka redis api-router-service)
            APP_SERVICES=()

            info "Booting core dependencies first..."
            compose up -d "${DB_SERVICES[@]}" "${CORE_SERVICES[@]}"

            info "Waiting for databases to become healthy..."
            wait_for_services_ready 180 "${DB_SERVICES[@]}"

            # Skip legacy monolith/mongo in default dev startup to keep the microservices
            # stack fast and avoid unrelated failures.
            while IFS= read -r service; do
                if [ "$service" != "mongo" ] && [ "$service" != "monolith" ]; then
                    APP_SERVICES+=("$service")
                fi
            done < <(compose config --services)

            compose up -d --build "${APP_SERVICES[@]}"
        else
            compose up -d --build "$@"
        fi
        success "$ENV environment is up!"
        ;;
    down)
        info "Stopping $ENV environment..."
        compose down -v "$@"
        success "$ENV environment is down."
        ;;
    restart)
        info "Restarting $ENV environment..."
        compose restart "$@"
        ;;
    logs)
        compose logs -f "$@"
        ;;
    ps)
        compose ps "$@"
        ;;
    seed)
        info "Seeding dummy data for $ENV environment..."
        # Try to find the network name dynamically from a running container
        NETWORK=$(docker inspect ms-keycloak -f '{{range $k,$v := .NetworkSettings.Networks}}{{$k}}{{end}}' 2>/dev/null || echo "")
        
        if [ -z "$NETWORK" ]; then
            error "Could not detect network. Is the environment running? Try: $0 $ENV up"
        fi

        info "Detected network: $NETWORK"

        docker run --rm \
            --network "$NETWORK" \
            -v "$ROOT_DIR:/repo" \
            -w /repo \
            -e SEED_ORG_HOST=ms-organization-service \
            -e SEED_PROJECTS_HOST=ms-projects-service \
            -e SEED_CRM_HOST=ms-crm-service \
            -e SEED_BILLING_HOST=ms-billing-service \
            -e SEED_DEAL_HOST=ms-deal-service \
            -e SEED_EMAIL_SYNC_HOST=ms-email-sync-service \
            -e SEED_CALENDAR_HOST=ms-calendar-service \
            -e SEED_DOCUMENTS_HOST=ms-documents-service \
            -e SEED_EMPLOYEES_HOST=ms-employees-service \
            -e SEED_POS_HOST=ms-pos-service \
            -e SEED_NOTIFICATION_HOST=ms-notification-service \
            -e SEED_SCORING_HOST=ms-scoring-service \
            -e KEYCLOAK_URL=http://ms-keycloak:8080 \
            node:24-alpine \
            sh -c "node scripts/seed-keycloak.cjs && node scripts/seed.cjs"
        success "Seeding complete!"
        ;;
    clean)
        info "Cleaning environment volumes..."
        compose down -v --remove-orphans
        # Find and remove any leftover workspace volumes
        VOLUMES=$(docker volume ls -q | grep "workspace_node_modules" || true)
        if [ -n "$VOLUMES" ]; then
            docker volume rm $VOLUMES
        fi
        rm -f "$ROOT_DIR/node_modules/.install-complete"
        success "Clean complete! Now run: $0 $ENV up"
        ;;
    *)
        # Pass-through any other docker compose command
        compose "$CMD" "$@"
        ;;
esac
