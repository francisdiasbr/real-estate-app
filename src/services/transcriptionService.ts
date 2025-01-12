import axios from 'axios';
import { OPENAI_API_KEY } from '@env';

const WHISPER_API_URL = 'https://api.openai.com/v1/audio/transcriptions';

export const transcribeAudio = async (uri: string): Promise<string> => {
  const formData = new FormData();
  
  formData.append('file', {
    uri,
    type: 'audio/m4a',
    name: 'audio.m4a',
  } as any);
  
  formData.append('model', 'whisper-1');
  formData.append('language', 'pt');
  formData.append('response_format', 'json');

  try {
    const response = await axios.post(WHISPER_API_URL, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
      },
    });
    
    console.log('Resposta da API:', response.data);
    return response.data.text;
  } catch (error: any) {
    console.error('Erro detalhado:', error.response?.data || error.message);
    throw error;
  }
}; 