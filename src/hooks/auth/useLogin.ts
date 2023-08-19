import { useRouter } from "next/navigation";
import { AuthType } from "../../contexts/AuthContext";
import useAuth from "./useAuth";

const BASE_URL = "https://proyecto-final-micaviegas.vercel.app";

// const BASE_URL = "http://localhost:9000";

export type StudentCredentials = {
    dni: string;
    pass: string;
};

export type TeacherCredentials = {
    username: string;
    pass: string;
};

type LoginResult<CredentialsType> =
    | {
          success: true;
          accessToken: string;
          credentials: CredentialsType;
      }
    | {
          success: false;
          error: string;
      };

const login = async <CredentialsType>(
    path: string,
    credentials: CredentialsType,
): Promise<LoginResult<CredentialsType>> => {
    try {
        const response = await fetch(`${BASE_URL}/${path}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
            credentials: "include",
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

        return { accessToken, success: true, credentials };
    } catch (error) {
        return { success: false, error: (error as Error).message };
    }
};

const useLogin = () => {
    const { setAuth } = useAuth();
    const router = useRouter();

    const studentLogin = async (credentials: StudentCredentials) => {
        const result = await login<StudentCredentials>("students", credentials);
        if (!result.success) return result;

        setAuth({
            user: credentials.dni,
            accessToken: result.accessToken,
            permissions: 1,
        } as AuthType);

        return result;
    };

    const teacherLogin = async (credentials: TeacherCredentials) => {
        const result = await login<TeacherCredentials>("teachers", credentials);
        if (!result.success) return result;

        setAuth({
            user: credentials.username,
            accessToken: result.accessToken,
            permissions: 2,
        } as AuthType);

        return result;
    };

    const refreshToken = async () => {
        try {
            const response = await fetch(`${BASE_URL}/auth/refreshToken`, {
                method: "GET",
                credentials: "include",
            });

            // if (response.status === 401) throw new Error("Unauthorized");

            // if (!response.ok) throw new Error("Query failed");

            const data = (await response.json()) as {
                token: string;
                permissions: number;
                user: string;
            };

            console.log(data);

            setAuth({
                user: data.user,
                accessToken: data.token,
                permissions: data.permissions,
            } as AuthType);
        } catch (error) {
            console.error(error);
            void router.push("/login");
        }
    };

    const logout = async () => {
        try {
            await fetch(`${BASE_URL}/auth/logout`, {
                method: "POST",
                credentials: "include",
            });
        } catch (error) {
            console.error(error);
        } finally {
            setAuth({} as AuthType);
        }
    };

    return { studentLogin, teacherLogin, refreshToken, logout };
};

export default useLogin;
