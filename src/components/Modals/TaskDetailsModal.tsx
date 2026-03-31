"use client";

import { useModalStore } from "@/store/modalStore";
import { Button } from "../ui-elements/button";
import { Calendar, User, AlignLeft, Flag, CheckCircle2 } from "lucide-react";
import { useTaskDetails } from "@/hooks/useTasks";

export function TaskDetailsModal({ id }: { id: number }) {
    const showTask = useTaskDetails(id);
    const task = showTask?.data?.data;
    console.log("showTask", task);
    const { closeModal } = useModalStore();

    if (showTask.isLoading) {
        return (
            <div className="flex justify-center items-center p-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (showTask.isError || !task) {
        return (
            <div className="p-8 text-center">
                <p className="text-red-500 font-medium pb-4">Failed to load task details.</p>
                <Button onClick={closeModal} label="Close" className="rounded-lg border border-gray-200 px-6 py-2 bg-gray-50 text-sm font-medium hover:bg-gray-100" />
            </div>
        );
    }

    const getPriorityColor = (priority: string) => {
        switch (priority?.toLowerCase()) {
            case "high": return "bg-red-100 text-red-700 border-red-200";
            case "medium": return "bg-orange-100 text-orange-700 border-orange-200";
            case "low": return "bg-green-100 text-green-700 border-green-200";
            default: return "bg-gray-100 text-gray-700 border-gray-200";
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                        <CheckCircle2 size={16} className="text-gray-400" />
                        <h4 className="text-sm font-semibold text-gray-700">Status</h4>
                    </div>
                    <p className="text-sm text-gray-900 capitalize ml-6 font-medium bg-white px-3 py-1.5 border border-gray-200 rounded-md shadow-sm w-fit">
                        {task?.status}
                    </p>
                </div>

                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                        <Flag size={16} className="text-gray-400" />
                        <h4 className="text-sm font-semibold text-gray-700">Priority</h4>
                    </div>
                    <p className={`text-sm capitalize ml-6 font-medium px-3 py-1.5 border rounded-md shadow-sm w-fit ${getPriorityColor(task.priority)}`}>
                        {task.priority || "Normal"}
                    </p>
                </div>
            </div>

            <div>
                <div className="flex items-center gap-2 mb-2">
                    <AlignLeft size={18} className="text-gray-500" />
                    <h4 className="text-base font-semibold text-gray-800">Description</h4>
                </div>
                <div className="ml-6 p-4 bg-white border border-gray-100 rounded-lg shadow-sm text-sm text-gray-600 min-h-[100px] whitespace-pre-wrap">
                    {task.description || "No description provided for this task."}
                </div>
            </div>

            <div>
                <div className="flex items-center gap-2 mb-2">
                    <User size={18} className="text-gray-500" />
                    <h4 className="text-base font-semibold text-gray-800">Assignee</h4>
                </div>
                <div className="ml-6 flex items-center gap-3 bg-white p-3 border border-gray-100 rounded-lg shadow-sm w-fit pr-6">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold border border-blue-200 text-lg">
                        {task.assignee?.name ? task.assignee.name.charAt(0).toUpperCase() : "?"}
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-semibold text-gray-800">{task.assignee?.name || "Unassigned"}</span>
                        <span className="text-xs text-gray-500">Developer</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
                <Button
                    onClick={closeModal}
                    className="rounded-lg border border-gray-200 bg-white px-6 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50 focus:ring-2 focus:ring-gray-200"
                    label="Close"
                />
            </div>
        </div>
    );
}
