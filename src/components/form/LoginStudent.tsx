import DniInput, { validateDNI } from "~/components/utils/form/DniInput";
import { Input } from "~/components/utils/form/Input";
import useLogin from "~/hooks/auth/useLogin";
import useErrors from "~/hooks/utils/useErrors";
import { LoginForm, Errors } from "./LoginForm";

const formatDni = (dni: string) => {
    return dni.replace(/\./g, "");
};

export const LoginStudent = ({
    redirectToHome,
}: {
    redirectToHome: () => void;
}) => {
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
            isTeacher={false}
            SideBar={SideBar}
            handleSubmit={handleSubmit}
        >
            <h2 className="text-4xl font-semibold mb-5">Ingresar</h2>
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
            <button
                className="relative input active:scale-[99%] bg-accent"
                type="submit"
            >
                Ingresar
            </button>
            <p className="text-sm underline cursor-pointer self-center">
                Ingresar como docente
            </p>
            <div className="flex flex-col gap-2 border-1 border-white/10 rounded-xl p-4 relative bottom-0">
                <h4 className="text-md font-semibold">¿No tenés cuenta?</h4>
                <p className="text-sm">
                    Acercate a pedir tu clave a algún profe de Proyecto Final de
                    5to año
                </p>
            </div>
        </LoginForm>
    );
};
