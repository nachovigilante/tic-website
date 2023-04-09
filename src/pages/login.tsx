import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useAuth from "~/hooks/auth/useAuth";
import useLogin, { Credentials } from "~/hooks/auth/useLogin";

type InputProps = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>;

const Input = ({ type, placeholder }: InputProps) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="w-full flex items-center justify-end">
            <input
                className="input relative w-full"
                type={
                    type !== "password"
                        ? type
                        : showPassword
                        ? "text"
                        : "password"
                }
                placeholder={placeholder}
            />
            {type === "password" && (
                <span
                    className="border-red border h-5 w-5 absolute cursor-pointer mr-3"
                    onMouseDown={() => setShowPassword(true)}
                    onMouseUp={() => setShowPassword(false)}
                />
            )}
        </div>
    );
};

const DniInput = () => {
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
            <input
                className="input relative w-full"
                type="text"
                placeholder={dni.length === 0 ? "DNI" : ""}
                value={`${dni.slice(0, 2)}${
                    dni.length > 2 ? "." : ""
                }${dni.slice(2, 5)}${dni.length > 5 ? "." : ""}${dni.slice(
                    5,
                    8,
                )}`}
                onKeyDown={handleKeyDown}
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

    return (
        <>
            <Head>
                <title>TIC://Login</title>
            </Head>
            <main className="pt-[67px] bg-background-dark overflow-y-hidden h-screen">
                <div className="flex relative z-50 text-white font-raleway h-full">
                    {/* <div className="flex flex-col justify-start gap-20 w-[400px] px-14 py-5 h-full">
                        <div></div>
                        <p className="font-semibold text-xl">
                            Ingresa tu información para acceder a la plataforma
                        </p>
                    </div> */}
                    <form
                        action=""
                        className="glass grid grid-cols-2 w-[1000px] h-[500px] m-auto"
                    >
                        <div className="flex justify-center p-10"></div>
                        <div className="bg-background-default rounded-r-2xl py-8 px-16 flex flex-col justify-start gap-5">
                            <h1 className="text-4xl font-semibold mb-5">
                                Ingresar
                            </h1>
                            <DniInput />
                            <Input type="password" placeholder="Contraseña" />
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
