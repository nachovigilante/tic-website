import { useEffect, useState } from "react";
import { Input } from "./Input";

const DniInput = ({
    error,
    clearError,
}: {
    error: boolean;
    clearError?: () => void;
}) => {
    const [dni, setDni] = useState("");

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace") {
            if (dni.length === 0) return;
            clearError && clearError();
            setDni(dni.slice(0, dni.length - 1));
        } else if (e.key >= "0" && e.key <= "9") {
            if (dni.length >= 8) return;
            clearError && clearError();
            setDni(dni + e.key);
        } else if (e.key !== "Enter" && e.key !== "Tab") {
            e.preventDefault();
        }
    };

    useEffect(() => {
        console.log(dni);
    }, [dni]);

    return (
        <div className="w-full flex items-center justify-start relative">
            <Input
                type="text"
                placeholder={dni.length === 0 ? "DNI" : ""}
                value={`${dni.slice(0, 2)}${
                    dni.length > 2 ? "." : ""
                }${dni.slice(2, 5)}${dni.length > 5 ? "." : ""}${dni.slice(
                    5,
                    8,
                )}`}
                onKeyDown={handleKeyDown}
                error={error}
                name="dni"
            />
        </div>
    );
};

export const validateDNI = (dni: string) => {
    const dniRegex = /^\d{2}\.\d{3}\.\d{3}$/;
    return dniRegex.test(dni);
};

export default DniInput;
