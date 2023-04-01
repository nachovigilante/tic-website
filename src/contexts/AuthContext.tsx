import {
    createContext,
    Dispatch,
    SetStateAction,
    useEffect,
    useState,
} from "react";

export type AuthType = {
    id: number;
    dni: string;
    name: string;
    lastName: string;
    mail: string;
    classYear: string;
    accessToken: string;
};

type AuthContextType = {
    auth: AuthType;
    setAuth: Dispatch<SetStateAction<AuthType>>;
};

const AuthContext = createContext({
    auth: {
        id: 0,
        dni: "",
        name: "",
        lastName: "",
        mail: "",
        classYear: "",
        accessToken: "",
        // refreshToken: "",
    },
} as AuthContextType);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [auth, setAuth] = useState({
        classYear: "",
        dni: "",
        id: 0,
        lastName: "",
        mail: "",
        name: "",
        accessToken: "",
    });

    const debug = true;

    useEffect(() => {
        if (debug) console.log("AuthContext: ", auth);
    }, [auth]);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
