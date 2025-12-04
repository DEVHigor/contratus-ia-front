import axios from 'axios';
import { env } from '$env/dynamic/public';

const UPLOAD_API_URL = 'https://contratus-ia-back.onrender.com';

console.log('Upload API URL configurada para:', UPLOAD_API_URL);

// Configurar o axios
const uploadApi = axios.create({
  baseURL: UPLOAD_API_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
  // Aumentar o timeout para evitar falhas rápidas
  timeout: 10000
});

export interface UploadResponse {
  success: boolean;
  message: string;
  arquivo?: string;
}

export default uploadApi;
