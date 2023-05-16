import { AuthType } from "../../contexts/AuthContext";
import useAuth from "./useAuth";

const BASE_URL = "https://proyecto-final-ecru-six.vercel.app";

export type Credentials = {
    dni: string;
    pass: string;
};

export type TeacherCredentials = {
    username: string;
    pass: string;
};

const useLogin = () => {
    const { setAuth } = useAuth();

    const login = async (credentials: Credentials) => {
        try {
            const response = await fetch(`${BASE_URL}/students/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // "mode": "no-cors",
                    // "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify(credentials),
                // credentials: "include",
            });

            if (!response.ok) {
                const message = await response.text();
                throw new Error(message);
            }

            const accessToken = (
                (await response.json()) as {
                    token: string;
                }
            ).token;
            setAuth({ dni: credentials.dni, accessToken } as AuthType);
            return { accessToken, success: true };
        } catch (error) {
            return { success: false, error: (error as Error).message };
        }
    };

    const teacherLogin = async (credentials: TeacherCredentials) => {
        try {
            const response = await fetch(`${BASE_URL}/teachers/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // "mode": "no-cors",
                    // "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify(credentials),
                // credentials: "include",
            });

            if (!response.ok) {
                const message = await response.text();
                throw new Error(message);
            }

            const accessToken = (
                (await response.json()) as {
                    token: string;
                }
            ).token;
            setAuth({
                dni: credentials.username,
                accessToken,
            } as AuthType);
            return { accessToken, success: true };
        } catch (error) {
            return { success: false, error: (error as Error).message };
        }
    };

    return { login, teacherLogin };
};

export default useLogin;
