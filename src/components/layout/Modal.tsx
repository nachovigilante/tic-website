import { ReactNode } from "react";

const Modal = ({
    title,
    children,
    onClose,
}: {
    title: string;
    children: ReactNode;
    onClose: () => void;
}) => {
    return (
        <>
            <div className="bg-black/40 backdrop:blur fixed top-0 left-0 w-full h-full z-10" />
            <div className="fixed rounded-lg bg-dark-blue top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 p-10">
                <div className="flex justify-between">
                    <span>{title}</span>
                    <button
                        className="border-none bg-transparent"
                        onClick={onClose}
                    >
                        X
                    </button>
                </div>
                {children}
            </div>
        </>
    );
};

export default Modal;
