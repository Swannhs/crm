# Legacy To Micro-App Route Parity Matrix

This matrix uses `client/src/router/routes/*.js` as the source of truth and compares it against the route surface currently exposed from `microservices/frontend/micro-app/src/app` plus the service and gateway coverage currently wired for the new system.

| Legacy route file | Legacy path sample(s) | Legacy entry view | Micro-app route/page | Service / API coverage | Parity | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| `Dashboards.js` | `/dashboard/analytics`, `/dashboard/ecommerce` | `views/dashboard/newdashboard` | `/dashboard/overview` | Overview widgets only | partial | New app has overview, but not one-for-one analytics/ecommerce dashboards. |
| `Contacts.js` | `/contacts/view/:id/:mode`, `/contacts/employee/list`, `/contacts/pets/:id`, `/contact/payment-method/:ownerId/:contactId`, `/launch-clockin/:contactTypeId` | `views/contacts/**` | `/dashboard/contacts`, `/dashboard/contacts/view/[id]/[mode]`, `/dashboard/contacts/employee/list`, `/dashboard/contacts/pets/[id]`, public compatibility routes | `contact-service`, employee schedule APIs, legacy compatibility APIs | partial | Detail modes, employee list, pets route, and public payment/clock-in route surface now exist; the fully generic `/contacts/:type/:id` legacy pattern is still only partially covered. |
| `Task.js` | `/tasks`, `/tasksAndGoals`, `/goals/detail/:id` | `views/taskAndGoals/**` | `/dashboard/projects/tasks` plus existing project views | `project-service` tasks endpoints | partial | Task list/kanban parity improved, goals/task-and-goals domain still incomplete. |
| `Calendar.js` + `Event.js` | `/calendar/:tab`, `/booking/:link`, `/booking-details/landing/:link`, `/events`, `/event-details/:eventId`, `/event-check-in/:eventId`, public event preview routes | `views/calendar/**` | `/dashboard/calendar`, `/dashboard/calendar/[tab]`, `/dashboard/events`, `/dashboard/events/[eventId]`, `/dashboard/events/[eventId]/check-in`, `/booking/[link]`, `/booking-details/landing/[link]` | `calendar-service`, `booking-service`, legacy public compatibility APIs | partial | Core calendar/event/booking pages now route in micro-app; public event preview, fundraising, tournaments, and guest registration flows remain missing. |
| `Finance.js` | `/finance/*`, `/invoice/list`, `/invoice/add`, `/invoice/edit/:id`, `/invoice/preview/:id`, `/invoice/print/:id`, `/payment/invoice/:id`, `/payment-confirm/invoice/:id`, `/reciept/:id` | `views/finance/**` | `/dashboard/finance/[section]`, `/dashboard/billing/invoices`, `/dashboard/billing/invoices/new`, `/dashboard/billing/invoices/[id]`, `/dashboard/billing/invoices/[id]/edit`, public invoice/receipt routes | `odoo-integration-service`, `finance-service`, `/api/odoo/invoices` | partial | Route depth for major invoice flows now exists and is wired to Odoo-backed invoice APIs; public processor-specific payment UX still needs deeper backend integration. |
| `Documents.js` | `/documents`, `/documents/:folder`, `/documents/label/:label`, `/document/create/:template/:type`, `/document/preview/:hashcode`, `/document/email-link/:hashcode` | `views/documents/**` | `/dashboard/documents`, `/dashboard/documents/[folder]`, `/dashboard/documents/create/[template]/[type]`, public document preview/email-link routes | `document-service`, `/api/documents`, `/api/documents/share/{hash_code}` | partial | Folder/create/public routes are present; full signing workflow, recipient actions, and mobile notify flows remain incomplete. |
| `Marketing.js` + `Workflow.js` | `/marketing/:section/:subsection`, `/workflow`, `/marketing/workflow/activity-logs/:workflowId`, `/marketing/workflow/builder/:workspaceId/:workflowId` | `views/marketing`, `views/workflow/**` | `/dashboard/marketing`, `/dashboard/marketing/[section]`, `/dashboard/marketing/[section]/[subsection]`, `/workflow`, workflow activity/builder routes | `marketing-service`, automation/workflow gateway routes | partial | Marketing section/subsection parity and workflow route surface now exist, including the top-level workflow route. Deeper editors and action builders still need follow-through. |
| `ProjectManager.js` | `/my-project-fullscreen`, `/component/kanban/view`, `/share-board/:workspaceId/:boardId` | `views/projectManager/**` | `/dashboard/projects`, `/dashboard/projects/[id]`, `/share-board/[workspaceId]/[boardId]`, `/dashboard/projects/tasks` | `project-service` project/board/card APIs | partial | Shared board and tasks routes now exist, but fullscreen workspace parity is still incomplete. |
| `Community.js` | `/community`, `/community/group/:groupId`, `/community/member/:contactId` | `views/community/**` | `/dashboard/community` | `community-service` posts/groups | partial | Feed exists and group data APIs are available; group/member/profile subroutes are still missing. |
| `Organizations.js` + `Setting.js` | `/organizations`, `/setting/:activeTab`, `/plans`, `/org-payment-method/:token`, `/twenty-four-hour/:clientId` | `views/organizations/**`, `views/settings` | `/dashboard/settings`, `/dashboard/settings/[tab]`, `/dashboard/organizations`, `/dashboard/organizations/[organizationId]`, `/dashboard/organizations/[organizationId]/location/[userId]`, `/dashboard/admin/service-fees`, `/dashboard/organization/[organizationId]/service-fees`, `/plans`, `/plans/[planId]/[duration]`, `/plans/success`, `/token/[token]`, `/org-payment-method/[token]` | `organization-service`, `/api/organization/v1/details`, `/org/v1/locations`, compatibility APIs | partial | Settings, organization admin, plan, service-fee, token-auth, and org payment method route depth now exists in the micro-app. Real organization management is still partial because the new backend mainly exposes current-org details plus locations rather than the full legacy multi-org admin surface. |
| `liveChatSetting.js` | `/liveChatSetting`, `/help-center`, `/help-center/article/:id` | `views/livechat`, `views/helpCenter/public/**` | `/dashboard/chat`, `/help-center`, `/help-center/article/[id]` | `chat-service`, public help-center APIs | partial | Public help-center routes now exist in micro-app. Live chat settings page parity remains incomplete. |
| `Shop.js`, `ShopV2.js`, `Products.js`, `MembershipDigital.js` | Shop storefront, POS, checkout, receipt, membership, course, and product public routes | `views/shops/**`, `views/shopv2/**` | dashboard shop/products/orders pages, public shop/product/catalog routes, online-shop routes, `pos-new/*`, table-side routes | `magento-integration-service` (`/api/magento/*`) for CRM/admin sync, Magento storefront/GraphQL for public commerce, `pos-service` for POS | partial | Magento is the eCommerce source of truth (catalog/cart/checkout/orders/payments/inventory/shipping/tax/promotions). Legacy `/api/shop/*` is deprecated compatibility routing and should be migrated to canonical `/api/magento/*` for admin integration use cases. |
| `FormBuilder.js`, `WebBuilder.js`, `EmailBuilder.js`, `WebTools.js` | `/form-funnel`, `/form-funnel/create/:type/:template/:id`, `/form-funnel/form-setting/:id`, `/form-preview/:id&path=:path`, `/form-preview/submitted/:id`, `/email-editor`, `/email-editor/:id`, `/webbuilder/create`, `/webbuilder/create/:type`, `/webbuilder/editor/:id`, `/webbuilder/preview/:websiteId/:pageSlug`, `/social-proof`, `/social-scheduler`, `/reputation` | `views/formBuilder/**`, `views/webbuilder/**`, `views/emailEditor/**`, `views/blank_page` | `/form-funnel`, `/form-funnel/create/[type]/[template]/[id]`, `/form-funnel/form-setting/[id]`, `/form-preview/[formSpec]`, `/form-preview/submitted/[id]`, `/email-editor`, `/email-editor/[id]`, `/webbuilder/create`, `/webbuilder/create/[type]`, `/webbuilder/editor/[id]`, `/webbuilder/preview/[websiteId]`, `/webbuilder/preview/[websiteId]/[pageSlug]`, `/social-proof`, `/social-scheduler`, `/reputation` | `builder-service`, `marketing-service`, `/api/form-builder/*`, `/api/webbuilder*`, `/api/reputation/dashboard-stats`, `/api/workflow-workspace` | partial | The major builder/editor route surface now exists in the micro-app and loads compatibility-backed form, website, workflow, and reputation data where available. Full drag-and-drop editor parity, publishing flows, scheduler tools, and richer web-tools behavior still need a dedicated frontend/backend migration pass. |
| `Pages.js` + `onBoarding.js` | `/login`, `/register`, `/login-contact/:organizationId/:location`, `/login-code`, `/verify/:id`, `/checkout/:slug`, `/qrpay/:slug`, `/preview/form/:formId/:formPageId`, `/forgot-password`, `/onboarding`, `/verified`, `/integrations/uber-eats/callback` | `views/pages/**`, `views/businessTools/**`, `views/onboardingNew/**` | `/login`, `/register`, `/login-contact/[organizationId]/[location]`, `/login-code`, `/verify/[id]`, `/checkout/[slug]`, `/qrpay/[slug]`, `/preview/form/[formId]/[formPageId]`, `/forgot-password`, `/onboarding`, `/verified`, `/integrations/uber-eats/callback` | `public-flow-service`, auth context, `/api/checkout-page/public/{slug}`, `/api/qr-pay-page/public/{slug}`, `/api/authenticate-contact/generate`, compatibility APIs | partial | Core public auth, onboarding, checkout, QR pay, preview, and callback routes now exist in the micro-app. Login/register reuse the new auth views; contact/device-code auth, forgot-password, verification, and onboarding are still only partially migrated behaviorally. |
| `ContactWaiver.js` + `MobileViewRoutes.js` + `Menu.js` | `/waiver/sign/:id`, `/notifications`, `/mobile-settings`, `/menu` | `views/contacts/waiver-public/**`, mobile layout components | `/waiver/sign/[id]`, `/notifications`, `/mobile-settings`, `/menu` | `public-flow-service`, `/api/contact-waiver/public/{id}`, `/api/contact-waiver/public/sign/{id}` | partial | Public waiver now loads and submits through compatibility APIs in the micro-app. Mobile notifications/settings/menu routes now resolve, but they are still route-level placeholders rather than full mobile UX parity. |
| `WhiteLabel.js`, `Domain.js`, `Devices.js`, `BusinessCard.js` | `/white-label`, `/domain`, `/devices`, `/business-card/*` | `views/whiteLabel/**`, `views/domain/**`, `views/devices/**`, `views/businessCard/**` | `/dashboard/white-label`, `/dashboard/domain`, `/dashboard/devices` | `device-service`, `/api/devices`, `/api/hardware/*`, `/api/sunmi/config`, `/api/unifi/*`, organization compatibility APIs | partial | White-label, domain, and devices route surface now exists in the micro-app. Devices are backed by real microservice APIs; white-label/domain are still mostly compatibility-level placeholders until branding and domain provisioning services are expanded. |
| `Business.js`, `Sales.js`, `MySocial.js`, `Affiliate.js`, `Realestate.js`, `Feedback.js`, `FileManager.js`, `MyCMA.js`, `OrgTemplates.js` | Various public, mobile, and vertical-specific routes | mixed | not migrated or only partially represented | mixed | missing | These domains still require route-by-route migration decisions. |

