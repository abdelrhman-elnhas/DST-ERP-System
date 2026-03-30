"use client";

import { useDeleteDocument } from "@/hooks/useDocuments";
import { Button } from "../ui-elements/button";
import { useModalStore } from "@/store/modalStore";

export function DeleteItemModal({ id, name }: { id: number, name: string }) {
    const deleteDocument = useDeleteDocument();
    const { closeModal } = useModalStore();


    const handleDelete = async () => {
        try {
            await deleteDocument.mutateAsync(id);
            closeModal();
        } catch (err: any) {
            console.error(err.message ?? "Something went wrong");
        }
    };

    return (
        <>
            <div>
                <p>Are you sure you want to delete <strong>{`${name}`}</strong></p>
            </div>
            <div className="flex items-center justify-end gap-3 pt-2">
                <Button
                    onClick={closeModal}
                    className="rounded-lg border border-stroke px-5 py-2.5 text-sm font-medium text-dark transition hover:bg-opacity-70 dark:border-dark-3 dark:text-white dark:hover:bg-dark-3"
                    label="Cancel"
                />
                <Button
                    className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-opacity-70 disabled:opacity-65"
                    // disabled={deleteDocument.isPending}
                    label={deleteDocument.isPending ? "Deleting..." : "Delete"}
                    onClick={handleDelete}
                />
            </div>
        </>
    );
}