export interface AutomationInput {
  automationName?: string;
  contactInfo?: {
    selectType?: "SmartList" | "Contacts" | "";
    contactType?: string[];
    tags?: string[];
    leadSources?: string[];
    smartList?: string[];
  };
  activationUpon?: {
    uponType?: "Upon Entry" | "Criteria Met" | "Contact Move" | "";
    criteria?: {
      criteriaType?: string;
      retentionRatingType?: string;
      retentionRatingDay?: number;
    };
    contactMove?: {
      from?: string;
      to?: string;
    };
  };
  activateTime?: {
    isImmediately?: boolean;
    time?: number;
    type?: "Before" | "After" | "On" | "";
    unit?: "minutes" | "hours" | "days" | "weeks" | "months" | "";
  };
  userEmail?: string;
  userPhone?: string;
  userName?: string;
}

export interface WorkflowInput {
  userId?: string;
  organizationId?: string;
  workspaceId: string;
  title: string;
  description?: string;
  status?: "Draft" | "Active" | "Paused" | "Crashed" | "Initiated";
  verticalFlow?: boolean;
  creatorType?: string;
  isForSystemNotification?: boolean;
  isForUserNotification?: boolean;
  isForClientNotification?: boolean;
  isCopyFromSystemNotification?: boolean;
  parentWorkflowId?: string;
}

export interface WorkflowNodeInput {
  userId?: string;
  organizationId?: string;
  workflowId: string;
  key?: string;
  data?: any;
  type: string;
  source?: string[];
  height?: number;
  width?: number;
  position?: { x: number; y: number };
  positionAbsolute?: { x: number; y: number };
  sourcePosition?: string;
  targetPosition?: string;
}

export interface WorkflowWorkspaceInput {
  userId?: string;
  organizationId?: string;
  name: string;
  description?: string;
}

export interface WorkflowStartActionInput {
  userId?: string;
  organizationId?: string;
  workflowId: string;
  actionType?: string;
  duration?: {
    time?: number;
    unit?: string;
  };
  parentId?: string;
  setCustomTime?: boolean;
  useSubscriberTimeZone?: boolean;
  customTime?: {
    days?: string[];
    time?: number;
  };
  subject?: string;
  content?: string;
  template?: any;
  attachments?: any[];
  condition?: string;
  confirmProgress?: {
    isPercentConfirm?: boolean;
    percentage?: number;
  };
  notificationTo?: {
    type?: "ME" | "CONTACT" | "";
    contact?: string[];
    method?: "TEXT" | "EMAIL" | "TOOLBAR" | "";
  };
  taskContent?: {
    title?: string;
    workspaceId?: string;
    statusId?: string;
    labels?: Array<{ value: string; label: string; color: string }>;
    description?: string;
    coverImage?: string;
    dueDate?: Date;
  };
  isStart?: boolean;
  isLast?: boolean;
  isCondition?: boolean;
  isException?: boolean;
}