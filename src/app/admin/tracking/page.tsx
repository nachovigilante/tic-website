"use client";

import ProjectCard from "~/components/admin/ProjectCard";
import SearchBar from "~/components/admin/Searchbar";
import { type Project, useProjects } from "~/hooks/api/useProjects";
import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";

const Page = () => {
    const queryClient = useQueryClient();
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

    // const filterProjects = (search: string) => {
    //     if (!projects) return;

    //     console.log(projects);

    //     const filtered = projects.filter((project) => {
    //         const name = project.name.toLowerCase();
    //         const category = project.category.toLowerCase();

    //         return name.includes(search) || category.includes(search);
    //     });
    //     setFilteredProjects(filtered);
    // };

    useEffect(() => {
        if (!projects) return;

        console.log(projects);
    }, [projects]);

    if (isLoading) return <div>Loading...</div>;

    if (isError) return <div>Error</div>;

    return (
        <main
            className="bg-background-dark w-[100%] min-h-screen font-space text-white p-14 space-y-5"
            style={{ backgroundImage: "url('/images/Cloudy.png')" }}
        >
            {/* <SearchBar onChange={() => {})} /> */}
            <div className="flex flex-row width-[100%] gap-10 flex-wrap">
                {/* {projects!.map((project) => (
                    <ProjectCard project={project} key={project.id} />
                ))} */}
            </div>
        </main>
    );
};

export default Page;
