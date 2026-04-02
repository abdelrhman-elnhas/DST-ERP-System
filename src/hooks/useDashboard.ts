import { apiFetch } from "@/lib/api";
import { Dashboard } from "@/types/dashboard";
import { useQuery } from "@tanstack/react-query";

const dashboardQueryKeys = {
    all: ["dashboard"] as const
}

export function useDashboard() {
    return useQuery<Dashboard>({
        queryKey: dashboardQueryKeys.all,
        queryFn: () => apiFetch(`dashboard/stats`),
    });
}