## Completed / moved materially forward in this pass

- Contacts route depth
- Finance and billing route depth
- Calendar, events, and booking route depth
- Documents route depth
- Marketing and workflow route depth
- Projects and shared-board route depth
- Settings tab route depth
- Public help-center route support
- Commerce, storefront, and POS route depth
- Organization admin, plans, white-label, domain, and devices route depth
- Builders, editors, workflow root, and web-tools route depth
- Public auth, onboarding, checkout, QR pay, waiver, and mobile entry route depth

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
- white-label/domain/devices
- builders/editors/web-tools
- public/mobile/auth/onboarding

## Remaining missing domains

- file manager
- affiliate/real-estate/sales/mycma/mysocial/org templates

## Blockers

- Several legacy flows still rely on monolith-only behaviors or public-token flows that have not yet been reimplemented in the newer services.
- Some microservice APIs exist but expose only list/detail support, not full edit/send/sign/process flows.
- White-label/domain pages currently provide route parity and org-context views, but not full provisioning, DNS, certificate, or branding automation parity.
- Builder/editor coverage now leans on monolith compatibility routes through the gateway; the dedicated microservice replacement for visual editors and publishing workflows is still incomplete.
- Public/mobile coverage now includes the legacy routes, but several flows still use simplified UIs or compatibility-only behavior rather than full parity with the old React/mobile experience.
- The legacy app’s route surface is substantially broader than the current micro-app information architecture, so additional iterations are still required for full parity.
