import { useEffect, useState } from "react";
import { Input } from "./Input";

const DniInput = ({
    error,
    clearError,
}: {
    error: boolean;
    clearError?: () => void;
}) => {
    // const [dni, setDni] = useState("");

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const input = e.target as HTMLInputElement;

        if (e.key === "Backspace") {
            if (input.value.length === 0) return;
            clearError && clearError();
        } else if (e.key >= "0" && e.key <= "9") {
            if (input.value.length >= 10) {
                e.preventDefault();
                return;
            }
            if (input.value.length === 2 || input.value.length === 6) {
                input.value += ".";
            }
            clearError && clearError();
        } else if (e.key === ".") {
            if (input.value.length !== 2 && input.value.length !== 6)
                e.preventDefault();
        } else if (
            e.key !== "Enter" &&
            e.key !== "Tab" &&
            e.key !== "Shift" &&
            e.key !== "Control" &&
            e.key !== "Alt" &&
            e.key !== "ArrowLeft" &&
            e.key !== "ArrowRight" &&
            e.key !== "ArrowUp" &&
            e.key !== "ArrowDown"
        ) {
            e.preventDefault();
        }
    };

    return (
        <div className="w-full flex items-center justify-start relative">
            <Input
                type="text"
                placeholder="DNI"
                onKeyDown={handleKeyDown}
                error={error}
                name="dni"
                autoComplete="off"
            />
        </div>
    );
};

export const validateDNI = (dni: string) => {
    const dniRegex = /^\d{2}\.\d{3}\.\d{3}$/;
    return dniRegex.test(dni);
};

export default DniInput;
