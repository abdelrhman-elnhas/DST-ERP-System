export interface Dashboard {
    status: string;
    message: string;
    data: {
        stats: Stats;
        task_distribution: TaskDistribution;
        recent_projects: RecentProjects[];
        recent_field_points: RecentFieldPoints[];
        weekly_activity: WeeklyActivity[];
    }
}

export interface Stats {
    total_projects: number;
    total_tasks: number;
    total_gis_points: number;
    assets_in_use: number;
    pending_tasks: number;
}

export interface TaskDistribution {
    done: number;
    in_progress: number;
    review: number;
    todo: number;
}

export interface RecentProjects {
    id: number;
    name: string;
    description: string;
    status: string;
    start_date: string;
    end_date: string;
    client_id: number;
    client: {
        id: number;
        name: string;
    }
    project_category_id: number;
    boundary: string;
    created_at: string;
    updated_at: string;
}

export interface RecentFieldPoints {
    created_at: string;
    id: number;
    lat: number;
    lng: number;
    sample_type: string;
}

export interface WeeklyActivity {
    sales: string;
    revenue: string;
}