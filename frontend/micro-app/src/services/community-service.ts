import axiosInstance from 'src/utils/axios';

// ----------------------------------------------------------------------

export async function getPosts() {
  const response = await axiosInstance.get('/api/community/posts');
  return response.data;
}

export async function createPost(data: any) {
  const response = await axiosInstance.post('/api/community/posts', data);
  return response.data;
}

export async function likePost(id: string) {
  const response = await axiosInstance.post(`/api/community/posts/${id}/like`);
  return response.data;
}

export const communityService = {
  getPosts,
  createPost,
  likePost,
};
