"use client";

import { useState } from "react";
import { useQuery } from "react-query";
import { Grade, Note } from "~/components/admin/Timeline";
import { ProjectBody, ProjectHeader } from "~/components/admin/project/Project";
import StudentTimelineModal from "~/components/admin/project/StudentTimeLineModal";
import { StudentType, useProjects } from "~/hooks/api/useProjects";

const notes = [
    {
        title: "Primera entrega",
        content: "Login, Register",
        issueDate: new Date("2023-03-01"),
    },
    {
        title: "Segunda entrega",
        content: "Login, Register",
        issueDate: new Date("2023-05-01"),
    },
    {
        title: "Tercera entrega",
        content: "Login, Register",
        issueDate: new Date("2023-07-01"),
    },
    {
        title: "Última entrega",
        content: "Login, Register",
        issueDate: new Date("2023-09-01"),
    },
] as Note[];

const grades = [
    {
        grade: "A",
        title: "1° Bimestre",
        issueDate: new Date("2023-04-01"),
    },
    {
        grade: "4",
        title: "2° Bimestre",
        issueDate: new Date("2023-06-01"),
    },
    {
        grade: "S",
        title: "3° Bimestre",
        issueDate: new Date("2023-08-01"),
    },
    {
        grade: "7",
        title: "4° Bimestre",
        issueDate: new Date("2023-10-01"),
    },
] as Grade[];

const Page = ({ params: { id } }: { params: { id: string } }) => {
    const { fetchProject } = useProjects();
    const [modalOpen, setModalOpen] = useState(false);
    const [featuredStudent, setFeaturedStudent] = useState<StudentType>();

    const {
        data: project,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["todos", id],
        queryFn: () => fetchProject(id),
    });

    return (
        <>
            {isLoading && <div>Loading...</div>}
            {isError && <div>Error</div>}
            {!isLoading && !isError && project && (
                <>
                    <div className="max-h-full overflow-hidden">
                        <ProjectHeader
                            project={project}
                            key={project.id}
                            onStudentClick={(student) => {
                                setFeaturedStudent(student);
                                setModalOpen(true);
                            }}
                        />
                        <ProjectBody
                            project={project}
                            key={project.id}
                            notes={notes}
                            grades={grades}
                            onStudentClick={(student) => {
                                setFeaturedStudent(student);
                                setModalOpen(true);
                            }}
                        />
                    </div>
                    <StudentTimelineModal
                        notes={notes}
                        grades={grades}
                        student={featuredStudent || project.students[0]!}
                        isOpen={modalOpen}
                        onClose={() => setModalOpen(false)}
                    />
                </>
            )}
        </>
    );
};

export default Page;
