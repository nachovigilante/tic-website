import useAuth from "../auth/useAuth";
import useAPIQuery from "./useAPIQuery";
import { StudentType } from "./useProjects";

export type AssignmentType = {
    id: number;
    title: string;
    description: string;
    issueDate: Date;
    deadline: Date;
    secondDeadline: Date;
    link: string;
    individual: boolean;
    completed: Date;
    students: StudentType[];
};

export const useAssignments = () => {
    const {
        auth: { accessToken },
    } = useAuth();

    const { query } = useAPIQuery();

    const fetchAssignments = async () => {
        const data = await query<AssignmentType[]>(`assignments`, accessToken);
        return data;
    };

    const fetchAssignment = async (id: string) => {
        const data = await query<AssignmentType>(
            `assignments/${id}`,
            accessToken,
        );
        return data;
    };

    return { fetchAssignments, fetchAssignment };
};
