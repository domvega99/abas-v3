
import axios from 'axios';
import { User } from '../../types/userTypes';
import { API_BASE_URL } from '../../apiConfig';

const api = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchUsers = async () => {
  try {
    const response = await api.get<{ users: User[] }>('/users');
    return response.data.users;
  } catch (error) {
    throw error;
  }
};