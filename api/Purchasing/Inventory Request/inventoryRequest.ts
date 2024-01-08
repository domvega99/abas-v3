
import axios from 'axios';
import { Request } from '../../../types/purchasing/requestsType';
import { Requisition } from '../../../types/purchasing/requisitionType';
import { RequestItem } from '../../../types/purchasing/requestDetailType';
import { API_BASE_URL } from '../../../apiConfig';

interface ApiResponse {
  requests: {
    All: {
      data: Request[];
    };
    High: {
      data: Request[];
    };
    Emergency : {
      data: Request[];
    };
    Medium : {
      data: Request[];
    };
    Low : {
      data: Request[];
    };
  };
}


interface SingleResponse {
  status: string;
  requisition: Requisition;
  request_items: RequestItem[];
  request_attachments: any[]; 
}

interface RequestItemsResponse {
  request_items: RequestItem[];
}
const api = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});
export const fetchSingleRequests = async (id: string): Promise<RequestItem[] | null> => {
  try {
    const response = await api.get<SingleResponse>(`/purchasing-inventory-request/view/${id}`);
    const requestItems = response.data.request_items;
    console.log(requestItems);
    
    const simplifiedResponse: RequestItemsResponse = {
      request_items: requestItems,
    };
    return simplifiedResponse.request_items;
  } catch (error) {
    throw error;
  }
};

export const fetchRequests = async () => {
  try {
    const response = await api.get<ApiResponse>('/purchasing-inventory-requests/for-verification');
    console.log(response.data.requests);
    return response.data.requests;
  } catch (error) {
    throw error;
  }
};

export const fetchForApprovalRequests = async () => {
  try {
    const response = await api.get<ApiResponse>('/purchasing-inventory-requests/for-approval');
    console.log(response.data.requests);
    return response.data.requests;
  } catch (error) {
    throw error;
  }
};

export const fetchForItemCodingRequests = async () => {
  try {
    const response = await api.get<ApiResponse>('/purchasing-inventory-requests/for-item-coding');
    console.log(response.data.requests);
    return response.data.requests;
  } catch (error) {
    throw error;
  }
};

export const fetchForCanvassingRequests = async () => {
  try {
    const response = await api.get<ApiResponse>('/purchasing-inventory-requests/for-canvassing');
    console.log(response.data.requests);
    return response.data.requests;
  } catch (error) {
    throw error;
  }
};

export const fetchForCanvassApprovalRequests = async () => {
  try {
    const response = await api.get<ApiResponse>('/purchasing-inventory-requests/for-canvass-approval');
    console.log(response.data.requests);
    return response.data.requests;
  } catch (error) {
    throw error;
  }
};

export const fetchForPurchaseRequests = async () => {
  try {
    const response = await api.get<ApiResponse>('/purchasing-inventory-requests/for-purchase');
    console.log(response.data.requests);
    return response.data.requests;
  } catch (error) {
    throw error;
  }
};