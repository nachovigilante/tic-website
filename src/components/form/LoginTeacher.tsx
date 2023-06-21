import { Input } from "~/components/utils/form/Input";
import useLogin from "~/hooks/auth/useLogin";
import useErrors from "~/hooks/utils/useErrors";
import { LoginForm, Errors } from "./LoginForm";

export const LoginTeacher = ({
    redirectToHome,
}: {
    redirectToHome: () => void;
}) => {
    const { errors, setErrors } = useErrors<Errors>();
    const { teacherLogin } = useLogin();

    const SideBar = () => (
        <>
            <h2 className="text-5xl font-black">TIC X</h2>
            <h3 className="text-2xl font-semibold my-5">For teachers</h3>
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
            isTeacher={true}
            SideBar={SideBar}
            handleSubmit={handleSubmit}
        >
            <h2 className="text-4xl font-semibold mb-5">Ingresar</h2>
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
            <button
                className="relative input active:scale-[99%] bg-accent"
                type="submit"
            >
                Ingresar
            </button>
            <p className="text-sm underline cursor-pointer self-center">
                Ingresar como alumno
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
