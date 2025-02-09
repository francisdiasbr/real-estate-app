import axios from 'axios';
import { OPENAI_API_KEY } from '@env';

const WHISPER_API_URL = 'https://api.openai.com/v1/audio/transcriptions';

export const transcribeAudio = async (uri: string) => {
  try {
    console.log('Iniciando transcrição do arquivo:', uri);
    console.log('OPENAI_API_KEY existe?', !!OPENAI_API_KEY);

    const formData = new FormData();
    
    // Log do arquivo antes de anexar
    const fileData = {
      uri,
      type: 'audio/m4a',
      name: 'audio.m4a',
    };
    console.log('Dados do arquivo:', fileData);
    
    formData.append('file', fileData as any);
    formData.append('model', 'whisper-1');
    formData.append('language', 'pt');
    formData.append('response_format', 'json');

    console.log('Enviando requisição para OpenAI...');
    const response = await axios.post(WHISPER_API_URL, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
      },
    });
    
    console.log('Resposta da API:', response.data);
    return response.data.text;
  } catch (error: any) {
    console.error('Erro na transcrição. Detalhes:');
    console.error('Status:', error.response?.status);
    console.error('Mensagem:', error.response?.data || error.message);
    console.error('Headers:', error.response?.headers);
    
    if (!OPENAI_API_KEY) {
      console.error('OPENAI_API_KEY não está definida!');
    }
    
    throw new Error(`Erro na transcrição: ${error.response?.data?.error?.message || error.message}`);
  }
}; 