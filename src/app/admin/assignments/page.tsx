"use client";

import React from "react";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Assignemt from "~/components/admin/Assignment";
import ProjectCard from "~/components/admin/ProjectCard";
import { AssignmentType, useAssignments } from "~/hooks/api/useAssignments";
import { useProjects } from "~/hooks/api/useProjects";

const Page = () => {
    const { fetchAssignments } = useAssignments();
    const { fetchProjects } = useProjects();

    const [filteredAssignments, setFilteredAssignments] = useState<
        AssignmentType[]
    >([]);

    // Queries
    const {
        data: assignments,
        isLoading,
        isError,
    } = useQuery({ queryKey: ["assignments"], queryFn: fetchAssignments });

    const {
        data: projects,
        isLoading: isProjectsLoading,
        isError: isProjectsError,
    } = useQuery({
        queryKey: ["projects"],
        queryFn: fetchProjects,
    });

    const toggleAssignment = (assignment: AssignmentType) => {
        setFilteredAssignments((prev) => {
            if (prev.includes(assignment)) {
                return prev.filter((a) => a !== assignment);
            } else {
                return [...prev, assignment];
            }
        });
    };

    useEffect(() => {
        console.log(filteredAssignments);
    }, [filteredAssignments]);

    useEffect(() => {
        console.log(projects);
    }, [projects]);

    return (
        <div className="flex h-full">
            <div className="m-4 flex h-full w-1/3 flex-col gap-4 rounded-xl">
                {assignments &&
                    assignments.map((assignment) => (
                        <Assignemt
                            assignment={assignment}
                            key={assignment.id}
                            onClick={() => toggleAssignment(assignment)}
                            selected={filteredAssignments.includes(assignment)}
                        />
                    ))}
            </div>
            <div className="project-card flex h-full w-1/3 flex-col gap-4 rounded-xl">
                {projects &&
                    projects
                        .filter((project) =>
                            project.assignments.some((assignment) =>
                                filteredAssignments.some(
                                    (filteredAssignment) =>
                                        assignment.title ===
                                        filteredAssignment.title,
                                ),
                            ),
                        )
                        .map((project) => (
                            <ProjectCard
                                project={project}
                                key={project.id}
                                noImage
                                noArea
                            />
                        ))}
            </div>
            <div className="project-card flex h-full w-1/3 flex-col gap-4 rounded-xl"></div>
        </div>
    );
};

export default Page;
