import api from '../lib/api';

export interface Post {
  id: string;
  title: string;
  content: string;
  authorId: string;
  authorName: string;
  authorAvatar?: string;
  category: string;
  likes: number;
  commentsCount: number;
  publishedAt: string;
  featuredImage?: string;
}

export interface Comment {
  id: string;
  content: string;
  authorName: string;
  createdAt: string;
}

export const communityService = {
  getPosts: async (query?: string) => {
    const response = await api.get<{ data: Post[] }>(`/v1/community/posts`, {
      params: { q: query }
    });
    return response.data;
  },
  
  getPostDetails: async (id: string) => {
    const response = await api.get<{ data: Post & { comments: Comment[] } }>(`/v1/community/posts/${id}`);
    return response.data;
  },
  
  createPost: async (data: Partial<Post>) => {
    const response = await api.post<{ data: Post }>(`/v1/community/posts`, data);
    return response.data;
  }
};
