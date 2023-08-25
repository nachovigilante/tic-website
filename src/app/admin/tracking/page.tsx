"use client";

import ProjectCard from "~/components/admin/ProjectCard";
import SearchBar from "~/components/admin/Searchbar";
import { type Project, useProjects } from "~/hooks/api/useProjects";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import ProjectModal from "~/components/admin/ProjectModal";

const Page = () => {
    const { fetchProjects } = useProjects();
    const [modalOpen, setModalOpen] = useState(false);
    const [featuredProject, setFeaturedProject] = useState<Project>();

    // Queries
    const {
        data: projects,
        isLoading,
        isError,
    } = useQuery({ queryKey: ["todos"], queryFn: fetchProjects });

    const [filteredProjects, setFilteredProjects] = useState<Project[]>(
        projects || [],
    );

    const filterProjects = (search: string) => {
        if (!projects) return;

        // console.log(projects);

        const filtered = projects.filter((project) => {
            const name = project.title.toLowerCase();
            // const category = project.category.toLowerCase();

            // return name.includes(search) || category.includes(search);
            return name.includes(search);
        });
        setFilteredProjects(filtered);
    };

    useEffect(() => {
        if (!projects) return;

        setFilteredProjects(projects);
    }, [projects]);

    return (
        <>
            <SearchBar onChange={(s) => filterProjects(s)} />
            <div className="flex flex-row width-[100%] gap-10 flex-wrap pt-14">
                {isLoading && <div>Loading...</div>}
                {isError && <div>Error</div>}
                {!isLoading &&
                    !isError &&
                    filteredProjects.map((project) => (
                        <ProjectCard
                            project={project}
                            key={project.id}
                            onClick={() => {
                                setFeaturedProject(project);
                                setModalOpen(true);
                            }}
                        />
                    ))}
            </div>
            <ProjectModal
                isOpen={modalOpen}
                project={featuredProject}
                close={() => setModalOpen(false)}
            />
        </>
    );
};

export default Page;
