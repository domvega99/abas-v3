
import axios from 'axios';
import { Company } from '../../types/mastertable/company';
import { API_BASE_URL } from '../../apiConfig';

const api = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchCompanies = async () => {
  try {
    const response = await api.get<{ companies: Company[] }>('/master-companies');
    return response.data.companies;
  } catch (error) {
    throw error;
  }
};