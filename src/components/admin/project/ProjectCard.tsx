import Image from "next/image";
import useFeaturedProject from "~/hooks/useFeaturedProject";

const ProjectCard = () => {
    const { featuredProject } = useFeaturedProject();

    return (
        <div className="project-card w-3/5 rounded-xl md:flex">
            {featuredProject && (
                <>
                    <Image
                        className="h-36 w-36 object-cover md:h-auto"
                        src="/images/IARA.png"
                        alt="IARA"
                        width={200}
                        height={200}
                    />
                    <div className="space-y-2 pl-6 pt-2 md:text-left">
                        {featuredProject.areas.length > 0 && (
                            <div>{featuredProject.areas[0].name}</div>
                        )}
                        <h1 className="bold text-lg font-bold tracking-wider">
                            {featuredProject.title}
                        </h1>
                        <p>{featuredProject.description}</p>
                    </div>
                </>
            )}
        </div>
    );
};

export default ProjectCard;
