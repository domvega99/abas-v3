export type Employee = {
    id: string;
    amount: number;
    status: 'pending' | 'processing' | 'success' | 'failed';
    email: string;
    remarks: string;
  };