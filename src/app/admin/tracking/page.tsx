"use client";

import ProjectCard from "~/components/admin/ProjectCard";
import SearchBar from "~/components/admin/Searchbar";
import { type Project, useProjects } from "~/hooks/api/useProjects";
import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";

const Page = () => {
    const { fetchProjects } = useProjects();

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

    if (isLoading) return <div>Loading...</div>;

    if (isError) return <div>Error</div>;

    return (
        <>
            <SearchBar onChange={(s) => filterProjects(s)} />
            <div className="flex flex-row width-[100%] gap-10 flex-wrap">
                {filteredProjects.map((project) => (
                    <ProjectCard project={project} key={project.id} />
                ))}
            </div>
        </>
    );
};

export default Page;
