import useAuth from "../auth/useAuth";
import useAPIQuery from "./useAPIQuery";

export type StudentType = {
    name: string;
    role: string;
};

export type Project = {
    id: number;
    name: string;
    category: string;
    students: StudentType[];
};

export const useProjects = () => {
    const {
        auth: { accessToken },
    } = useAuth();

    const { query } = useAPIQuery();

    const fetchProjects = async () => {
        const data = await query<Project[]>(`projects`, accessToken);
        return data;
    };

    return {
        fetchProjects,
    };
};