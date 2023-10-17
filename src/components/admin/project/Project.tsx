import { Project } from "~/hooks/api/useProjects";
import "~/styles/tracking.css";
import StudentsCard from "./StudentsCard";
import ProjectCard from "./ProjectCard";
import ProjectAssignemts from "./ProjectTasks";

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
    return (
        <div className="mb4 flex">
            <ProjectAssignemts project={project} key={project.id} />
        </div>
    );
};

export default Project;
