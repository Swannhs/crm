# Event Contracts

We use Kafka topics for domain events.

Topics are namespaced by domain, e.g.:
- `crm.contact.created`
- `crm.contact.updated`
- `billing.invoice.created`
- `billing.payment.recorded`

Payloads are JSON.

## Identity

Events should include:
- `org_id`
- `actor_user_id` (when applicable)
- `occurred_at`

## Current Topics

- `billing.payment.recorded`
