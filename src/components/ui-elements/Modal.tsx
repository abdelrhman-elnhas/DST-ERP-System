"use client"
import { Button } from "./button"
import InputGroup from "../FormElements/InputGroup"
import { useModalStore } from "@/store/modalStore";
import { useEffect } from "react";

export function Modal() {
    const { isOpen, title, content, closeModal } = useModalStore();

    // close on escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeModal();
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [closeModal]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen) return null;


    return (
        <>

            {/* Backdrop */}
            <div
                className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
                onClick={closeModal}
            />

            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div className="w-full max-w-lg rounded-2xl bg-white shadow-3 dark:bg-dark-2">

                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-stroke px-6 py-4 dark:border-dark-3">
                        <h2 className="text-lg font-semibold text-dark dark:text-white">
                            {title}
                        </h2>
                        <button
                            onClick={closeModal}
                            className="flex h-8 w-8 items-center justify-center rounded-lg text-dark-5 transition hover:bg-gray-2 hover:text-dark dark:text-dark-6 dark:hover:bg-dark-3 dark:hover:text-white"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                        {content}
                    </div>

                </div>
            </div>
        </>

    )
}
