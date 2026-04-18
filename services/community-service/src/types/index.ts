export interface IPost {
  id: string;
  orgId: string;
  userId: string;
  contactId?: string | null;
  groupId?: string | null;
  text: string;
  postColor?: string | null;
  attachments: any[];
  likesCount: number;
  isDeleted: boolean;
}

export interface IComment {
  id: string;
  postId: string;
  orgId: string;
  userId: string;
  contactId?: string | null;
  text: string;
  isDeleted: boolean;
}

export interface IGroup {
  id: string;
  orgId: string;
  createdBy: string;
  name: string;
  description?: string | null;
  coverImage?: string | null;
  privacy: 'public' | 'private';
  isDeleted: boolean;
}

export interface IBadge {
  id: string;
  orgId: string;
  name: string;
  description?: string | null;
  icon?: string | null;
  points: number;
}

export interface ICommunityEvent {
  id: string;
  orgId: string;
  createdBy: string;
  title: string;
  description?: string | null;
  startDate: Date;
  endDate?: Date | null;
  location?: string | null;
  coverImage?: string | null;
  isDeleted: boolean;
}
