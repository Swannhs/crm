import axiosInstance from 'src/utils/axios';

// ----------------------------------------------------------------------

export async function getContacts() {
  const response = await axiosInstance.get('/api/odoo/contacts', {
    params: { page: 1, pageSize: 200, search: '' },
  });
  const contacts = Array.isArray(response.data)
    ? response.data
    : Array.isArray(response.data?.data)
      ? response.data.data
      : Array.isArray(response.data?.contacts)
        ? response.data.contacts
        : [];

  return contacts.map((contact: any) => ({
    id: contact.id || contact._id,
    fullName:
      contact.fullName ||
      contact.name ||
      [contact.firstName, contact.lastName].filter(Boolean).join(' ') ||
      contact.email ||
      'Unknown contact',
    email: contact.email || null,
    phone: contact.phone || contact.mobile || null,
    avatar: contact.photo || contact.avatar || null,
    channelId: null,
    lastMessage: null,
  }));
}

export async function getMessages(channelId: string) {
  if (!channelId) return [];
  const response = await axiosInstance.get(`/api/livechat/chathistory/${channelId}`);
  const messages = Array.isArray(response.data?.data) ? response.data.data : [];

  return messages
    .slice()
    .reverse()
    .map((message: any) => ({
      ...message,
      id: message.id,
    }));
}

export async function sendMessage(channelId: string, content: string) {
  if (!channelId) {
    throw new Error('Chat channel is not available for this contact yet');
  }
  const response = await axiosInstance.post('/api/livechat/newmessage', { channelId, content });
  return response.data?.data ?? response.data;
}

export const chatService = {
  getContacts,
  getMessages,
  sendMessage,
};
