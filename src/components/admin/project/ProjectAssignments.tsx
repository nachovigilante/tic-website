import { Project } from "~/hooks/api/useProjects";
import Assignemt from "../Assignment";
import { ReactNode, useRef } from "react";

const Masonry = ({ children }: { children: ReactNode }) => {
    const col1 = useRef<HTMLDivElement>(null);
    const col2 = useRef<HTMLDivElement>(null);
    const col3 = useRef<HTMLDivElement>(null);

    const cols = [col1, col2, col3];

    if (children && col1 && col2 && col3) {
        Array.from(children as Iterable<ReactNode>).forEach((child, i) => {
            cols[i % 3]!.current?.appendChild(child as Node);
        });
    }

    return (
        <div className="grid w-full grid-cols-3 gap-4">
            <div ref={col1} className="flex flex-col gap-4" />
            <div ref={col2} className="flex flex-col gap-4" />
            <div ref={col3} className="flex flex-col gap-4" />
        </div>
    );
};

const ProjectAssignemts = ({ project }: { project: Project }) => {
    return (
        <div className="project-card flex-grow rounded-xl">
            <Masonry>
                {project.assignments &&
                    project.assignments.map((assignment) => (
                        <Assignemt
                            assignment={assignment}
                            key={assignment.id}
                        />
                    ))}
                {project.assignments &&
                    project.assignments.map((assignment) => (
                        <Assignemt
                            assignment={assignment}
                            key={assignment.id}
                        />
                    ))}
                {project.assignments &&
                    project.assignments.map((assignment) => (
                        <Assignemt
                            assignment={assignment}
                            key={assignment.id}
                        />
                    ))}
                {project.assignments &&
                    project.assignments.map((assignment) => (
                        <Assignemt
                            assignment={assignment}
                            key={assignment.id}
                        />
                    ))}
                {project.assignments &&
                    project.assignments.map((assignment) => (
                        <Assignemt
                            assignment={assignment}
                            key={assignment.id}
                        />
                    ))}
            </Masonry>
        </div>
    );
};

export default ProjectAssignemts;
