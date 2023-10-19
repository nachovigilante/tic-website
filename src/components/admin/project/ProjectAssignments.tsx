import { Project } from "~/hooks/api/useProjects";
import Assignemt from "../Assignment";
import { ReactNode, useRef } from "react";

const MasonryColumn = ({ children }: { children: ReactNode }) => {
    return <div className="flex gap-4 flex-col justify-start">{children}</div>;
};

const Masonry = ({
    children,
    cols = 3,
}: {
    children: ReactNode;
    cols: number;
}) => {
    const childrenArray = Array.from(children as Iterable<ReactNode>).flat();
    console.log(childrenArray);

    return (
        <div className="grid w-full grid-cols-3 gap-4 max-h-full overflow-y-auto scroll-xs pr-3">
            {Array.from({ length: cols }).map((_, i) => (
                <MasonryColumn key={i}>
                    {childrenArray
                        .filter((_, idx) => idx % cols === i)
                        .map((child) => (
                            <>{child}</>
                        ))}
                </MasonryColumn>
            ))}
        </div>
    );
};

const ProjectAssignemts = ({ project }: { project: Project }) => {
    return (
        <div className="project-card flex-grow rounded-xl pr-4">
            <Masonry cols={3}>
                {project.assignments &&
                    project.assignments
                        .sort((a, b) => -1)
                        .map((assignment) => (
                            <Assignemt
                                assignment={assignment}
                                key={assignment.id}
                            />
                        ))}
                {project.assignments &&
                    project.assignments
                        .sort((a, b) => -1)
                        .map((assignment) => (
                            <Assignemt
                                assignment={assignment}
                                key={assignment.id}
                            />
                        ))}
                {project.assignments &&
                    project.assignments
                        .sort((a, b) => -1)
                        .map((assignment) => (
                            <Assignemt
                                assignment={assignment}
                                key={assignment.id}
                            />
                        ))}
                {project.assignments &&
                    project.assignments
                        .sort((a, b) => -1)
                        .map((assignment) => (
                            <Assignemt
                                assignment={assignment}
                                key={assignment.id}
                            />
                        ))}
                {project.assignments &&
                    project.assignments
                        .sort((a, b) => -1)
                        .map((assignment) => (
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
