import axiosInstance from 'src/utils/axios';

// ----------------------------------------------------------------------

export async function getContacts() {
  const response = await axiosInstance.get('/api/chat/v1/contacts');
  return response.data;
}

export async function getMessages(contactId: string) {
  const response = await axiosInstance.get(`/api/chat/v1/messages/${contactId}`);
  return response.data;
}

export async function sendMessage(contactId: string, content: string) {
  const response = await axiosInstance.post('/api/chat/v1/messages', { contactId, content });
  return response.data;
}

export const chatService = {
  getContacts,
  getMessages,
  sendMessage,
};
