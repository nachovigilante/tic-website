import { Project } from "~/hooks/api/useProjects";
import StudentsCard from "./StudentsCard";
import ProjectCard from "./ProjectCard";
import ProjectAssignemts from "./ProjectTasks";
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
                    "project-card rounded-xl max-w-full",
                    "pt-0",
                )}
            >
                <div className="py-5 flex justify-between">
                    <h2 className="text-xl">Notas</h2>
                    <div
                        onClick={() => setExpanded((e) => !e)}
                        className="rounded-full h-10 w-10 flex justify-center items-center bg-white/10 cursor-pointer"
                    />
                </div>
                <div className="pb-4 pr-4 flex items-center">
                    <Timeline className="mb-10" />
                    <div className="w-8 border-r-2 border-gray-500" />
                    {expanded && (
                        <div className="flex basis-[500px] gap-10 overflow-x-auto scroll-xs flex-grow pb-10">
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
