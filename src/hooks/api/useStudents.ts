import useAuth from "../auth/useAuth";
import useAPIQuery from "./useAPIQuery";

export type Student = {
    id: number;
    dni: string;
    name: string;
    lastName: string;
    mail: string;
    classYear: number;
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
