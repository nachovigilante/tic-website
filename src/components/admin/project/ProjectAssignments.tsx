import { Project } from "~/hooks/api/useProjects";
import Assignemt from "../Assignment";
import { Masonry } from "./Masonry";

const ProjectAssignemts = ({ project }: { project: Project }) => {
    return (
        <div className="project-card flex-grow rounded-xl pr-4">
            <Masonry>
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
