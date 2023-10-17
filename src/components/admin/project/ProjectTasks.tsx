import { AssignmentType, Project } from "~/hooks/api/useProjects";

const ProjectAssignemts = ({ project }: { project: Project }) => {
    return (
        <div className="project-card flex w-3/5 flex-col justify-center gap-2 rounded-xl">
            {project.assignemts &&
                project.assignemts.map((assignemt) => (
                    <ProjectAssignemt
                        assignemt={assignemt}
                        key={assignemt.id}
                    />
                ))}
            {!project.assignemts && <div>No hay tareas</div>}
        </div>
    );
};

const ProjectAssignemt = ({ assignemt }: { assignemt: AssignmentType }) => {
    return (
        <div>
            {assignemt && (
                <>
                    <h1 className="bold text-lg font-bold tracking-wider">
                        {assignemt.title}
                    </h1>
                    <p>{assignemt.description}</p>
                </>
            )}
        </div>
    );
};

export default ProjectAssignemts;
