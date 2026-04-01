"use client";

import { useState } from "react";
import { useUpdateDocumentVersion } from "@/hooks/useDocuments";
import { useModalStore } from "@/store/modalStore";
import InputGroup from "../FormElements/InputGroup";
import { Button } from "../ui-elements/button";

export function UpdateDocumentModal({ id, name }: { id: number, name: string }) {
    const updateDocument = useUpdateDocumentVersion();
    const { closeModal } = useModalStore();

    const [file, setFile] = useState<File | null>(null);
    const [error, setError] = useState("");

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
            const formData = new FormData()
            formData.append("file", file);

            await updateDocument.mutateAsync({ id, formData });
            closeModal();
        } catch (err: any) {
            setError(err.message ?? "Something went wrong");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                Update the version for document {name}
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
                    label={updateDocument.isPending ? "Updating..." : "Update Document Version"}
                />
            </div>
        </form>
    );
}