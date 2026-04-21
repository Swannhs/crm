const ROOTS = {
  AUTH: '/auth',
  DASHBOARD: '/dashboard',
} as const;

// ----------------------------------------------------------------------

export const paths = {
  faqs: '/faqs',
  minimalStore: 'https://mui.com/store/items/minimal-dashboard/',
  // AUTH
  auth: {
    amplify: {
      signIn: `${ROOTS.AUTH}/amplify/sign-in`,
      verify: `${ROOTS.AUTH}/amplify/verify`,
      signUp: `${ROOTS.AUTH}/amplify/sign-up`,
      updatePassword: `${ROOTS.AUTH}/amplify/update-password`,
      resetPassword: `${ROOTS.AUTH}/amplify/reset-password`,
    },
    jwt: {
      signIn: `${ROOTS.AUTH}/jwt/sign-in`,
      signUp: `${ROOTS.AUTH}/jwt/sign-up`,
    },
    keycloak: {
      signIn: `${ROOTS.AUTH}/keycloak/sign-in`,
    },
    firebase: {
      signIn: `${ROOTS.AUTH}/firebase/sign-in`,
      verify: `${ROOTS.AUTH}/firebase/verify`,
      signUp: `${ROOTS.AUTH}/firebase/sign-up`,
      resetPassword: `${ROOTS.AUTH}/firebase/reset-password`,
    },
    auth0: {
      signIn: `${ROOTS.AUTH}/auth0/sign-in`,
    },
    supabase: {
      signIn: `${ROOTS.AUTH}/supabase/sign-in`,
      verify: `${ROOTS.AUTH}/supabase/verify`,
      signUp: `${ROOTS.AUTH}/supabase/sign-up`,
      updatePassword: `${ROOTS.AUTH}/supabase/update-password`,
      resetPassword: `${ROOTS.AUTH}/supabase/reset-password`,
    },
  },
  // DASHBOARD
  dashboard: {
    root: ROOTS.DASHBOARD,
    overview: `${ROOTS.DASHBOARD}/overview`,
    contacts: `${ROOTS.DASHBOARD}/contacts`,
    contact: (id: string) => `${ROOTS.DASHBOARD}/contacts/${id}`,
    contactView: (id: string, mode: string = 'overview') =>
      `${ROOTS.DASHBOARD}/contacts/view/${id}/${mode}`,
    contactType: (type: string, id: string) => `${ROOTS.DASHBOARD}/contacts/${type}/${id}`,
    contactPets: (id: string) => `${ROOTS.DASHBOARD}/contacts/pets/${id}`,
    contactEmployees: `${ROOTS.DASHBOARD}/contacts/employee/list`,
    documents: `${ROOTS.DASHBOARD}/documents`,
    documentFolder: (folder: string) => `${ROOTS.DASHBOARD}/documents/${folder}`,
    documentCreate: (template: string, type: string) =>
      `${ROOTS.DASHBOARD}/documents/create/${template}/${type}`,
    billing: `${ROOTS.DASHBOARD}/billing`,
    invoices: `${ROOTS.DASHBOARD}/billing/invoices`,
    invoiceNew: `${ROOTS.DASHBOARD}/billing/invoices/new`,
    invoiceDetails: (id: string) => `${ROOTS.DASHBOARD}/billing/invoices/${id}`,
    invoiceEdit: (id: string) => `${ROOTS.DASHBOARD}/billing/invoices/${id}/edit`,
    financeSection: (section: string) => `${ROOTS.DASHBOARD}/finance/${section}`,
    employees: `${ROOTS.DASHBOARD}/employees`,
    calendar: `${ROOTS.DASHBOARD}/calendar`,
    calendarTab: (tab: string) => `${ROOTS.DASHBOARD}/calendar/${tab}`,
    events: `${ROOTS.DASHBOARD}/events`,
    eventDetails: (id: string) => `${ROOTS.DASHBOARD}/events/${id}`,
    eventCheckIn: (id: string) => `${ROOTS.DASHBOARD}/events/${id}/check-in`,
    marketing: `${ROOTS.DASHBOARD}/marketing`,
    marketingSection: (section: string) => `${ROOTS.DASHBOARD}/marketing/${section}`,
    marketingSubsection: (section: string, subsection: string) =>
      `${ROOTS.DASHBOARD}/marketing/${section}/${subsection}`,
    workflowActivity: (workflowId: string) =>
      `${ROOTS.DASHBOARD}/marketing/workflow/activity-logs/${workflowId}`,
    workflowBuilder: (workspaceId: string, workflowId: string) =>
      `${ROOTS.DASHBOARD}/marketing/workflow/builder/${workspaceId}/${workflowId}`,
    projects: `${ROOTS.DASHBOARD}/projects`,
    project: (id: string) => `${ROOTS.DASHBOARD}/projects/${id}`,
    projectTasks: `${ROOTS.DASHBOARD}/projects/tasks`,
    workflow: '/workflow',
    formBuilder: '/form-funnel',
    formBuilderCreate: (type: string, template: string, id: string) =>
      `/form-funnel/create/${type}/${template}/${id}`,
    formBuilderSetting: (id: string) => `/form-funnel/form-setting/${id}`,
    emailEditor: '/email-editor',
    emailEditorById: (id: string) => `/email-editor/${id}`,
    webBuilderCreate: '/webbuilder/create',
    webBuilderCreateByType: (type: string) => `/webbuilder/create/${type}`,
    webBuilderEditor: (id: string) => `/webbuilder/editor/${id}`,
    webToolsSocialProof: '/social-proof',
    webToolsSocialScheduler: '/social-scheduler',
    webToolsReputation: '/reputation',
    shop: `${ROOTS.DASHBOARD}/shop`,
    products: `${ROOTS.DASHBOARD}/products`,
    orders: `${ROOTS.DASHBOARD}/orders`,
    pos: (shopId: string) => `${ROOTS.DASHBOARD}/pos/${shopId}`,
    posSettings: (shopId: string) => `${ROOTS.DASHBOARD}/pos/settings/${shopId}`,
    posOrders: (shopId: string) => `${ROOTS.DASHBOARD}/pos/orders/${shopId}`,
    posKds: (shopId: string) => `${ROOTS.DASHBOARD}/pos/kds/${shopId}`,
    posCfd: (shopId: string) => `${ROOTS.DASHBOARD}/pos/cfd/${shopId}`,
    posKiosk: (shopId: string) => `${ROOTS.DASHBOARD}/pos/kiosk/${shopId}`,
    posStockManager: (shopId: string) => `${ROOTS.DASHBOARD}/pos/stock-manager/${shopId}`,
    posTables: `${ROOTS.DASHBOARD}/pos/tables`,
    organizations: `${ROOTS.DASHBOARD}/organizations`,
    organization: (id: string) => `${ROOTS.DASHBOARD}/organizations/${id}`,
    organizationLocation: (organizationId: string, userId: string) =>
      `${ROOTS.DASHBOARD}/organizations/${organizationId}/location/${userId}`,
    serviceFees: `${ROOTS.DASHBOARD}/admin/service-fees`,
    organizationServiceFees: (organizationId: string) =>
      `${ROOTS.DASHBOARD}/organization/${organizationId}/service-fees`,
    devices: `${ROOTS.DASHBOARD}/devices`,
    whiteLabel: `${ROOTS.DASHBOARD}/white-label`,
    domain: `${ROOTS.DASHBOARD}/domain`,
    settings: `${ROOTS.DASHBOARD}/settings`,
    settingsTab: (tab: string) => `${ROOTS.DASHBOARD}/settings/${tab}`,
    community: `${ROOTS.DASHBOARD}/community`,
    // Omnichannel
    omni: {
      root: `${ROOTS.DASHBOARD}/omni`,
      chat: `${ROOTS.DASHBOARD}/omni/chat`,
      automation: `${ROOTS.DASHBOARD}/omni/automation`,
      automation_flow: (id: string) => `${ROOTS.DASHBOARD}/omni/automation/${id}/flow`,
      marketing: `${ROOTS.DASHBOARD}/omni/marketing`,
      marketing_create: `${ROOTS.DASHBOARD}/omni/marketing/create`,
      marketing_details: (id: string) => `${ROOTS.DASHBOARD}/omni/marketing/${id}`,
      channels: `${ROOTS.DASHBOARD}/omni/channels`,
      webhook_list: `${ROOTS.DASHBOARD}/omni/webhooks`,
      webhook_logs: (id: string) => `${ROOTS.DASHBOARD}/omni/webhooks/${id}/logs`,
    },
  },
  public: {
    login: '/login',
    loginContact: (organizationId: string, location: string) =>
      `/login-contact/${organizationId}/${location}`,
    loginLink: (contactTypeId: string, assignerId: string) => `/login/${contactTypeId}/${assignerId}`,
    loginCode: '/login-code',
    register: '/register',
    registerOrganization: (organizationId: string) => `/register/org/${organizationId}`,
    signupInvitation: (email: string, organizationId: string) => `/signup/${email}/${organizationId}`,
    registerContact: (
      contactTypeId: string,
      assignerId: string,
      contactId: string,
      organizationId: string
    ) => `/register/${contactTypeId}/${assignerId}/${contactId}/${organizationId}`,
    selfRegister: (organizationId: string, assignerId: string, contactTypeId: string) =>
      `/reg/${organizationId}/${assignerId}/${contactTypeId}`,
    forgotPassword: '/forgot-password',
    verifyEmail: (id: string) => `/verify/${id}`,
    checkout: (slug: string) => `/checkout/${slug}`,
    qrPay: (slug: string) => `/qrpay/${slug}`,
    previewForm: (formId: string, formPageId: string) => `/preview/form/${formId}/${formPageId}`,
    onboarding: '/onboarding',
    verified: '/verified',
    notifications: '/notifications',
    mobileSettings: '/mobile-settings',
    mobileMenu: '/menu',
    uberEatsCallback: '/integrations/uber-eats/callback',
    booking: (link: string) => `/booking/${link}`,
    bookingLanding: (link: string) => `/booking-details/landing/${link}`,
    documentPreview: (hashcode: string) => `/document/preview/${hashcode}`,
    documentEmailLink: (hashcode: string) => `/document/email-link/${hashcode}`,
    formPreview: (id: string, path: string) => `/form-preview/${id}&path=${path}`,
    formSubmitted: (id: string) => `/form-preview/submitted/${id}`,
    webBuilderPreview: (websiteId: string, pageSlug?: string) =>
      pageSlug ? `/webbuilder/preview/${websiteId}/${pageSlug}` : `/webbuilder/preview/${websiteId}`,
    receipt: (id: string) => `/reciept/${id}`,
    invoicePreview: (id: string) => `/invoice-preview/${id}`,
    invoicePrint: (id: string) => `/invoice/print/${id}`,
    invoicePayment: (id: string) => `/payment/invoice/${id}`,
    invoicePaymentConfirm: (id: string) => `/payment-confirm/invoice/${id}`,
    shareBoard: (workspaceId: string, boardId: string) => `/share-board/${workspaceId}/${boardId}`,
    helpCenter: '/help-center',
    helpCenterArticle: (id: string) => `/help-center/article/${id}`,
    shop: (shopPath: string, contactId?: string) =>
      contactId ? `/shop/${shopPath}/${contactId}` : `/shop/${shopPath}`,
    products: (shopPath: string, contactId?: string) =>
      contactId ? `/products/${shopPath}/${contactId}` : `/products/${shopPath}`,
    memberships: (shopPath: string, contactId?: string) =>
      contactId ? `/memberships/${shopPath}/${contactId}` : `/memberships/${shopPath}`,
    courses: (shopPath: string, contactId?: string) =>
      contactId ? `/courses/${shopPath}/${contactId}` : `/courses/${shopPath}`,
    shopById: (shopId: string, contactId?: string) =>
      contactId ? `/shop-by-id/${shopId}/${contactId}` : `/shop-by-id/${shopId}`,
    productDetail: (shopPath: string, id: string) => `/shop/product/${shopPath}/${id}`,
    shopCheckout: (shopPath: string, cartId: string) => `/shop/${shopPath}/checkout/${cartId}`,
    onlineShop: (shopId: string, contactId?: string) =>
      contactId ? `/online-shop/${shopId}/${contactId}` : `/online-shop/${shopId}`,
    onlineShopProducts: (shopId: string) => `/online-shop/products/${shopId}`,
    onlineShopProductDetail: (shopId: string, productId: string) =>
      `/online-shop/product/${shopId}/${productId}`,
    onlineShopOrders: (shopId: string) => `/online-shop/${shopId}/orders`,
    onlineShopReceipt: (id: string, type?: string) =>
      type ? `/online-shop/receipt/${id}/${type}` : `/online-shop/receipt/${id}`,
    orderPayment: (orderId: string) => `/shop/order/${orderId}/pay`,
    shippingPayment: (orderId: string, incomeId: string) =>
      `/shop/order/${orderId}/pay-shipping/${incomeId}`,
    posNew: (shopId: string) => `/pos-new/${shopId}`,
    posNewSettings: (shopId: string) => `/pos-new/settings/${shopId}`,
    posNewOrders: (shopId: string) => `/pos-new/orders/${shopId}`,
    posNewKds: (shopId: string) => `/pos-new/kds/${shopId}`,
    posNewCfd: (shopId: string) => `/pos-new/cfd/${shopId}`,
    posNewKiosk: (shopId: string) => `/pos-new/kiosk/${shopId}`,
    posNewStockManager: (shopId: string) => `/pos-new/stock-manager/${shopId}`,
    posNewTables: '/pos-new/tables',
    tableJoinApprove: (orderId: string) => `/table/join-approve/${orderId}`,
    tableRegister: (orderId: string, roomId: string, table: string) =>
      `/register/${orderId}/${roomId}/${table}`,
    tableSide: (type: string, roomId: string, table: string, orderId: string) =>
      `/table/${type}/${roomId}/${table}/${orderId}`,
    deliver: (id: string) => `/deliver/${id}`,
    plans: '/plans',
    planSuccess: '/plans/success',
    planPayment: (planId: string, duration: string) => `/plans/${planId}/${duration}`,
    orgToken: (token: string) => `/token/${token}`,
    orgPaymentMethod: (token: string) => `/org-payment-method/${token}`,
    waiverSign: (id: string) => `/waiver/sign/${id}`,
    contactPaymentMethod: (ownerId: string, contactId: string) =>
      `/contact/payment-method/${ownerId}/${contactId}`,
    launchClockin: (contactTypeId: string) => `/launch-clockin/${contactTypeId}`,
  },
};

export type AppPaths = typeof paths;
