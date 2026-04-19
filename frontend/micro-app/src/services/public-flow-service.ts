import axiosInstance from 'src/utils/axios';

// ----------------------------------------------------------------------

export async function getCheckoutPagePublic(slug: string) {
  const response = await axiosInstance.get(`/api/checkout-page/public/${slug}`);
  return response.data?.data ?? response.data;
}

export async function getQrPayPagePublic(slug: string) {
  const response = await axiosInstance.get(`/api/qr-pay-page/public/${slug}`);
  return response.data?.data ?? response.data;
}

export async function trackQrPayPayment(slug: string, data: any) {
  const response = await axiosInstance.post(`/api/qr-pay-page/public/${slug}/track`, data);
  return response.data?.data ?? response.data;
}

export async function getPublicWaiver(id: string) {
  const response = await axiosInstance.get(`/api/contact-waiver/public/${id}`);
  return response.data?.data ?? response.data;
}

export async function signPublicWaiver(id: string, data: any) {
  const response = await axiosInstance.put(`/api/contact-waiver/public/sign/${id}`, data);
  return response.data?.data ?? response.data;
}

export async function generateContactPhoneVerification(data: any) {
  const response = await axiosInstance.post('/api/authenticate-contact/generate', data);
  return response.data?.data ?? response.data;
}

export const publicFlowService = {
  getCheckoutPagePublic,
  getQrPayPagePublic,
  trackQrPayPayment,
  getPublicWaiver,
  signPublicWaiver,
  generateContactPhoneVerification,
};
