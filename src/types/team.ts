
export interface Team {
    id: number;
    name: string;
    email: string;
    role: string;
    status: string;
    created_at: string;
    updated_at: string;
}


export interface TeamPagination {
    current_page: number;
    data: Team[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    next_page_url: string | null;
    prev_page_url: string | null;
    per_page: number;
    to: number;
    total: number;
}


export interface TeamResponse {
    status: boolean;
    message: string;
    data: TeamPagination;
}