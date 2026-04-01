"use client";

import { useState } from "react";
import { useCreateDocument } from "@/hooks/useDocuments";
import { useModalStore } from "@/store/modalStore";
import InputGroup from "../FormElements/InputGroup";
import { Button } from "../ui-elements/button";
import { CreateDocumentPayload } from "@/types/document";

export function CreateDocumentModal() {
    const createDocument = useCreateDocument();
    const { closeModal } = useModalStore();

    const [form, setForm] = useState<CreateDocumentPayload>({
        title: "",
        project_id: "",
        document_folder_id: "",
        file: null,
    });

    const [file, setFile] = useState<File | null>(null);
    const [error, setError] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // ✅ e.target.files[0] is the real File object, not the fake path
        const selectedFile = e.target.files?.[0];
        if (selectedFile) setFile(selectedFile);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (!file) {
            setError("Please select a file");
            return;
        }

        try {
            // ✅ build FormData — this is what the server actually receives
            const formData = new FormData();
            formData.append("title", form.title);
            formData.append("project_id", form.project_id);
            formData.append("document_folder_id", form.document_folder_id);
            formData.append("file", file); // ✅ real file object not a path

            await createDocument.mutateAsync(formData);
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
                    name="title"
                    value={form.title}
                    handleChange={handleChange}
                    placeholder="Enter document title"
                    label="Document Title"
                    required
                    className="w-full rounded-lg border border-stroke bg-transparent px-4 py-3 text-dark outline-none transition focus:border-primary dark:border-dark-3 dark:text-white"
                />
            </div>
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
                    name="document_folder_id"
                    value={form.document_folder_id}
                    handleChange={handleChange}
                    placeholder="Enter document folder ID"
                    label="Document Folder ID"
                    required
                    className="w-full rounded-lg border border-stroke bg-transparent px-4 py-3 text-dark outline-none transition focus:border-primary dark:border-dark-3 dark:text-white"
                />
            </div>
            <div>
                <InputGroup
                    type="file"
                    fileStyleVariant="style1"
                    label="Document file"
                    placeholder="Attach Document file"
                    handleChange={handleFileChange}
                    name="file"
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
                    // disabled={createDocument.isPending}
                    label={createDocument.isPending ? "Creating..." : "Create Document"}
                />
            </div>
        </form>
    );
}