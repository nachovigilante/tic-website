"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import { createPortal } from "react-dom";

const Modal = ({
    title,
    children,
    onClose,
    isOpen,
}: {
    title: string;
    children: ReactNode;
    onClose?: () => void;
    isOpen: boolean;
}) => {
    const router = useRouter();
    if (!isOpen) return null;

    return createPortal(
        <>
            <div
                className="bg-black/40 fixed top-0 left-0 w-full h-full z-10"
                onClick={() => void router.back()}
            />
            <div className="fixed rounded-lg bg-dark-blue top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 p-5 gap-10 text-white">
                <div className="flex justify-between items-center min-w-[500px]">
                    <span className="text-2xl">{title}</span>
                    <button
                        className="border-none bg-transparent text-3xl"
                        onClick={() => void router.back()}
                    >
                        ×
                    </button>
                </div>
                {children}
            </div>
        </>,
        document.body,
    );
};

export default Modal;
