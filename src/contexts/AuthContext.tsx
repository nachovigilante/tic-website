import {
    createContext,
    type Dispatch,
    type SetStateAction,
    useState,
} from "react";

export type AuthType = {
    id: string;
    accessToken: string;
};

type AuthContextType = {
    auth: AuthType;
    setAuth: Dispatch<SetStateAction<AuthType>>;
};

const AuthContext = createContext({
    auth: {},
} as AuthContextType);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [auth, setAuth] = useState({
        id: "",
        accessToken: "",
    });

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
