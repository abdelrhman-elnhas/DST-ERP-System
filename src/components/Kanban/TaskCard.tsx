"use client";

import { useDraggable } from "@dnd-kit/core";
import { Task } from "@/types/task";
import { useModalStore } from "@/store/modalStore";
import { TaskDetailsModal } from "../Modals/TaskDetailsModal";
import { GripVertical, User, MessageSquare } from "lucide-react";

export default function TaskCard({ task }: { task: Task }) {
    const { attributes, listeners, setNodeRef, transform } =
        useDraggable({
            id: task.id,
        });


    const { openModal } = useModalStore();

    const style = transform
        ? {
            transform: `translate(${transform.x}px, ${transform.y}px)`,
        }
        : undefined;

    const getPriorityColor = (priority: string) => {
        switch (priority?.toLowerCase()) {
            case "high": return "bg-red-50 text-red-600 border-red-200";
            case "medium": return "bg-orange-50 text-orange-600 border-orange-200";
            case "low": return "bg-green-50 text-green-600 border-green-200";
            default: return "bg-gray-50 text-gray-600 border-gray-200";
        }
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...listeners}
            {...attributes}
            onClick={(e) => {
                e.stopPropagation();
                openModal(task.title, <TaskDetailsModal id={Number(task.id)} />);
            }}
            className="bg-white border border-gray-200 hover:border-primary/50 hover:shadow-md transition-all p-4 rounded-xl shadow-sm cursor-grab active:cursor-grabbing flex flex-col gap-3 group relative overflow-hidden"
        >
            <div className={`absolute top-0 left-0 w-full h-1 ${task.priority?.toLowerCase() === 'high' ? 'bg-red-500' : task.priority?.toLowerCase() === 'medium' ? 'bg-orange-400' : task.priority?.toLowerCase() === 'low' ? 'bg-green-400' : 'bg-gray-300'}`}></div>

            <div className="flex justify-between items-start gap-2 pt-1">
                <div className="flex flex-col gap-1.5 w-full">
                    <div className="flex justify-between items-center w-full">
                        <span className={`text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full border ${getPriorityColor(task.priority)}`}>
                            {task.priority || "Normal"}
                        </span>
                        <div className="text-gray-300 hover:text-gray-500 cursor-grab active:cursor-grabbing">
                            <GripVertical size={16} />
                        </div>
                    </div>
                    <h3 className="font-semibold text-gray-800 line-clamp-2 leading-snug group-hover:text-primary transition-colors pr-2 text-sm mt-1">
                        {task.title}
                    </h3>
                </div>
            </div>

            {task.description && (
                <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">{task.description}</p>
            )}

            <div className="flex justify-between items-center mt-2 pt-3 border-t border-gray-50">
                <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
                    <div className="h-6 w-6 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold border border-blue-200/50 shadow-sm">
                        {task.assignee?.name ? task.assignee.name.charAt(0).toUpperCase() : <User size={12} />}
                    </div>
                    <span className="truncate max-w-[120px]">{task.assignee?.name || "Unassigned"}</span>
                </div>

                <div className="flex items-center gap-2">
                    {task.description && <MessageSquare size={14} className="text-gray-400" />}
                    <span className="text-[10px] text-gray-400 font-mono font-medium">#{task.id}</span>
                </div>
            </div>
        </div>
    );
}