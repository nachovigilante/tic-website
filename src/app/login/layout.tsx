"use client";

import type { Metadata } from "next";
import { useRouter } from "next/navigation";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import useAuth from "~/hooks/auth/useAuth";

export const metadata: Metadata = {
    title: "TIC://Login",
};

const Layout = ({
    teacher,
    student,
}: {
    teacher: ReactElement;
    student: ReactElement;
}) => {
    const [isTeacher, setTeacher] = useState(false);

    const router = useRouter();
    const {
        auth: { id },
    } = useAuth();

    useEffect(() => {
        if (id) void router.push("/");
    }, [id]);

    return (
        <>
            <main className="h-screen overflow-y-hidden bg-background-dark pt-[67px]">
                <div className="relative z-50 flex h-full font-raleway text-white justify-center items-center">
                    <div className="absolute z-10 w-[802px] h-[501px] p-8 flex justify-end items-start">
                        <button onClick={() => setTeacher((t) => !t)}>
                            Switch
                        </button>
                    </div>
                    {isTeacher ? teacher : student}
                </div>
                <div className="bg-colors-1 absolute -mt-[1000px] h-[140%] w-full" />
            </main>
        </>
    );
};

export default Layout;
