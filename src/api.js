import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://pontosbb.x10.mx/uploadimg.php',
  timeout: 10000,
});