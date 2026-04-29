# Kubernetes Manifests

This directory now contains a Kustomize-based Kubernetes setup for the microservices platform.

## Layout

- `base/`: reusable manifests shared by all environments
	- `platform/`: Keycloak, Kafka, Redis, and initial Postgres databases
	- `gateway/`: Nginx API gateway deployment + config from `gateway/nginx/nginx.conf`
	- `services/organization-service/`: first migrated domain service
	- Billing service manifests: deprecated (removed from active K8s base resources)
- `overlays/dev/`: local/dev configuration
- `overlays/staging/`: staging configuration
- `overlays/prod/`: production configuration (TLS placeholder included)

## Quick Start

From `microservices/` root:

```bash
kubectl apply -k infra/k8s/overlays/dev
```

Check rollout:

```bash
kubectl get pods -n mymanager-dev
kubectl get svc -n mymanager-dev
kubectl get ingress -n mymanager-dev
```

Delete dev stack:

```bash
kubectl delete -k infra/k8s/overlays/dev
```

## Notes

- Service images are placeholders (`ghcr.io/mymanager/*`). Update tags in each overlay.
- Secrets are plain Kubernetes `Secret` objects for bootstrap only. Replace with sealed/external secrets before production.
- Kafka is single-node and intended for non-production bootstrap.
- Additional services should follow the same pattern under `base/services/<service-name>/` and be added to `base/kustomization.yaml`.

## Ownership Model

| Capability | Source of truth |
|---|---|
| Public storefront | Magento |
| Cart/checkout | Magento |
| Online orders | Magento, synced to Odoo |
| CRM contacts/companies | Odoo |
| Leads/opportunities | Odoo |
| Sales orders | Odoo |
| Invoices/payments/accounting | Odoo |
| Inventory | Odoo |
| Organization/workspace/user tenancy | Custom organization/auth layer |
| Odoo bridge | `odoo-integration-service` |
