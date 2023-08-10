"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import DniInput, { validateDNI } from "~/components/utils/form/DniInput";
import { Input } from "~/components/utils/form/Input";
import useAuth from "~/hooks/auth/useAuth";
import useLogin, { type Credentials } from "~/hooks/auth/useLogin";

import useErrors from "~/hooks/utils/useErrors";
import { LoginProps } from "./login/LoginForm";
import { LoginTeacher } from "./login/LoginTeacher";
import { LoginStudent } from "./login/LoginStudent";

const LoginPage = () => {
    const router = useRouter();
    const {
        auth: { id },
    } = useAuth();
    const [isTeacher, setIsTeacher] = useState(false);

    const redirectToHome = () => {
        void router.push("/");
    };

    const toggleRole = () => {
        setIsTeacher(!isTeacher);
    };

    useEffect(() => {
        if (id) redirectToHome();
    }, [id]);

    const loginProps: LoginProps = {
        redirectToHome,
        toggleRole,
    };

    return (
        <>
            <main className="h-screen overflow-y-hidden bg-background-dark pt-[67px]">
                <div className="relative z-50 flex h-full font-raleway text-white">
                    {isTeacher ? (
                        <LoginTeacher {...loginProps} />
                    ) : (
                        <LoginStudent {...loginProps} />
                    )}
                </div>
                <div className="bg-colors-1 absolute -mt-[1000px] h-[140%] w-full" />
            </main>
        </>
    );
};

export default LoginPage;
