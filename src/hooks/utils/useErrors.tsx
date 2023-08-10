import { useReducer } from "react";

const useErrors = <
    T extends {
        [key: string]: boolean;
    },
>() => {
    type ActionType = {
        type: "set" | "clear";
        input?: keyof T;
        all?: boolean;
    };

    const [errors, setErrors] = useReducer((state: T, action: ActionType) => {
        if (action.type === "set") {
            if (action.all)
                return Object.keys(state).reduce<T>(
                    (acc, key) => ({ ...acc, [key]: true }),
                    {} as T,
                );
            return { ...state, [action.input!]: true };
        } else {
            if (action.all)
                return Object.keys(state).reduce<T>(
                    (acc, key) => ({ ...acc, [key]: false }),
                    {} as T,
                );
            return { ...state, [action.input!]: false };
        }
    }, {} as T);

    return { errors, setErrors };
};

export default useErrors;
