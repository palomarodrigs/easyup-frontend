import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://easyup-backend.onrender.com',
})
