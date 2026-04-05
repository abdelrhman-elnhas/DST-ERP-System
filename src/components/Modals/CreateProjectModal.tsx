"use client";

import { useState } from "react";
import { useModalStore } from "@/store/modalStore";
import InputGroup from "../FormElements/InputGroup";
import { Button } from "../ui-elements/button";

import { useCreateProject } from "@/hooks/useProjects";
import { ProjectRequest } from "@/types/project";
import { Select } from "../FormElements/select";
import { CheckIcon } from "@/assets/icons";
import DatePickerOne from "../FormElements/DatePicker/DatePickerOne";

export function CreateProjectModal() {
    const createProject = useCreateProject();
    const { closeModal } = useModalStore();
    const [form, setForm] = useState<ProjectRequest>({
        name: "",
        client_id: null,
        project_category_id: null,
        start_date: "",
        status: "",
    });


    const [error, setError] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        try {
            await createProject.mutateAsync(form);
            closeModal();
        } catch (err: any) {
            setError(err.message ?? "Something went wrong");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
                <div>
                    <InputGroup
                        type="text"
                        name="name"
                        value={form.name}
                        handleChange={handleChange}
                        placeholder="Enter project name"
                        label="Project Name"
                        required
                        className="w-full rounded-lg border border-stroke bg-transparent px-4 py-3 text-dark outline-none transition focus:border-primary dark:border-dark-3 dark:text-white"
                    />
                </div>
                <div>
                    <InputGroup
                        type="text"
                        name="client_id"
                        value={form.client_id ?? ""}
                        handleChange={handleChange}
                        placeholder="Enter client ID"
                        label="Client ID"
                        required
                        className="w-full rounded-lg border border-stroke bg-transparent px-4 py-3 text-dark outline-none transition focus:border-primary dark:border-dark-3 dark:text-white"
                    />
                </div>
                <div>
                    <InputGroup
                        type="text"
                        name="project_category_id"
                        value={form.project_category_id ?? ""}
                        handleChange={handleChange}
                        placeholder="Enter project category ID"
                        label="Project Category ID"
                        required
                        className="w-full rounded-lg border border-stroke bg-transparent px-4 py-3 text-dark outline-none transition focus:border-primary dark:border-dark-3 dark:text-white"
                    />
                </div>

                <div className="w-full rounded-lg border border-stroke bg-transparent px-4 py-3 text-dark outline-none transition focus:border-primary dark:border-dark-3 dark:text-white">
                    <DatePickerOne
                        label="Start Date"
                        value={form.start_date}
                        onChange={(date) => setForm({ ...form, start_date: date })}
                    />
                </div>

                <Select
                    label="Project Status"
                    name="status"
                    className="w-full rounded-lg border border-stroke bg-transparent px-4 py-3 text-dark outline-none transition focus:border-primary dark:border-dark-3 dark:text-white"
                    items={[
                        { label: "Select Status", value: "", disabled: true },
                        { label: "Active", value: "active" },
                        { label: "On Hold", value: "on_hold" },
                        { label: "Pending", value: "pending" },
                        { label: "Completed", value: "completed" },
                    ]}
                    value={form.status}
                    onChange={handleChange}
                    defaultValue=""
                    prefixIcon={<CheckIcon />}
                />



                {error && (
                    <p className="rounded-lg bg-red-light-6 px-4 py-3 text-body-sm text-red dark:bg-red-light-6/10">
                        {error}
                    </p>
                )}
            </div>

            <div className="flex items-center justify-end gap-3 pt-6 border-t border-stroke dark:border-dark-3">
                <Button
                    type="button"
                    onClick={closeModal}
                    variant="outlineDark"
                    className="px-5 py-2.5 text-sm font-medium"
                    label="Cancel"
                />
                <Button
                    type="submit"
                    className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-opacity-70 disabled:opacity-65"
                    disabled={createProject.isPending}
                    label={createProject.isPending ? "Creating..." : "Create Project"}
                />
            </div>
        </form >
    );
}
