"use client";

import { useState } from "react";
import { useModalStore } from "@/store/modalStore";
import InputGroup from "../FormElements/InputGroup";
import { Button } from "../ui-elements/button";
import { useCreateReport } from "@/hooks/useReports";
import { ReportRequest } from "@/types/report";

export function CreateReportModal() {
    const createReport = useCreateReport();
    const { closeModal } = useModalStore();

    const [form, setForm] = useState<ReportRequest>({
        project_id: null,
        summary: "",
        weather_conditions: "",
    });

    const [error, setError] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        try {
            await createReport.mutateAsync(form);
            closeModal();
        } catch (err: any) {
            setError(err.message ?? "Something went wrong");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <InputGroup
                    type="text"
                    name="project_id"
                    value={form.project_id}
                    handleChange={handleChange}
                    placeholder="Enter project ID"
                    label="Project ID"
                    required
                    className="w-full rounded-lg border border-stroke bg-transparent px-4 py-3 text-dark outline-none transition focus:border-primary dark:border-dark-3 dark:text-white"
                />
            </div>
            <div>
                <InputGroup
                    type="text"
                    name="summary"
                    value={form.summary}
                    handleChange={handleChange}
                    placeholder="Enter summary"
                    label="Summary"
                    required
                    className="w-full rounded-lg border border-stroke bg-transparent px-4 py-3 text-dark outline-none transition focus:border-primary dark:border-dark-3 dark:text-white"
                />
            </div>
            <div>
                <InputGroup
                    type="text"
                    name="weather_conditions"
                    value={form.weather_conditions}
                    handleChange={handleChange}
                    placeholder="Enter weather conditions"
                    label="Weather Conditions"
                    required
                    className="w-full rounded-lg border border-stroke bg-transparent px-4 py-3 text-dark outline-none transition focus:border-primary dark:border-dark-3 dark:text-white"
                />
            </div>

            {error && (
                <p className="rounded-lg bg-red-light-6 px-4 py-3 text-body-sm text-red dark:bg-red-light-6/10">
                    {error}
                </p>
            )}

            <div className="flex items-center justify-end gap-3 pt-2">
                <Button
                    onClick={closeModal}
                    className="rounded-lg border border-stroke px-5 py-2.5 text-sm font-medium text-dark transition hover:bg-opacity-70 dark:border-dark-3 dark:text-white dark:hover:bg-dark-3"
                    label="Cancel"
                />
                <Button
                    className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-opacity-70 disabled:opacity-65"
                    // disabled={createReport.isPending}
                    label={createReport.isPending ? "Creating..." : "Create Document"}
                />
            </div>
        </form>
    );
}