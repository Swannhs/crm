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
    echo "Example:"
    echo "  $0 dev up"
    echo "  $0 prod logs"
    exit 1
}

if [ $# -lt 2 ]; then
    usage
fi

ENV=$1
CMD=$2
shift 2

# Select environment files
case $ENV in
    dev)
        ENV_FILE="$ROOT_DIR/.env.docker.dev.example"
        FILES="-f $BASE_FILE -f $COMPOSE_DIR/docker-compose.dev.yml"
        ;;
    prod)
        ENV_FILE="$ROOT_DIR/.env.docker.prod"
        FILES="-f $BASE_FILE -f $COMPOSE_DIR/docker-compose.prod.yml"
        ;;
    test)
        ENV_FILE="$ROOT_DIR/.env.docker.web-test.example"
        FILES="-f $BASE_FILE -f $COMPOSE_DIR/docker-compose.prod.yml -f $COMPOSE_DIR/docker-compose.web-test.yml"
        ;;
    *)
        error "Unknown environment: $ENV"
        ;;
esac

# Check if env file exists
if [ ! -f "$ENV_FILE" ]; then
    error "Environment file not found: $ENV_FILE"
fi

# Map commands to docker compose actions
case $CMD in
    up)
        info "Starting $ENV environment..."
        docker compose --env-file "$ENV_FILE" $FILES up -d --build "$@"
        success "$ENV environment is up!"
        ;;
    down)
        info "Stopping $ENV environment..."
        docker compose --env-file "$ENV_FILE" $FILES down -v "$@"
        success "$ENV environment is down."
        ;;
    restart)
        info "Restarting $ENV environment..."
        docker compose --env-file "$ENV_FILE" $FILES restart "$@"
        ;;
    logs)
        docker compose --env-file "$ENV_FILE" $FILES logs -f "$@"
        ;;
    ps)
        docker compose --env-file "$ENV_FILE" $FILES ps "$@"
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
            -e SEED_HOST= \
            -e SEED_PROJECTS_HOST=projects-service \
            -e SEED_CRM_HOST=crm-service \
            -e SEED_BILLING_HOST=billing-service \
            -e SEED_DEAL_HOST=deal-service \
            -e SEED_EMAIL_SYNC_HOST=email-sync-service \
            -e KEYCLOAK_URL=http://keycloak:8080 \
            node:24-alpine \
            sh -c "node scripts/seed-keycloak.cjs && node scripts/seed.cjs"
        success "Seeding complete!"
        ;;
    clean)
        info "Cleaning environment volumes..."
        docker compose --env-file "$ENV_FILE" $FILES down -v --remove-orphans
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
        docker compose --env-file "$ENV_FILE" $FILES "$CMD" "$@"
        ;;
esac
