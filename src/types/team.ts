
export interface Team {
    id: number;
    name: string;
    leader: {
        id: number;
        name: string;
    };
    leader_id: string;
    profiles: {
        department: string;
        job_title: string;
        phone: string;
        team_id: string;
        user: {
            id: number;
            name: string;
        };
        user_id: string;
    }[];
    status: string;
    created_at: string;
    updated_at: string;
}


// export interface TeamPagination {
//     current_page: number;
//     data: Team[];
//     first_page_url: string;
//     from: number;
//     last_page: number;
//     last_page_url: string;
//     next_page_url: string | null;
//     prev_page_url: string | null;
//     per_page: number;
//     to: number;
//     total: number;
// }


export interface TeamResponse {
    status: boolean;
    message: string;
    data: Team[];
}