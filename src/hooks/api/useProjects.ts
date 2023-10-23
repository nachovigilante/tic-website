import useAuth from "../auth/useAuth";
import useAPIQuery from "./useAPIQuery";
import { AssignmentType } from "./useAssignments";

export type RoleType = {
    id: number;
    name: string;
};

export type ClassesType = {
    id: number;
    year: number;
    level: number;
    division: string;
};

export type StudentType = {
    id: number;
    name: string;
    lastName: string;
    roles: RoleType[];
    classes: ClassesType[];
};

export type ProjectType = {
    id: number;
    title: string;
    areas: [
        {
            id: number;
            name: string;
        },
    ];
    categories: [
        {
            id: number;
            title: string;
        },
    ];
    description: string;
    students: StudentType[];
    assignments: AssignmentType[];
};

export const useProjects = () => {
    const {
        auth: { accessToken },
    } = useAuth();

    const { query } = useAPIQuery();

    const fetchProjects = async () => {
        const data = await query<ProjectType[]>(`projects`, accessToken);
        return data;
    };

    const fetchProject = async (id: string) => {
        const data = await query<ProjectType>(`projects/${id}`, accessToken);
        return data;
    };

    return {
        fetchProjects,
        fetchProject,
    };
};
