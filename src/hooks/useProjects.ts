import { apiFetch } from "@/lib/api"
import { ProjectRequest } from "@/types/project"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

const projectsQueryKeys = {
    all: ['projects'] as const,
    list: (page: number) => ["projects", "list", page],
}

export const useProjects = (page: number) => {
    return useQuery({
        queryKey: projectsQueryKeys.list(page),
        queryFn: () => apiFetch(`projects?page=${page}`)
    })
}

export const useCreateProject = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: ProjectRequest) => apiFetch(`projects`, {
            method: "POST",
            body: JSON.stringify(data)
        }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: projectsQueryKeys.all });
        }
    })
}