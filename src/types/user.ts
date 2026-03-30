export interface User {
    id: number;
    name: string;
    email: string;
    is_active: number;
}

export interface UserResponse {
    user: User;
    message: string;
    status: string;
}