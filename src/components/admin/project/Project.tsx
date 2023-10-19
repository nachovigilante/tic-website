import { Project } from "~/hooks/api/useProjects";
import StudentsCard from "./StudentsCard";
import ProjectCard from "./ProjectCard";
import Timeline, { Grade, Note } from "../Timeline";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import ProjectAssignemts from "./ProjectAssignments";

const Project = ({ project }: { project: Project }) => {
    console.log(project);
    return (
        <div className="max-h-full overflow-hidden">
            <ProjectHeader project={project} key={project.id} />
            <ProjectBody project={project} key={project.id} />
        </div>
    );
};

const ProjectHeader = ({ project }: { project: Project }) => {
    return (
        <div className="mb4 flex">
            <ProjectCard project={project} key={project.id} />
            {project.students && <StudentsCard students={project.students} />}
        </div>
    );
};

const StudentTimeLine = ({
    notes,
    grades,
}: {
    notes: Note[];
    grades: Grade[];
}) => {
    return (
        <div className="rounded-md bg-white/10 p-5 flex flex-col overflow-y-auto">
            <div className="flex flex-col items-center">
                <div className="rounded-full h-12 w-12 border border-white" />
                <span>Nombre</span>
                <span>Apellido</span>
            </div>
            <Timeline notes={notes} grades={grades} size="small" />
        </div>
    );
};

const ProjectBody = ({ project }: { project: Project }) => {
    const [expanded, setExpanded] = useState(false);
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

    return (
        <div className="mb4 flex max-h-[550px]">
            {!expanded && (
                <ProjectAssignemts project={project} key={project.id} />
            )}
            <div className="project-card rounded-xl max-w-full pt-0">
                <div className="py-5 flex justify-between">
                    <h2 className="text-xl">Notas</h2>
                    <div
                        onClick={() => setExpanded((e) => !e)}
                        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/10"
                    />
                </div>
                <div
                    className={twMerge(
                        "pr-4 flex max-h-[450px] overflow-y-auto scroll-xs",
                        expanded && "w-full",
                    )}
                >
                    {expanded && (
                        <>
                            <div className="flex basis-[500px] gap-10 overflow-x-auto scroll-xs flex-grow mb-5">
                                <StudentTimeLine
                                    notes={notes}
                                    grades={grades}
                                />
                                <StudentTimeLine
                                    notes={notes}
                                    grades={grades}
                                />
                                <StudentTimeLine
                                    notes={notes}
                                    grades={grades}
                                />
                                <StudentTimeLine
                                    notes={notes}
                                    grades={grades}
                                />
                                <StudentTimeLine
                                    notes={notes}
                                    grades={grades}
                                />
                            </div>
                            <div className="w-8 border-r-2 border-gray-500/50 h-[400px] mr-5" />
                        </>
                    )}
                    <Timeline className="mb-10" notes={notes} grades={grades} />
                </div>
            </div>
        </div>
    );
};

export default Project;
