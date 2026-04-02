import { apiFetch } from "@/lib/api";
import { TeamResponse } from "@/types/team";
import { useQuery } from "@tanstack/react-query";

const teamQueryKeys = {
    all: ["team"] as const,
    list: (page: number) => ["team", "list", page] as const,

};


export function useTeam(page: number = 1) {
    return useQuery<TeamResponse>({
        queryKey: teamQueryKeys.list(page),
        queryFn: () => apiFetch(`teams?page=${page}`),
    });
}
