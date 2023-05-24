import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import DniInput, { validateDNI } from "~/components/utils/form/DniInput";
import { Input } from "~/components/utils/form/Input";
import useAuth from "~/hooks/auth/useAuth";
import useLogin, {
    Credentials,
    TeacherCredentials,
} from "~/hooks/auth/useLogin";

import useErrors from "~/hooks/utils/useErrors";

const Login: NextPage = () => {
    const router = useRouter();
    const {
        auth: { id },
    } = useAuth();
    const { login } = useLogin();
    const [isButtonLoading, setIsButtonLoading] = useState(false);

    const formatDni = (dni: string) => {
        return dni.replace(/\./g, "");
    };

    useEffect(() => {
        if (id) {
            void router.push("/");
        } 
    }, [id]);

    type Errors = {
        dni: boolean;
        pass: boolean;
    };

    const { errors, setErrors } = useErrors<Errors>();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        setIsButtonLoading(true)
        e.preventDefault();
        setErrors({ type: "clear", all: true });

        const dni = e.currentTarget.elements.namedItem(
            "dni",
        ) as HTMLInputElement;
        const pass = e.currentTarget.elements.namedItem(
            "pass",
        ) as HTMLInputElement;

        if (!validateDNI(dni.value)) {
            setTimeout(() => {
                setErrors({ type: "set", input: "dni" });
            }, 50);
            setIsButtonLoading(false)
            return;
        }

        login({
            dni: formatDni(dni.value),
            pass: pass.value,
        } as Credentials)
            .then((res) => {
                if (res.success) {
                    void router.push("/");
                } else {
                    setTimeout(() => {
                        setErrors({ type: "set", input: "pass" });
                    }, 50);
                }
                setIsButtonLoading(false)
            })
            .catch((err) => {
                console.log(err);
            });
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
                            <DniInput
                                error={errors.dni}
                                clearError={() =>
                                    setErrors({ type: "clear", input: "dni" })
                                }
                            />
                            <Input
                                type="password"
                                placeholder="Contraseña"
                                error={errors.pass}
                                name="pass"
                            />
                            <p className="text-sm underline cursor-pointer self-center">
                                No recuerdo mi contraseña
                            </p>
                            <button
                                className={twMerge("relative input active:scale-[99%] bg-accent", isButtonLoading && "bg-accent-active")}
                                type="submit"
                            >
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
