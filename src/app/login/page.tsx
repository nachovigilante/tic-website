"use client"

import { LoginForm } from "~/components/login/LoginForm";
import Link from "next/link";

const Page = () => {
    const SideBar = () => (
        <>
            <h2 className="text-5xl font-black">TIC X</h2>
        </>
    );

    return (
        <LoginForm SideBar={SideBar} noFunction>
            <Link href="/login/teacher" className="w-full bg-accent input">
                Soy profe
            </Link>
            <Link href="/login/student" className="w-full bg-accent input">
                Soy alumno
            </Link>
        </LoginForm>
    );
};

export default Page;
