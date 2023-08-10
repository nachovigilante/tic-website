"use client"

import ProjectCard from "~/components/admin/ProjectCard";
import SearchBar from "~/components/admin/Searchbar";
import { projects, type Project } from "~/hooks/api/useProjects";
import { useState } from "react";

const Page = () => {
    const [filteredProjects, setFilteredProjects] =
        useState<Project[]>(projects);

    const filterProjects = (search: string) => {
        const filtered = projects.filter((project) => {
            const name = project.name.toLowerCase();
            const category = project.category.toLowerCase();

            return name.includes(search) || category.includes(search);
        });
        setFilteredProjects(filtered);
    };

    return (
        <main
            className="bg-background-dark w-[100%] min-h-screen font-space text-white p-14 space-y-5"
            style={{ backgroundImage: "url('/images/Cloudy.png')" }}
        >
            <SearchBar onChange={filterProjects} />
            <div className="flex flex-row width-[100%] gap-10 flex-wrap">
                {filteredProjects.map((project) => (
                    <ProjectCard project={project} key={project.id} />
                ))}
            </div>
        </main>
    );
};

export default Page;
