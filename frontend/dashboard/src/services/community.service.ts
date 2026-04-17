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
  createdAt: string;
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
    const response = await api.get<{ data: Post[] }>(`/api/community/posts`, {
      params: { q: query }
    });
    return response.data;
  },
  
  getPostDetails: async (id: string) => {
    // Note: Backend might return comments separately. 
    // If not, we'll fetch them in parallel if needed.
    const response = await api.get<{ data: Post }>(`/api/community/posts/${id}`);
    return response.data;
  },
  
  createPost: async (data: Partial<Post>) => {
    const response = await api.post<{ data: Post }>(`/api/community/posts`, data);
    return response.data;
  }
};

