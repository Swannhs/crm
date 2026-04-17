# Kubernetes Manifests (Scaffold)

This folder will hold Kubernetes manifests for the microservices platform.

Initial target components:
- `keycloak` + `postgres`
- `krakend` gateway
- `rabbitmq` (event bus)
- `redis`
- domain services (`crm-service`, `organization-service`, `billing-service`, `notification-service`, `realtime-service`)

For now we’re using `microservices/infra/compose/docker-compose.yml` for local development.

