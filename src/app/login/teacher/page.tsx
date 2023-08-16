"use client";

import { Input } from "~/components/utils/form/Input";
import useLogin from "~/hooks/auth/useLogin";
import useErrors from "~/hooks/utils/useErrors";
import { LoginForm, type Errors } from "~/components/login/LoginForm";
import { useRouter } from "next/navigation";

const Page = () => {
    const { errors, setErrors } = useErrors<Errors>();
    const { teacherLogin } = useLogin();
    const router = useRouter();

    const SideBar = () => (
        <>
            <h2 className="text-5xl font-black">TIC X</h2>
            <h3 className="my-5 text-xl font-semibold">For teachers</h3>
        </>
    );

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrors({ type: "clear", all: true });

        const user = e.currentTarget.elements.namedItem(
            "user",
        ) as HTMLInputElement;
        const pass = e.currentTarget.elements.namedItem(
            "pass",
        ) as HTMLInputElement;

        if (!user.value) {
            setTimeout(() => {
                setErrors({ type: "set", input: "user" });
            }, 50);
            return;
        }

        teacherLogin({ username: user.value, pass: pass.value })
            .then((res) => {
                if (res.success) {
                    void router.push("/");
                } else {
                    setTimeout(() => {
                        setErrors({ type: "set", input: "pass" });
                    }, 50);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <LoginForm SideBar={SideBar} handleSubmit={handleSubmit}>
            <Input
                type="text"
                placeholder="Usuario"
                error={errors.user}
                name="user"
            />
            <Input
                type="password"
                placeholder="Contraseña"
                error={errors.pass}
                name="pass"
            />
        </LoginForm>
    );
};

export default Page;
