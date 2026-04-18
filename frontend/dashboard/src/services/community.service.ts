import api from '../lib/api';

export interface Post {
  id: string;
  orgId: string;
  userId: string;
  contactId?: string;
  groupId?: string;
  text: string;
  postColor?: string;
  attachments: string[];
  likesCount: number;
  totalLikes?: number;
  commentsCount?: number;
  createdAt: string;
  user?: Array<{
    firstName?: string;
    lastName?: string;
    avatar?: string;
  }>;
  contact?: Array<{
    fullName?: string;
    photo?: string;
  }>;
}

export interface Comment {
  id: string;
  postId: string;
  userId: string;
  contactId?: string;
  text: string;
  createdAt: string;
}

export const communityService = {
  getPosts: async (query?: string) => {
    const response = await api.get<{ data: Post[] }>(`/community/posts`, {
      params: { q: query }
    });
    return response.data;
  },
  
  getPostDetails: async (id: string) => {
    const response = await api.get<{ data: Post }>(`/community/posts/${id}`);
    return response.data;
  },
  
  createPost: async (data: Partial<Post>) => {
    const response = await api.post<{ data: Post }>(`/community/posts`, data);
    return response.data;
  }
};
