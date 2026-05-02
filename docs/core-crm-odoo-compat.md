# Core CRM/Odoo Compatibility Notes

## Opportunity response shape

Odoo remains the source of truth for CRM opportunities. `CrmService.normalizeOpportunity()` returns both Odoo-native nested fields (`partner`, `stage`, `user`, `expectedClose`) and frontend compatibility fields (`customerName`, `companyName`, `stageId`, `stageName`, `stageStatus`, `status`, `expectedCloseDate`, `weightedValue`).

The frontend sales dashboard still normalizes every opportunity response in `sales-dashboard-service.ts` so Kanban, cards, drawer, create/update, and stage movement always receive `stage` as a canonical string.

## Opportunity archive behavior

CRM opportunity delete routes archive Odoo records with `active = false`. They do not hard-delete business records and return `{ id, archived: true }`.

## Activity payload mapping

Sales dashboard activity creation maps frontend fields (`title`, `dueDate`, `type`, opportunity route ID) to Odoo `mail.activity` fields (`summary`, `date_deadline`, `activity_type_id`, `res_id`). Activity type resolution tries the requested value, common aliases, then the first configured Odoo activity type. Missing opportunity IDs, titles, or activity type configuration return clear HTTP 400 errors.

## ID sanitization

CRM controller IDs use `parseOdooNumericId()`: prefixed IDs such as `act-123` resolve to `123`, while values without a positive numeric component return HTTP 400 before any Odoo call.

## Invoice delete behavior

Invoice delete now reflects actual Odoo behavior. Draft invoices are unlinked and return `{ id, deleted: true }`. Posted invoices are protected with HTTP 400 because they require a cancel or credit-note workflow.

## Sales-dashboard compatibility routes

`/api/sales-dashboard/*` routes preserve `Authorization`, `X-User-Id`, and `X-Org-Id` through the API router. Real sales actions proxy to canonical Odoo CRM endpoints. Magento-backed sync/order compatibility stays deliberately disabled instead of faking success.
