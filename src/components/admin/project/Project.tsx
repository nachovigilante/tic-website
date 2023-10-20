import { Project, StudentType } from "~/hooks/api/useProjects";
import StudentsCard from "./StudentsCard";
import ProjectCard from "./ProjectCard";
import Timeline, { Grade, Note } from "../Timeline";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import ProjectAssignemts from "./ProjectAssignments";

export const ProjectHeader = ({
    project,
    onStudentClick,
}: {
    project: Project;
    onStudentClick: (student: StudentType) => void;
}) => {
    return (
        <div className="mb4 flex">
            <ProjectCard project={project} key={project.id} />
            {project.students && (
                <StudentsCard
                    onStudentClick={onStudentClick}
                    students={project.students}
                />
            )}
        </div>
    );
};

const StudentTimeLine = ({
    notes,
    grades,
    student,
    onStudentClick,
}: {
    notes: Note[];
    grades: Grade[];
    student: StudentType;
    onStudentClick: (student: StudentType) => void;
}) => {
    return (
        <div
            className="rounded-xl bg-white/10 p-5 flex flex-col items-center gap-4 h-fit min-w-[120px] cursor-pointer"
            onClick={() => onStudentClick(student)}
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
    project,
    notes,
    grades,
    onStudentClick,
}: {
    project: Project;
    notes: Note[];
    grades: Grade[];
    onStudentClick: (student: StudentType) => void;
}) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="mb4 flex max-h-[550px]">
            {!expanded && (
                <ProjectAssignemts project={project} key={project.id} />
            )}
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
                    {expanded && (
                        <>
                            <div className="flex basis-[500px] gap-5 overflow-x-auto scroll-xs flex-grow mb-5 px-5 justify-center items-center">
                                {project.students &&
                                    project.students.map((student) => (
                                        <StudentTimeLine
                                            student={student}
                                            notes={notes}
                                            grades={grades}
                                            key={student.id}
                                            onStudentClick={onStudentClick}
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
