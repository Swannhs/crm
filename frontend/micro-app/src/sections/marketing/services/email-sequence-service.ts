import axios, { endpoints } from 'src/utils/axios';

export type SequenceStep = {
  stepNumber: number;
  type: 'email' | 'task' | 'wait';
  delayDays: number;
  templateId?: string;
};

export type EmailSequence = {
  id: string;
  name: string;
  description?: string;
  isActive: boolean;
  steps: SequenceStep[];
  totalDuration: number;
  enrollmentCount: number;
};

const unwrap = <T>(response: any): T => response?.data?.data as T;

export const emailSequenceService = {
  list: async (): Promise<EmailSequence[]> => unwrap(await axios.get(endpoints.email.sequences)),
  get: async (id: string): Promise<EmailSequence> => unwrap(await axios.get(`${endpoints.email.sequences}/${id}`)),
  create: async (payload: Partial<EmailSequence>): Promise<EmailSequence> => unwrap(await axios.post(endpoints.email.sequences, payload)),
  update: async (id: string, payload: Partial<EmailSequence>): Promise<EmailSequence> => unwrap(await axios.patch(`${endpoints.email.sequences}/${id}`, payload)),
  remove: async (id: string): Promise<{ deleted: boolean }> => unwrap(await axios.delete(`${endpoints.email.sequences}/${id}`)),
  enroll: async (id: string, payload: any) => unwrap(await axios.post(`${endpoints.email.sequences}/${id}/enroll`, payload)),
  listEnrollments: async (id: string) => unwrap(await axios.get(`${endpoints.email.sequences}/${id}/enrollments`)),
  getEnrollment: async (id: string) => unwrap(await axios.get(`${endpoints.email.sequences}/enrollments/${id}`)),
  pauseEnrollment: async (id: string) => unwrap(await axios.post(`${endpoints.email.sequences}/enrollments/${id}/pause`)),
  resumeEnrollment: async (id: string) => unwrap(await axios.post(`${endpoints.email.sequences}/enrollments/${id}/resume`)),
  cancelEnrollment: async (id: string) => unwrap(await axios.post(`${endpoints.email.sequences}/enrollments/${id}/cancel`)),
};
