"use client"

import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

type InputProps = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> & {
    error?: boolean;
    clearError?: () => void;
};

export const Input = ({
    type,
    placeholder,
    error,
    onKeyDown,
    ...props
}: InputProps) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div
            className={twMerge(
                "input w-full flex items-center justify-end border-2 border-transparent",
                error && "error",
            )}
        >
            <input
                className="relative w-full border-none bg-transparent outline-none"
                type={
                    type !== "password"
                        ? type
                        : showPassword
                        ? "text"
                        : "password"
                }
                placeholder={placeholder}
                onKeyDown={onKeyDown}
                {...props}
            />
            {type === "password" && (
                <span
                    className="border-red border h-5 w-5 absolute cursor-pointer"
                    onMouseDown={() => setShowPassword(true)}
                    onMouseUp={() => setShowPassword(false)}
                />
            )}
        </div>
    );
};
