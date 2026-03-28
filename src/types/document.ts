export interface Document {
    id: number;
    title: string;
    description?: string;
    version: string;
    created_at: string;
    updated_at: string;
}

export interface CreateDocumentPayload {
    title: string;
    description?: string;
    version: string;
}

export interface UpdateDocumentVersionPayload {
    version: string;
}