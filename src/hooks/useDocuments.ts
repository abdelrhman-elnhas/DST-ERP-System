'use client'
import { apiFetch } from "@/lib/api"
import { CreateDocumentPayload, DocumentsResponse, DocumentVersion, UpdateDocumentVersionResponse } from "@/types/document";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"



export const documentQueryKeys = {
    all: ["documents"] as const,
    list: (page: number) => ["documents", "list", page] as const,
    detail: (id: number) => ["documents", id] as const,
}


// --------------------------GET All Documents--------------------------
export function useDocuments(page: number = 1) {
    return useQuery<DocumentsResponse>({
        queryKey: documentQueryKeys.list(page),
        queryFn: () => apiFetch(`dcs/documents?page=${page}`)
    })
}

// --------------------------POST A Document--------------------------
export function useCreateDocument() {

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (payload: CreateDocumentPayload) => apiFetch('dcs/documents/', {
            method: "POST",
            body: JSON.stringify(payload)
        }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: documentQueryKeys.all });
        }
    })
}

// --------------------------Delete A Document--------------------------
export function useDeleteDocument() {

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: number) => apiFetch(`dcs/documents/${id}`, {
            method: "DELETE",
        }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: documentQueryKeys.all });
        }
    })
}


// --------------------------Update A Document Version--------------------------
export function useUpdateDocumentVersion() {

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, file }: { id: number; file: string; }) =>
            apiFetch(`dcs/documents/${id}/version`,
                {
                    method: "POST",
                    body: JSON.stringify(file),
                }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: documentQueryKeys.all });
        }
    })
}