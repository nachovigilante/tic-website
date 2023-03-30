import useAuth from "../auth/useAuth";
import useAPIQuery from "./useAPIQuery";

export type Student = {
    dni: string;
    name: string;
};

export const useStudents = () => {
    const {
        auth: { accessToken },
    } = useAuth();

    const { query } = useAPIQuery();

    const fetchStudents = async () => {
        const data = await query<Student[]>(`/students`, accessToken);
        return data;
    };

    return {
        fetchStudents,
    };
};
