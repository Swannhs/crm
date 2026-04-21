export interface OmniBroadcastInput {
  name: string;
  provider: string;
  phonebookId?: string;
  message: string;
  mediaUrl?: string;
  status?: string;
  scheduledAt?: Date;
  metadata?: any;
}

export interface OmniBroadcastLogInput {
  broadcastId: string;
  contactId?: string;
  phone: string;
  status?: string;
  error?: string;
  metadata?: any;
  sentAt?: Date;
}
