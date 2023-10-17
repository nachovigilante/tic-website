import Image from "next/image";
import { Project } from "~/hooks/api/useProjects";

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <div className="project-card w-3/5 rounded-xl md:flex">
            <Image
                className="h-36 w-36 object-cover md:h-auto"
                src="/images/IARA.png"
                alt="IARA"
                width={200}
                height={200}
            />
            <div className="space-y-2 pl-6 pt-2 md:text-left">
                {project.areas.length > 0 && <div>{project.areas[0].name}</div>}
                <h1 className="bold text-lg font-bold tracking-wider">
                    {project.title}
                </h1>
                <p>{project.description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
