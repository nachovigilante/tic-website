import useAuth from "../auth/useAuth";
import useAPIQuery from "./useAPIQuery";

export type StudentType = {
    id: number;
    name: string;
    lastname: string;
    roles: string[];
};

export type Project = {
    id: number;
    title: string;
    areas: [{
        id: number;
        name: string;
    }];
    description: string;
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