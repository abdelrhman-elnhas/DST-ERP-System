"use client";

import { useDroppable } from "@dnd-kit/core";
import TaskCard from "@/components/Kanban/TaskCard";
import { Task } from "@/types/task";

export default function Column({
    id,
    tasks,
}: {
    id: string;
    tasks: Task[];
}) {
    const { setNodeRef } = useDroppable({ id });

    return (
        <div
            ref={setNodeRef}
            className="bg-white p-4 rounded-xl min-h-[400px]"
        >
            <h2 className="font-bold mb-4 capitalize">
                {id.replace("_", " ")}
            </h2>

            <div className="space-y-3">
                {tasks.map(task => (
                    <TaskCard key={task.id} task={task} />
                ))}
            </div>
        </div>
    );
}