"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import useAuth from "~/hooks/auth/useAuth";

export type Errors = {
    dni: boolean;
    pass: boolean;
    user: boolean;
};

export const LoginForm = ({
    children,
    handleSubmit,
    SideBar,
    noFunction,
}: {
    children: React.ReactNode;
    handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
    SideBar: React.FC;
    noFunction?: boolean;
}) => {
    const router = useRouter();
    const pathname = usePathname();

    const {
        auth: { id },
    } = useAuth();

    useEffect(() => {
        if (id) void router.push("/");
    }, [id]);

    return (
        <form
            action=""
            className="glass relative m-auto flex h-[500px] justify-between"
            onSubmit={handleSubmit}
        >
            <div className="w-50 flex flex-col items-center p-10">
                <SideBar />
            </div>
            <div className="relative -top-[1px] left-[1px] flex h-[501px] w-[601px] flex-col justify-start gap-5 rounded-r-2xl border border-background-default bg-background-default px-16 py-8">
                <div className="flex justify-between items-center mb-5">
                    <h2 className="text-4xl font-semibold">Ingresar</h2>
                    {!noFunction && (
                        <Link
                            href={
                                pathname === "/login/student"
                                    ? "/login/teacher"
                                    : "/login/student"
                            }
                        >
                            Switch
                        </Link>
                    )}
                </div>
                {children}
                {!noFunction && (
                    <>
                        <button
                            className="input relative bg-accent active:scale-[99%]"
                            type="submit"
                        >
                            Ingresar
                        </button>
                        <div className="flex-grow" />
                        <div className="relative bottom-0 flex flex-col gap-2 rounded-xl border-1 border-white/10 p-4">
                            <h4 className="text-md font-semibold">
                                ¿No tenés cuenta?
                            </h4>
                            <p className="text-sm">
                                Acercate a pedir tu clave a algún profe de
                                Proyecto Final de 5to año
                            </p>
                        </div>
                    </>
                )}
            </div>
        </form>
    );
};
