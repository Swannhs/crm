
export type MarketingCampaignStatus = 'draft' | 'scheduled' | 'sending' | 'sent' | 'failed';

export type MarketingCampaignType = 'email' | 'sms' | 'broadcast' | 'multi-channel';

export interface MarketingCampaign {
  id: string;
  name: string;
  type: MarketingCampaignType;
  status: MarketingCampaignStatus;
  segmentId?: string;
  subject?: string;
  previewText?: string;
  content?: string;
  sender?: string;
  scheduleTime?: string;
  createdAt: string;
  updatedAt: string;
}

export interface MarketingSegment {
  id: string;
  name: string;
  description?: string;
  type: 'static' | 'dynamic';
  filters?: any;
  contactCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface MarketingTemplate {
  id: string;
  name: string;
  category: 'newsletter' | 'promotion' | 'follow-up' | 'announcement' | 'reactivation';
  content: string;
  previewImage?: string;
  createdAt: string;
  updatedAt: string;
}

export interface MarketingSummary {
  totalContacts: number;
  activeCampaigns: number;
  scheduledCampaigns: number;
  sentCampaigns: number;
  openRate: number;
  clickRate: number;
  conversionRate: number;
  channelHealth: 'healthy' | 'warning' | 'critical';
}

export interface CampaignAnalytics {
  delivered: number;
  opened: number;
  clicked: number;
  bounced: number;
  unsubscribed: number;
  complained: number;
  converted: number;
  deliveryRate: number;
  openRate: number;
  clickRate: number;
  unsubscribeRate: number;
  bounceRate: number;
  conversionCount: number;
}

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
