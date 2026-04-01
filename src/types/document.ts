export interface DocumentVersion {
    id: number;
    document_id: number;
    version_number: string;
    file_path: string;
    uploaded_by: number;
    created_at: string;
    updated_at: string;
}

export interface Document {
    id: number;
    title: string;
    document_number: string;
    project_id: number;
    document_folder_id: number;
    created_by: number;
    created_at: string;
    updated_at: string;
    project: {
        id: number;
        name: string;
    };
    versions: DocumentVersion[];
}


export interface DocumentsPagination {
    current_page: number;
    data: Document[];
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


export interface DocumentsResponse {
    status: boolean;
    message: string;
    data: DocumentsPagination;
}

export interface CreateDocumentPayload {
    title: string;
    project_id: string;
    document_folder_id: string;
    file: File | null;
}

export interface UpdateDocumentVersionResponse {
    status: boolean;
    message: string;
    data: DocumentVersion;
}

