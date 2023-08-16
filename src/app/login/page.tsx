"use client";

import { Input } from "~/components/utils/form/Input";
import useLogin from "~/hooks/auth/useLogin";
import useErrors from "~/hooks/utils/useErrors";
import { LoginForm, type Errors } from "~/components/login/LoginForm";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Page = () => {
    const { errors, setErrors } = useErrors<Errors>();
    const { teacherLogin } = useLogin();
    const router = useRouter();

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
