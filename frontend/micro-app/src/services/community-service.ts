import axiosInstance from 'src/utils/axios';

// ----------------------------------------------------------------------

export async function getPosts() {
  const response = await axiosInstance.get('/api/community/v1/posts');
  return response.data;
}

export async function createPost(data: any) {
  const response = await axiosInstance.post('/api/community/v1/posts', data);
  return response.data;
}

export async function likePost(id: string) {
  const response = await axiosInstance.post(`/api/community/v1/posts/${id}/like`);
  return response.data;
}

export const communityService = {
  getPosts,
  createPost,
  likePost,
};
