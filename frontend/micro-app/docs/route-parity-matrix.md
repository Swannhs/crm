# Legacy To Micro-App Route Parity Matrix

This matrix uses `client/src/router/routes/*.js` as the source of truth and compares it against the route surface currently exposed from `microservices/frontend/micro-app/src/app` plus the service and gateway coverage currently wired for the new system.

| Legacy route file | Legacy path sample(s) | Legacy entry view | Micro-app route/page | Service / API coverage | Parity | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| `Dashboards.js` | `/dashboard/analytics`, `/dashboard/ecommerce` | `views/dashboard/newdashboard` | `/dashboard/overview` | Overview widgets only | partial | New app has overview, but not one-for-one analytics/ecommerce dashboards. |
| `Contacts.js` | `/contacts/view/:id/:mode`, `/contacts/employee/list`, `/contacts/pets/:id`, `/contact/payment-method/:ownerId/:contactId`, `/launch-clockin/:contactTypeId` | `views/contacts/**` | `/dashboard/contacts`, `/dashboard/contacts/view/[id]/[mode]`, `/dashboard/contacts/employee/list`, `/dashboard/contacts/pets/[id]`, public compatibility routes | `contact-service`, employee schedule APIs, legacy compatibility APIs | partial | Detail modes, employee list, pets route, and public payment/clock-in route surface now exist; the fully generic `/contacts/:type/:id` legacy pattern is still only partially covered. |
| `Task.js` | `/tasks`, `/tasksAndGoals`, `/goals/detail/:id` | `views/taskAndGoals/**` | `/dashboard/projects/tasks` plus existing project views | `project-service` tasks endpoints | partial | Task list/kanban parity improved, goals/task-and-goals domain still incomplete. |
| `Calendar.js` + `Event.js` | `/calendar/:tab`, `/booking/:link`, `/booking-details/landing/:link`, `/events`, `/event-details/:eventId`, `/event-check-in/:eventId`, public event preview routes | `views/calendar/**` | `/dashboard/calendar`, `/dashboard/calendar/[tab]`, `/dashboard/events`, `/dashboard/events/[eventId]`, `/dashboard/events/[eventId]/check-in`, `/booking/[link]`, `/booking-details/landing/[link]` | `calendar-service`, `booking-service`, legacy public compatibility APIs | partial | Core calendar/event/booking pages now route in micro-app; public event preview, fundraising, tournaments, and guest registration flows remain missing. |
| `Finance.js` | `/finance/*`, `/invoice/list`, `/invoice/add`, `/invoice/edit/:id`, `/invoice/preview/:id`, `/invoice/print/:id`, `/payment/invoice/:id`, `/payment-confirm/invoice/:id`, `/reciept/:id` | `views/finance/**` | `/dashboard/finance/[section]`, `/dashboard/billing/invoices`, `/dashboard/billing/invoices/new`, `/dashboard/billing/invoices/[id]`, `/dashboard/billing/invoices/[id]/edit`, public invoice/receipt routes | `billing-service`, `finance-service`, `/api/invoice`, `/api/payments` | partial | Route depth for major invoice flows now exists and is wired to real invoice APIs; public processor-specific payment UX still needs deeper backend integration. |
| `Documents.js` | `/documents`, `/documents/:folder`, `/documents/label/:label`, `/document/create/:template/:type`, `/document/preview/:hashcode`, `/document/email-link/:hashcode` | `views/documents/**` | `/dashboard/documents`, `/dashboard/documents/[folder]`, `/dashboard/documents/create/[template]/[type]`, public document preview/email-link routes | `document-service`, `/api/documents`, `/api/documents/share/{hash_code}` | partial | Folder/create/public routes are present; full signing workflow, recipient actions, and mobile notify flows remain incomplete. |
| `Marketing.js` + `Workflow.js` | `/marketing/:section/:subsection`, `/workflow`, `/marketing/workflow/activity-logs/:workflowId`, `/marketing/workflow/builder/:workspaceId/:workflowId` | `views/marketing`, `views/workflow/**` | `/dashboard/marketing`, `/dashboard/marketing/[section]`, `/dashboard/marketing/[section]/[subsection]`, workflow activity/builder routes | `marketing-service`, automation/workflow gateway routes | partial | Marketing section/subsection parity and workflow route surface now exist; deeper editors and action builders still need follow-through. |
| `ProjectManager.js` | `/my-project-fullscreen`, `/component/kanban/view`, `/share-board/:workspaceId/:boardId` | `views/projectManager/**` | `/dashboard/projects`, `/dashboard/projects/[id]`, `/share-board/[workspaceId]/[boardId]`, `/dashboard/projects/tasks` | `project-service` project/board/card APIs | partial | Shared board and tasks routes now exist, but fullscreen workspace parity is still incomplete. |
| `Community.js` | `/community`, `/community/group/:groupId`, `/community/member/:contactId` | `views/community/**` | `/dashboard/community` | `community-service` posts/groups | partial | Feed exists and group data APIs are available; group/member/profile subroutes are still missing. |
| `Organizations.js` + `Setting.js` | `/organizations`, `/setting/:activeTab`, `/plans`, `/org-payment-method/:token`, `/twenty-four-hour/:clientId` | `views/organizations/**`, `views/settings` | `/dashboard/settings`, `/dashboard/settings/[tab]`, public help/document-adjacent support routes | `organization-service`, compatibility APIs | partial | Settings tab route depth improved. Organization admin, plans, token auth, and org payment method flows remain incomplete. |
| `liveChatSetting.js` | `/liveChatSetting`, `/help-center`, `/help-center/article/:id` | `views/livechat`, `views/helpCenter/public/**` | `/dashboard/chat`, `/help-center`, `/help-center/article/[id]` | `chat-service`, public help-center APIs | partial | Public help-center routes now exist in micro-app. Live chat settings page parity remains incomplete. |
| `Shop.js`, `ShopV2.js`, `Products.js`, `MembershipDigital.js` | Shop storefront, POS, checkout, receipt, membership, course, and product public routes | `views/shops/**`, `views/shopv2/**` | dashboard shop/products/orders pages, public shop/product/catalog routes, online-shop routes, `pos-new/*`, table-side routes | `commerce-service`, `pos-service`, `/api/shop/products`, `/api/shop/orders`, `/api/pos/*` | partial | Major route surface now exists in the micro-app and is backed by microservice product/order/POS APIs. Full storefront behavior, customer auth, cart/processor checkout, memberships/courses specifics, and specialized KDS/CFD/kiosk/table UX still need deeper parity work. |
| `FormBuilder.js`, `WebBuilder.js`, `EmailBuilder.js`, `WebTools.js` | Builder/editor/preview routes | `views/formBuilder/**`, `views/webbuilder/**`, `views/emailEditor/**` | not migrated in micro-app | Mixed legacy/automation APIs | missing | Builders need dedicated editor route migration work. |
| `Business.js`, `Sales.js`, `MySocial.js`, `Affiliate.js`, `Realestate.js`, `WhiteLabel.js`, `Domain.js`, `Devices.js`, `BusinessCard.js`, `ContactWaiver.js`, `Feedback.js`, `FileManager.js`, `Pages.js`, `MyCMA.js`, `OrgTemplates.js`, `MobileViewRoutes.js`, `Menu.js`, `onBoarding.js` | Various public, mobile, and vertical-specific routes | mixed | not migrated or only partially represented | mixed | missing | These domains still require route-by-route migration decisions. |

## Completed / moved materially forward in this pass

- Contacts route depth
- Finance and billing route depth
- Calendar, events, and booking route depth
- Documents route depth
- Marketing and workflow route depth
- Projects and shared-board route depth
- Settings tab route depth
- Public help-center route support

## Remaining partial domains

- dashboards
- contacts
- tasks/goals
- calendar/events/booking
- finance/payments
- documents
- marketing/workflow
- projects
- commerce/shop/POS
- community
- settings/organizations/live chat

## Remaining missing domains

- builders and editors
- white-label/domain/device/business-card
- file manager
- pages/auth/onboarding/mobile
- affiliate/real-estate/sales/mycma/mysocial/org templates

## Blockers

- Several legacy flows still rely on monolith-only behaviors or public-token flows that have not yet been reimplemented in the newer services.
- Some microservice APIs exist but expose only list/detail support, not full edit/send/sign/process flows.
- The legacy app’s route surface is substantially broader than the current micro-app information architecture, so additional iterations are still required for full parity.
