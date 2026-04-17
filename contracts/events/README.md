# Event Contracts

We use a topic exchange named `domain-events` (RabbitMQ).

Routing keys are namespaced by domain, e.g.:
- `crm.contact.created`
- `crm.contact.updated`
- `billing.invoice.created`

Payloads are JSON.

## Identity

Events should include:
- `org_id`
- `actor_user_id` (when applicable)
- `occurred_at`

