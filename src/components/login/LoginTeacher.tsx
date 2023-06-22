import { Input } from "~/components/utils/form/Input";
import useLogin from "~/hooks/auth/useLogin";
import useErrors from "~/hooks/utils/useErrors";
import { LoginForm, type Errors, type LoginProps } from "./LoginForm";

export const LoginTeacher = ({
    redirectToHome,
    toggleRole,
}: LoginProps) => {
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
            SideBar={SideBar}
            handleSubmit={handleSubmit}
            toggleRole={toggleRole}
            toggleRoleText="Ingresar como alumno"
        >
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
