import { create } from "zustand";

interface ModalStore {
    isOpen: boolean;
    title: string;
    content: React.ReactNode | null;

    openModal: (title: string, content: React.ReactNode) => void;
    closeModal: () => void;
}

export const useModalStore = create<ModalStore>()((set) => ({
    isOpen: false,
    title: "",
    content: null,

    openModal: (title, content) => set({ isOpen: true, title, content }),
    closeModal: () => set({ isOpen: false, title: "", content: null }),
}));