"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { twMerge } from "tailwind-merge";

const Modal = ({
    title,
    children,
    onClose,
    isOpen,
    className,
    headerClassName,
}: {
    title: string;
    children: ReactNode;
    onClose?: () => void;
    isOpen: boolean;
    className?: string;
    headerClassName?: string;
}) => {
    const router = useRouter();
    if (!isOpen) return null;

    return createPortal(
        <>
            <div
                className="bg-black/40 fixed top-0 left-0 w-full h-full z-10"
                onClick={onClose}
            />
            <div
                className={twMerge(
                    "fixed rounded-lg bg-dark-blue top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 p-5 gap-10 text-white",
                    className,
                )}
            >
                <div
                    className={twMerge(
                        "flex justify-between items-center min-w-[500px]",
                        headerClassName,
                    )}
                >
                    <span className="text-2xl">{title}</span>
                    <button
                        className="border-none bg-transparent text-3xl"
                        onClick={onClose}
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
