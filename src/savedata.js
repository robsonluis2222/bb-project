import axios from 'axios'

export const server = axios.create({
  baseURL: 'https://pontosbb.x10.mx/data/savedata.php',
  timeout: 10000,
});