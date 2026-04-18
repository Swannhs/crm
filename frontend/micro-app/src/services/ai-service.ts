import axiosInstance from 'src/utils/axios';

// ----------------------------------------------------------------------

export async function sendAIPrompt(prompt: string, type: string = 'generate_dynamic_report') {
  const response = await axiosInstance.post('/api/ai/v1/prompt', { prompt, type });
  return response.data;
}

export const aiService = {
  sendAIPrompt,
};
