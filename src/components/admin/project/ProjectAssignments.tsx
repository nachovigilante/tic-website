import { Project } from "~/hooks/api/useProjects";
import Assignemt from "../Assignment";
import { Masonry } from "./Masonry";
import useFeaturedProject from "~/hooks/useFeaturedProject";

const ProjectAssignments = () => {
    const { featuredProject } = useFeaturedProject();

    return (
        <div className="project-card flex-grow rounded-xl pr-4">
            {featuredProject && (
                <Masonry>
                    {featuredProject.assignments &&
                        featuredProject.assignments
                            .sort((a, b) => -1)
                            .map((assignment) => (
                                <Assignemt
                                    assignment={assignment}
                                    key={assignment.id}
                                />
                            ))}
                    {featuredProject.assignments &&
                        featuredProject.assignments
                            .sort((a, b) => -1)
                            .map((assignment) => (
                                <Assignemt
                                    assignment={assignment}
                                    key={assignment.id}
                                />
                            ))}
                    {featuredProject.assignments &&
                        featuredProject.assignments
                            .sort((a, b) => -1)
                            .map((assignment) => (
                                <Assignemt
                                    assignment={assignment}
                                    key={assignment.id}
                                />
                            ))}
                    {featuredProject.assignments &&
                        featuredProject.assignments
                            .sort((a, b) => -1)
                            .map((assignment) => (
                                <Assignemt
                                    assignment={assignment}
                                    key={assignment.id}
                                />
                            ))}
                    {featuredProject.assignments &&
                        featuredProject.assignments
                            .sort((a, b) => -1)
                            .map((assignment) => (
                                <Assignemt
                                    assignment={assignment}
                                    key={assignment.id}
                                />
                            ))}
                </Masonry>
            )}
        </div>
    );
};

export default ProjectAssignments;
