
export type MarketingCampaignStatus =
  | 'draft'
  | 'scheduled'
  | 'sending'
  | 'sent'
  | 'paused'
  | 'archived'
  | 'failed';

export type MarketingCampaignType = 'email' | 'sms' | 'broadcast' | 'multi_channel';

export interface MarketingCampaign {
  id: string;
  name: string;
  title?: string;
  type?: MarketingCampaignType;
  status?: MarketingCampaignStatus;
  active?: boolean;
  segmentId?: string;
  subject?: string;
  previewText?: string;
  content?: string;
  senderName?: string;
  senderEmail?: string;
  templateId?: string;
  scheduledAt?: string;
  sentAt?: string;
  createdAt?: string;
  updatedAt?: string;
  metrics?: {
    recipients?: number;
    delivered?: number;
    opened?: number;
    clicked?: number;
    bounced?: number;
    unsubscribed?: number;
    conversions?: number;
    revenue?: number;
  };
}

export interface MarketingSegment {
  id: string;
  name: string;
  description?: string;
  type: 'static' | 'dynamic';
  filters?: MarketingSegmentFilter[];
  contactCount?: number;
  createdAt?: string;
  updatedAt?: string;
}

export type MarketingSegmentFilter = {
  field: string;
  operator:
    | 'equals'
    | 'not_equals'
    | 'contains'
    | 'starts_with'
    | 'ends_with'
    | 'greater_than'
    | 'less_than'
    | 'between'
    | 'in'
    | 'not_in';
  value: unknown;
};

export type MarketingSegmentPreview = {
  count?: number;
  sampleContacts?: Array<{
    id: string;
    name?: string;
    email?: string;
    phone?: string;
    consentStatus?: string;
  }>;
};

export interface MarketingTemplate {
  id: string;
  name: string;
  type: 'email' | 'sms';
  category?: 'newsletter' | 'promotion' | 'follow_up' | 'announcement' | 'reactivation';
  subject?: string;
  previewText?: string;
  content?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface MarketingSummary {
  totalContacts?: number;
  activeCampaigns?: number;
  scheduledCampaigns?: number;
  sentCampaigns?: number;
  openRate?: number;
  clickRate?: number;
  conversionRate?: number;
  channelHealth?: 'healthy' | 'warning' | 'critical';
}

export interface CampaignAnalytics {
  delivered?: number;
  opened?: number;
  clicked?: number;
  bounced?: number;
  unsubscribed?: number;
  complained?: number;
  converted?: number;
  deliveryRate?: number;
  openRate?: number;
  clickRate?: number;
  unsubscribeRate?: number;
  bounceRate?: number;
  conversionCount?: number;
  recipients?: number;
}

export const hasNumber = (value: unknown): value is number =>
  typeof value === 'number' && Number.isFinite(value);

export const formatOptionalNumber = (value: unknown) =>
  hasNumber(value) ? value.toLocaleString() : 'Unavailable';

export const formatOptionalPercent = (numerator?: number, denominator?: number) => {
  if (!hasNumber(numerator) || !hasNumber(denominator) || denominator === 0) {
    return 'Unavailable';
  }
  return `${((numerator / denominator) * 100).toFixed(1)}%`;
};

export interface AutomationAction {
  id: string;
  type: 'email' | 'sms' | 'tag' | 'task' | 'wait' | 'webhook';
  config: any;
}

export interface AutomationTrigger {
  type: 'contact_created' | 'form_submitted' | 'order_placed' | 'booking_created' | 'invoice_overdue' | 'tag_added';
  config: any;
}

export interface AutomationWorkflow {
  id: string;
  name: string;
  description?: string;
  active: boolean;
  trigger: AutomationTrigger;
  actions: AutomationAction[];
  createdAt: string;
  updatedAt: string;
}
