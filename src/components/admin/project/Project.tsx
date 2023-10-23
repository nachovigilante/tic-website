import { ProjectType, StudentType } from "~/hooks/api/useProjects";
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
            className="flex h-fit min-w-[120px] cursor-pointer flex-col items-center gap-4 rounded-xl bg-white/10 p-5"
            onClick={() => {
                setFeaturedStudent(student);
                setModalOpen(true);
            }}
        >
            <div className="flex flex-col items-center justify-center">
                <div className="mb-1 h-12 w-12 rounded-full border border-white" />
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
                    "project-card max-w-full rounded-xl pt-0",
                    expanded && "w-full",
                )}
            >
                <div className="flex justify-between py-5">
                    <h2 className="text-xl">Notas</h2>
                    <div
                        onClick={() => setExpanded((e) => !e)}
                        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/10"
                    />
                </div>
                <div
                    className={twMerge(
                        "scroll-xs flex max-h-[450px] overflow-y-auto pr-4",
                        expanded && "w-full",
                    )}
                >
                    {featuredProject && expanded && (
                        <>
                            <div className="scroll-xs mb-5 flex flex-grow basis-[500px] items-center justify-center gap-5 overflow-x-auto px-5">
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
                            <div className="mr-5 h-[400px] w-8 border-r-2 border-gray-500/50" />
                        </>
                    )}
                    <Timeline className="mb-10" notes={notes} grades={grades} />
                </div>
            </div>
        </div>
    );
};
