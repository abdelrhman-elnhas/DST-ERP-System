export interface Report {
    author: {
        id: number;
        name: string;
    }
    created_at: string;
    id: number;
    project: {
        id: number;
        name: string;
    }
    project_id: number;
    report_date: string;
    summary: string;
    updated_at: string;
    user_id: number;
    weather_conditions: string;
}


export interface ReportPagination {
    current_page: number;
    data: Report[];
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


export interface ReportResponse {
    status: boolean;
    message: string;
    data: ReportPagination;
}


export interface ReportRequest {
    project_id: number | null,
    summary: string,
    weather_conditions: string;
}