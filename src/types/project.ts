
export interface Project {
    id: number;
    name: string;
    category: {
        id: number;
        name: string;
    };
    client: {
        id: number;
        name: string;
    };
    description: string;
    start_date: string;
    end_date: string;
    status: string;
    project_id: number;
    project_category_id: number;
    created_by: number;
    created_at: string;
    updated_at: string;
}


export interface ProjectPagination {
    current_page: number;
    data: Project[];
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


export interface ProjectResponse {
    status: boolean;
    message: string;
    data: ProjectPagination;
}

export interface ProjectRequest {
    name: string,
    client_id: number | null,
    project_category_id: number | null,
    start_date: string,
    status: string
}