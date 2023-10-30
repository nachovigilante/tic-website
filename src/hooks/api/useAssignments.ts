import { useState } from "react";
import useAuth from "../auth/useAuth";
import useAPIQuery from "./useAPIQuery";
import { ProjectType, StudentType } from "./useProjects";

export type AssignmentsProjectsType = ProjectType & {
    assignments_projects: {
        completed: Date;
        description: string;
        teacherId: number;
    };
};

export type AssignmentsStudentsType = StudentType & {
    assignments_projects: {
        completed: Date;
        description: string;
        teacherId: number;
    };
};

export type AssignmentType = {
    id: number;
    title: string;
    issueDate: Date;
    deadline: Date;
    secondDeadline: Date;
    link: string;
    individual: boolean;
    mainAssignment: boolean;
    roleId: number;
    completed: Date;
    students: AssignmentsStudentsType[];
    projects: AssignmentsProjectsType[];
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
    /*
    const fetchProjectsByAssignments = async () => {
        const data = await query<ProjectType[]>(
            `projects/assignments?${filteredAssignments
                .map((a) => `id=${a.id}`)
                .join("&")}`,
            accessToken,
        );
        return data;
    };
    */
    return {
        fetchAssignments,
        fetchAssignment,
    };
};
