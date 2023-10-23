"use client";

import { Grade, Note } from "~/components/admin/Timeline";
import { ProjectBody, ProjectHeader } from "~/components/admin/project/Project";
import StudentTimelineModal from "~/components/admin/project/StudentTimeLineModal";
import { FeaturedProjectProvider } from "~/contexts/FeaturedProjectContext";
import useFeaturedProject from "~/hooks/useFeaturedProject";

const notes = [
    {
        title: "Primera entrega",
        content: "Login, Register",
        issueDate: new Date("2023-03-01"),
        term: "1° Bimestre",
    },
    {
        title: "Segunda entrega",
        content: "Login, Register",
        issueDate: new Date("2023-05-01"),
        term: "2° Bimestre",
    },
    {
        title: "Tercera entrega",
        content: "Login, Register",
        issueDate: new Date("2023-07-01"),
        term: "3° Bimestre",
    },
    {
        title: "Última entrega",
        content: "Login, Register",
        issueDate: new Date("2023-09-01"),
        term: "4° Bimestre",
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
    return (
        <FeaturedProjectProvider projectId={id}>
            <Project />
        </FeaturedProjectProvider>
    );
};

const Project = () => {
    const { featuredProject, featuredStudent, modalOpen, setModalOpen } =
        useFeaturedProject();

    return (
        <>
            <div className="max-h-full overflow-hidden">
                <ProjectHeader />
                <ProjectBody notes={notes} grades={grades} />
            </div>
            <StudentTimelineModal
                notes={notes}
                grades={grades}
                student={featuredStudent}
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
            />
        </>
    );
};

export default Page;
