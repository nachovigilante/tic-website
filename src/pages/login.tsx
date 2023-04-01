import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useAuth from "~/hooks/auth/useAuth";
import useLogin, { Credentials } from "~/hooks/auth/useLogin";

const Login: NextPage = () => {
    const router = useRouter();
    const {
        auth: { dni },
    } = useAuth();
    const login = useLogin();

    useEffect(() => {
        if (dni) {
            // NO PUEDO CREER QUE TENGA QUE HACER ESTO PORQUE ME LLORA EL LINTER
            router
                .push("/")
                .then(() => console.log("redirected"))
                .catch((err) => console.log(err));
        } else {
            // Login harcodeado
            login({ dni: "45584626", pass: "tic" } as Credentials)
                .then(() => {
                    router
                        .push("/")
                        .then(() => console.log("redirected"))
                        .catch((err) => console.log(err));
                })
                .catch((err) => console.log(err));
        }
    }, [dni]);

    return (
        <div>
            <h1>Login</h1>
        </div>
    );
};

export default Login;
