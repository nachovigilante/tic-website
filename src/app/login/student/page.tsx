"use client";

import DniInput, { validateDNI } from "~/components/utils/form/DniInput";
import { Input } from "~/components/utils/form/Input";
import useLogin from "~/hooks/auth/useLogin";
import useErrors from "~/hooks/utils/useErrors";
import { LoginForm, type Errors } from "~/components/login/LoginForm";
import { useRouter } from "next/navigation";

const formatDni = (dni: string) => {
    return dni.replace(/\./g, "");
};

const Page = () => {
    const { errors, setErrors } = useErrors<Errors>();
    const { studentLogin } = useLogin();
    const router = useRouter();

    const SideBar = () => <h2 className="text-5xl font-black">TIC X</h2>;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
            return;
        }

        studentLogin({ dni: formatDni(dni.value), pass: pass.value })
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
            <DniInput
                error={errors.dni}
                clearError={() => setErrors({ type: "clear", input: "dni" })}
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
