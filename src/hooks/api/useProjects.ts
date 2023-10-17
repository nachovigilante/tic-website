import useAuth from "../auth/useAuth";
import useAPIQuery from "./useAPIQuery";

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

export type AssignmentType = {
    id: number;
    title: string;
    description: string;
    issueDate: Date;
    deadline: Date;
    secondDeadline: Date;
    link: string;
    individual: boolean;
    students: StudentType[];
};

export type Project = {
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
    assignemts: AssignmentType[];
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

    const fetchProject = async (id: string) => {
        const data = await query<Project>(`projects/${id}`, accessToken);
        return data;
    };

    return {
        fetchProjects,
        fetchProject,
    };
};
