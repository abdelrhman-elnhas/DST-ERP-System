export type TaskStatus = "todo" | "in_progress" | "done" | "review";

export interface Task {
    id: string;
    title: string;
    status: TaskStatus;
    description: string;
    priority: string;
    assignee: TaskAssignee;
}

export interface TaskAssignee {
    id: number;
    name: string;
}

export interface TaskPagination {
    data: Task[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
}

export interface TaskResponse {
    status: boolean;
    message: string;
    data: TaskPagination;
}

export interface TaskDetailResponse {
    status: boolean;
    message: string;
    data: Task;
}