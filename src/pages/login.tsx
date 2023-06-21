import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useAuth from "~/hooks/auth/useAuth";

import { LoginTeacher } from "~/components/form/LoginTeacher";
import { LoginStudent } from "~/components/form/LoginStudent";

const Login: NextPage = () => {
    const router = useRouter();
    const {
        auth: { id },
    } = useAuth();

    const redirectToHome = () => {
        void router.push("/");
    };

    useEffect(() => {
        if (id) redirectToHome();
    }, [id]);

    return (
        <>
            <Head>
                <title>TIC://Login</title>
            </Head>
            <main className="pt-[67px] bg-background-dark overflow-y-hidden h-screen">
                <div className="flex relative z-50 text-white font-raleway h-full">
                    <LoginTeacher redirectToHome={redirectToHome} />
                    <LoginStudent redirectToHome={redirectToHome} />
                </div>
                <div className="bg-colors-1 w-full h-[140%] absolute -mt-[1000px]" />
            </main>
        </>
    );
};

export default Login;
