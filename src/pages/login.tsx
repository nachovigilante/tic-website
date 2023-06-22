import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useAuth from "~/hooks/auth/useAuth";

import type { LoginProps } from "~/components/login/LoginForm";
import { LoginTeacher } from "~/components/login/LoginTeacher";
import { LoginStudent } from "~/components/login/LoginStudent";
import { type MyPage } from "~/components/types";

const Login: MyPage = () => {
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
        toggleRole
    };

    return (
        <>
            <Head>
                <title>TIC://Login</title>
            </Head>
            <main className="pt-[67px] bg-background-dark overflow-y-hidden h-screen">
                <div className="flex relative z-50 text-white font-raleway h-full">
                    {isTeacher ? (
                        <LoginTeacher {...loginProps} /> 
                    ) : (
                        <LoginStudent  {...loginProps} />
                    )}         
                </div>
                <div className="bg-colors-1 w-full h-[140%] absolute -mt-[1000px]" />
            </main>
        </>
    );
};

export default Login;
Login.Layout = "Main";
