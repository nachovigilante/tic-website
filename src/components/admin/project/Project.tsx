import { Project } from "~/hooks/api/useProjects";
import StudentsCard from "./StudentsCard";
import ProjectCard from "./ProjectCard";
import ProjectAssignemts from "./ProjectAssignments";
import Timeline from "../Timeline";
import { twMerge } from "tailwind-merge";
import { useState } from "react";

const Project = ({ project }: { project: Project }) => {
    console.log(project);
    return (
        <>
            <ProjectHeader project={project} key={project.id} />
            <ProjectBody project={project} key={project.id} />
        </>
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

const ProjectBody = ({ project }: { project: Project }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="mb4 flex">
            {!expanded && (
                <ProjectAssignemts project={project} key={project.id} />
            )}
            <div
                className={twMerge(
                    "project-card max-w-full rounded-xl",
                    "pt-0",
                )}
            >
                <div className="flex justify-between py-5">
                    <h2 className="text-xl">Notas</h2>
                    <div
                        onClick={() => setExpanded((e) => !e)}
                        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/10"
                    />
                </div>
                <div className="flex items-center pb-4 pr-4">
                    <Timeline className="mb-10" />
                    <div className="w-8 border-r-2 border-gray-500" />
                    {expanded && (
                        <div className="scroll-xs flex flex-grow basis-[500px] gap-10 overflow-x-auto pb-10">
                            <div className="w-[550px] px-10">
                                <Timeline />
                            </div>
                            <div className="w-[550px] px-10">
                                <Timeline />
                            </div>
                            <div className="w-[550px] px-10">
                                <Timeline />
                            </div>
                            <div className="w-[550px] px-10">
                                <Timeline />
                            </div>
                            <div className="w-[550px] px-10">
                                <Timeline />
                            </div>
                            <div className="w-[550px] px-10">
                                <Timeline />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Project;
