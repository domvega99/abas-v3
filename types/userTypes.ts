export type User = {
    id: string;
    username: string;
    email: string;
    // amount: number;
    // status: 'pending' | 'processing' | 'success' | 'failed';
    // remarks: string;
    // password: string;
    first_name: string;
    middle_name: string;
    last_name: string;
    role: string;
    created: string;
    created_by: number;
    modified: string;
    modified_by: number;
    stat: number;
    user_location: string;
    picture: string;
    vessel_id: number;
    notification_timeout: number;
    signature: string;
    password_reset: string;
    require_reset: number;
    eportal_user: string;
    hide_bulletin: number;
  };