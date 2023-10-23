import { Project, StudentType } from "~/hooks/api/useProjects";
import StudentsContainer from "./StudentsCard";
import ProjectCard from "./ProjectCard";
import Timeline, { Grade, Note } from "../Timeline";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import ProjectAssignments from "./ProjectAssignments";
import useFeaturedProject from "~/hooks/useFeaturedProject";

export const ProjectHeader = () => {
    const { featuredProject } = useFeaturedProject();

    return (
        <div className="mb4 flex">
            <ProjectCard />
            {featuredProject && featuredProject.students && (
                <StudentsContainer students={featuredProject.students} />
            )}
        </div>
    );
};

const StudentTimeLine = ({
    notes,
    grades,
    student,
}: {
    notes: Note[];
    grades: Grade[];
    student: StudentType;
}) => {
    const { setFeaturedStudent, setModalOpen } = useFeaturedProject();

    return (
        <div
            className="rounded-xl bg-white/10 p-5 flex flex-col items-center gap-4 h-fit min-w-[120px] cursor-pointer"
            onClick={() => {
                setFeaturedStudent(student);
                setModalOpen(true);
            }}
        >
            <div className="flex flex-col justify-center items-center">
                <div className="rounded-full h-12 w-12 border border-white mb-1" />
                <span>{student.name.split(" ")[0]}</span>
                <span>{student.lastName}</span>
            </div>
            <Timeline notes={notes} grades={grades} size="small" />
        </div>
    );
};

export const ProjectBody = ({
    notes,
    grades,
}: {
    notes: Note[];
    grades: Grade[];
}) => {
    const [expanded, setExpanded] = useState(false);
    const { featuredProject } = useFeaturedProject();

    return (
        <div className="mb4 flex max-h-[550px]">
            {!expanded && <ProjectAssignments />}
            <div
                className={twMerge(
                    "project-card rounded-xl max-w-full pt-0",
                    expanded && "w-full",
                )}
            >
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
                    {featuredProject && expanded && (
                        <>
                            <div className="flex basis-[500px] gap-5 overflow-x-auto scroll-xs flex-grow mb-5 px-5 justify-center items-center">
                                {featuredProject.students &&
                                    featuredProject.students.map((student) => (
                                        <StudentTimeLine
                                            student={student}
                                            notes={notes}
                                            grades={grades}
                                            key={student.id}
                                        />
                                    ))}
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
