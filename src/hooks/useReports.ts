import { apiFetch } from "@/lib/api"
import { ReportRequest } from "@/types/report"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

export const reportQueryKeys = {
    all: ["reports"] as const,
    list: () => [...reportQueryKeys.all, "list"] as const,
    detail: (id: string) => [...reportQueryKeys.all, "detail", id] as const,
}

export const useReports = (page: number) => {
    return useQuery({
        queryKey: reportQueryKeys.list(),
        queryFn: () => apiFetch(`field-ops/reports?page=${page}`),
    })
}

export const useCreateReport = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: ReportRequest) => apiFetch(`field-ops/reports`, {
            method: "POST",
            body: JSON.stringify(data),
        }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: reportQueryKeys.all });
        }

    })
}

