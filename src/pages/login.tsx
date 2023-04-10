import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useReducer, useState } from "react";
import { twMerge } from "tailwind-merge";
import useAuth from "~/hooks/auth/useAuth";
import useLogin, { Credentials } from "~/hooks/auth/useLogin";
import useErrors from "~/hooks/utils/useErrors";

type InputProps = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> & {
    error?: boolean;
};

const Input = ({ type, placeholder, error, onKeyDown }: InputProps) => {
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

const DniInput = ({ error }: { error: boolean }) => {
    const [dni, setDni] = useState("");

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace") {
            if (dni.length === 0) return;
            setDni(dni.slice(0, dni.length - 1));
        } else if (e.key > "0" && e.key < "9") {
            if (dni.length === 8) return;
            setDni(dni + e.key);
        } else if (e.key !== "Enter" && e.key !== "Tab") {
            e.preventDefault();
        }
    };

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
            />
        </div>
    );
};

const Login: NextPage = () => {
    const router = useRouter();
    const {
        auth: { dni },
    } = useAuth();
    const login = useLogin();

    useEffect(() => {
        if (dni) {
            // NO PUEDO CREER QUE TENGA QUE HACER ESTO PORQUE ME LLORA EL LINTER
            router
                .push("/")
                .then(() => console.log("redirected"))
                .catch((err) => console.log(err));
        } else {
            // login({ dni: "...", pass: "..." } as Credentials)
            //     .then(() => {
            //         router
            //             .push("/")
            //             .then(() => console.log("redirected"))
            //             .catch((err) => console.log(err));
            //     })
            //     .catch((err) => console.log(err));
        }
    }, [dni]);

    type Errors = {
        dni: boolean;
        pass: boolean;
    };

    const { errors, setErrors } = useErrors<Errors>();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrors({ type: "clear", all: true });

        setTimeout(() => {
            setErrors({ type: "set", input: "dni" });
        }, 50);
    };

    return (
        <>
            <Head>
                <title>TIC://Login</title>
            </Head>
            <main className="pt-[67px] bg-background-dark overflow-y-hidden h-screen">
                <div className="flex relative z-50 text-white font-raleway h-full">
                    <form
                        action=""
                        className="glass flex h-[500px] m-auto justify-between relative"
                        onSubmit={handleSubmit}
                    >
                        <div className="flex justify-center p-10 w-50">
                            <h2 className="text-5xl font-black">TIC X</h2>
                        </div>
                        <div className="relative -top-[1px] left-[1px] h-[501px] bg-background-default border-background-default border rounded-r-2xl py-8 px-16 flex flex-col justify-start gap-5">
                            <h2 className="text-4xl font-semibold mb-5">
                                Ingresar
                            </h2>
                            <DniInput error={errors.dni} />
                            <Input
                                type="password"
                                placeholder="Contraseña"
                                error={errors.pass}
                            />
                            <p className="text-sm underline cursor-pointer self-center">
                                No recuerdo mi contraseña
                            </p>
                            <button className="input bg-accent" type="submit">
                                Ingresar
                            </button>
                            <div className="flex flex-col gap-2 border-1 border-white/10 rounded-xl p-4 relative bottom-0">
                                <h4 className="text-md font-semibold">
                                    ¿No tenés cuenta?
                                </h4>
                                <p className="text-sm">
                                    Acercate a pedir tu clave a algún profe de
                                    Proyecto Final de 5to año
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="bg-colors-1 w-full h-[140%] absolute -mt-[1000px]" />
            </main>
        </>
    );
};

export default Login;
