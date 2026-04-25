# Finance Service Endpoint Test Checklist

## Prerequisites

1. Start stack:
```bash
./manage.sh dev up
```
2. Ensure headers are available in your test client:
- `X-User-Id: <uuid>`
- `X-Org-Id: <uuid>`
- `X-Role: super-admin` (for super-admin routes)

Base URLs:
- API Router: `http://localhost:7001`
- Finance Service direct: `http://localhost:7170`

## Health

```bash
curl -i http://localhost:7170/health
```

## Finance Category (legacy)

```bash
curl -i -X POST http://localhost:7001/api/finance-category \
  -H 'Content-Type: application/json' \
  -H 'X-User-Id: <uuid>' -H 'X-Org-Id: <uuid>' \
  -d '{"name":"Sales","type":"income","color":"#22c55e"}'

curl -i http://localhost:7001/api/finance-category \
  -H 'X-User-Id: <uuid>' -H 'X-Org-Id: <uuid>'

curl -i http://localhost:7001/api/finance-category/yearly-netincome?year=2026 \
  -H 'X-User-Id: <uuid>' -H 'X-Org-Id: <uuid>'
```

## Finance Dashboard (legacy)

```bash
curl -i http://localhost:7001/api/finance-dashboard/get-expense-stat?year=2026 \
  -H 'X-User-Id: <uuid>' -H 'X-Org-Id: <uuid>'

curl -i http://localhost:7001/api/finance-dashboard/get-transaction-list?limit=50 \
  -H 'X-User-Id: <uuid>' -H 'X-Org-Id: <uuid>'
```

## Finance Kanban (legacy)

```bash
curl -i -X POST http://localhost:7001/api/finance-kanban/board \
  -H 'Content-Type: application/json' \
  -H 'X-User-Id: <uuid>' -H 'X-Org-Id: <uuid>' \
  -d '{"name":"Main Board","description":"FY26"}'

curl -i http://localhost:7001/api/finance-kanban/board \
  -H 'X-User-Id: <uuid>' -H 'X-Org-Id: <uuid>'

curl -i -X POST http://localhost:7001/api/finance-kanban/column \
  -H 'Content-Type: application/json' \
  -H 'X-User-Id: <uuid>' -H 'X-Org-Id: <uuid>' \
  -d '{"boardId":"<board-uuid>","title":"Planned","position":1}'

curl -i -X POST http://localhost:7001/api/finance-kanban/card \
  -H 'Content-Type: application/json' \
  -H 'X-User-Id: <uuid>' -H 'X-Org-Id: <uuid>' \
  -d '{"columnId":"<column-uuid>","title":"Invoice #1001","amount":240.50,"sourceType":"pipeline"}'

curl -i http://localhost:7001/api/finance-kanban/card-total \
  -H 'X-User-Id: <uuid>' -H 'X-Org-Id: <uuid>'

curl -i http://localhost:7001/api/finance-kanban/pipeline-card-details?limit=20 \
  -H 'X-User-Id: <uuid>' -H 'X-Org-Id: <uuid>'
```

## Super Admin Finance (legacy)

```bash
curl -i -X POST http://localhost:7001/api/super-admin-finance/sync-stripe?period=monthly \
  -H 'X-User-Id: <uuid>' -H 'X-Org-Id: <uuid>' -H 'X-Role: super-admin'

curl -i http://localhost:7001/api/super-admin-finance/summary?period=monthly \
  -H 'X-User-Id: <uuid>' -H 'X-Org-Id: <uuid>' -H 'X-Role: super-admin'

curl -i http://localhost:7001/api/super-admin-finance/processing-fees?period=monthly \
  -H 'X-User-Id: <uuid>' -H 'X-Org-Id: <uuid>' -H 'X-Role: super-admin'

curl -i -X POST http://localhost:7001/api/super-admin-finance/delete-account \
  -H 'Content-Type: application/json' \
  -H 'X-User-Id: <uuid>' -H 'X-Org-Id: <uuid>' -H 'X-Role: super-admin' \
  -d '{"organizationId":"<org-uuid>"}'
```

## Validation / Guard Negative Tests

1. Missing identity headers should return `401` on identity-guarded routes.
2. Missing `X-Role: super-admin` should return `403` on super-admin routes.
3. Invalid `year` (e.g. `year=abc`) should return `400`.
4. Invalid `limit` (`0`, `1000`, or string) should return `400`.
5. Invalid `period` not in `daily|weekly|monthly|quarterly|yearly` should return `400`.
6. Invalid `organizationId` in delete-account body should return `400`.
