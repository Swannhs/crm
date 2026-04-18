export interface IntegrationConnectionInput {
  provider: string;
  accessToken?: string;
  refreshToken?: string;
  expiresAt?: Date;
  tokenType?: string;
  scope?: string;
  accountId?: string;
  accountName?: string;
  metadata?: any;
}

export interface GoogleIntegrationInput {
  accessToken?: string;
  refreshToken?: string;
  expiresAt?: Date;
  isConnected?: boolean;
}

export interface ZoomIntegrationInput {
  accountId?: string;
  accessToken?: string;
  refreshToken?: string;
  expiresAt?: Date;
  webhookSecret?: string;
  isConnected?: boolean;
}

export interface ZoomMeetingInput {
  zoomId: string;
  topic: string;
  startTime: Date;
  duration?: number;
  joinUrl?: string;
  password?: string;
  status?: string;
}

export interface ShopifyStoreInput {
  shopDomain: string;
  accessToken?: string;
  scope?: string;
  isActive?: boolean;
}

export interface UberEatsConfigInput {
  storeId?: string;
  accessToken?: string;
  refreshToken?: string;
  isActive?: boolean;
}

export interface EasyPostConfigInput {
  apiKey?: string;
  isActive?: boolean;
}

export interface IntegrationActivityInput {
  provider: string;
  action: string;
  status?: string;
  details?: any;
}

export type IntegrationProvider = 
  | 'google' 
  | 'facebook' 
  | 'instagram' 
  | 'linkedin' 
  | 'tiktok' 
  | 'zoom' 
  | 'shopify' 
  | 'uber' 
  | 'uber-eats' 
  | 'easypost';