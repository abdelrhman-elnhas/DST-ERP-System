"use client";

import {
    DndContext,
    DragEndEvent,
    PointerSensor,
    useSensor,
    useSensors,
} from "@dnd-kit/core";
import { useTasks } from "@/hooks/useTasks";
import { useUpdateTask } from "@/hooks/useTasks";
import Column from "./Column";
import { Task, TaskStatus } from "@/types/task";

const columns: TaskStatus[] = [
    "todo",
    "in_progress",
    "review",
    "done"
];

export default function KanbanBoard() {
    const { data: tasksResponse, isLoading } = useTasks();
    const tasksData = tasksResponse?.data?.data || [];
    const updateTask = useUpdateTask();

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 5,
            },
        })
    );

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (!over) return;

        const taskId = active.id as string;
        const newStatus = over.id as TaskStatus;

        const task = tasksData.find((t: Task) => t.id === taskId || Number(t.id) === Number(taskId));
        if (task && task.status === newStatus) {
            return;
        }

        updateTask.mutate({
            id: taskId,
            status: newStatus,
        });
    };

    return (
        <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
            <div className="grid grid-cols-4 gap-4">
                {tasksData && columns.map(status => (
                    <Column
                        key={status}
                        id={status}
                        tasks={tasksData?.filter((t: Task) => t.status === status)}
                    />
                ))}
            </div>
        </DndContext>
    );
}