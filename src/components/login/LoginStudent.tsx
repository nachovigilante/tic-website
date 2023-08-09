import DniInput, { validateDNI } from "~/components/utils/form/DniInput";
import { Input } from "~/components/utils/form/Input";
import useLogin from "~/hooks/auth/useLogin";
import useErrors from "~/hooks/utils/useErrors";
import { LoginForm, type Errors, type LoginProps } from "./LoginForm";

const formatDni = (dni: string) => {
    return dni.replace(/\./g, "");
};

export const LoginStudent = ({ redirectToHome, toggleRole }: LoginProps) => {
    const { errors, setErrors } = useErrors<Errors>();
    const { login } = useLogin();

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

        login({ dni: formatDni(dni.value), pass: pass.value })
            .then((res) => {
                if (res.success) {
                    redirectToHome();
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
        <LoginForm
            SideBar={SideBar}
            handleSubmit={handleSubmit}
            toggleRoleText="Ingresar como docente"
            toggleRole={toggleRole}
        >
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
