import {
    createContext,
    Dispatch,
    SetStateAction,
    useEffect,
    useState,
} from "react";

export type AuthType = {
    dni: string;
    accessToken: string;
};

type AuthContextType = {
    auth: AuthType;
    setAuth: Dispatch<SetStateAction<AuthType>>;
};

const AuthContext = createContext({
    auth: {
        dni: "",
        accessToken: "",
        // refreshToken: "",
    },
} as AuthContextType);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [auth, setAuth] = useState({
        dni: "",
        accessToken: "",
    });

    useEffect(() => {
        console.log("AuthContext: ", auth);
    }, [auth]);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
