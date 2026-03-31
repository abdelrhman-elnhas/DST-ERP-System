import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api";
import { TaskResponse, TaskStatus, TaskDetailResponse } from "@/types/task";



const taskKeys = {
    all: ["tasks"] as const,
    details: (id: number) => ["tasks", id] as const,
};



export function useTasks() {
    return useQuery<TaskResponse>({
        queryKey: taskKeys.all,
        queryFn: () => apiFetch("tasks"),
    });
}


export function useTaskDetails(id: number) {
    return useQuery<TaskDetailResponse>({
        queryKey: taskKeys.details(id),
        queryFn: () => apiFetch(`tasks/${id}`),
    });
}


export function useUpdateTask() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({
            id,
            status,
        }: {
            id: string;
            status: TaskStatus;
        }) =>
            apiFetch(`/tasks/${id}/status`, {
                method: "PATCH",
                body: JSON.stringify({ status }),
            }),

        // ⚡ optimistic update
        onMutate: async ({ id, status }) => {
            await queryClient.cancelQueries({ queryKey: taskKeys.all });

            const previousTasks =
                queryClient.getQueryData<TaskResponse>(taskKeys.all);

            queryClient.setQueryData<TaskResponse>(taskKeys.all, old => {
                if (!old) return old;

                return {
                    ...old,
                    data: {
                        ...old.data,
                        data: old.data.data.map(task =>
                            task.id === id ? { ...task, status } : task
                        )
                    }
                };
            });

            return { previousTasks };
        },

        onError: (_err, _vars, context) => {
            queryClient.setQueryData(
                taskKeys.all,
                context?.previousTasks
            );
        },

        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: taskKeys.all });
        },
    });
}