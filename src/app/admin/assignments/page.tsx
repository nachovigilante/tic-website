"use client";

import React from "react";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Assignemt from "~/components/admin/Assignment";
import { AssignmentType, useAssignments } from "~/hooks/api/useAssignments";

const Page = () => {
    const { fetchAssignments } = useAssignments();

    // Queries
    const {
        data: assignments,
        isLoading,
        isError,
    } = useQuery({ queryKey: ["todos"], queryFn: fetchAssignments });

    const [filteredAssignments, setFilteredAssignments] = useState<
        AssignmentType[]
    >(assignments || []);

    const filterAssignments = (search: string) => {
        if (!assignments) return;

        const filtered = assignments.filter((assignment) => {
            const name = assignment.title.toLowerCase();
            return name.includes(search);
        });
        setFilteredAssignments(filtered);
    };

    useEffect(() => {
        if (!assignments) return;

        setFilteredAssignments(assignments);
    }, [assignments]);

    return (
        <div className="flex h-full">
            <div className="m-4 flex h-full w-1/3 flex-col gap-4 rounded-xl">
                {filteredAssignments.map((assignment) => (
                    <Assignemt assignment={assignment} key={assignment.id} />
                ))}
            </div>
            <div className="project-card flex h-full w-1/3 flex-col gap-4 rounded-xl"></div>
            <div className="project-card flex h-full w-1/3 flex-col gap-4 rounded-xl"></div>
        </div>
    );
};

export default Page;
