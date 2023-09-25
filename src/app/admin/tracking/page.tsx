"use client";

import React from "react";
import ProjectCard from "~/components/admin/ProjectCard";
import SearchBar from "~/components/admin/Searchbar";
import { type Project, useProjects } from "~/hooks/api/useProjects";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

const Page = () => {
    const { fetchProjects } = useProjects();
    const [modalOpen, setModalOpen] = useState(false);

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

    // Scroll
    let mainContainer = document.getElementById("main-container");
    let target = document.getElementById("searchbar");
    
    mainContainer?.addEventListener("scroll", () => {
        if (!target || !mainContainer) return;
        const scroll = mainContainer.scrollTop;
        if (scroll > 30) {
            target.classList.add("absolute");
            target.classList.add("bg-blue-300");
            target.classList.add("ml-[-3.5rem]");
            target.classList.add("mt-[-3.5rem]");
        } else {
            target.classList.remove("absolute");
            target.classList.remove("bg-blue-300");
            target.classList.remove("mt-[-3.5rem]");
            target.classList.remove("ml-[-3.5rem]");
        }
    });

    return (
        <>
            <div 
                className="w-full p-3 transition-all duration-250 ease-linear"
                id="searchbar"
            >
                <SearchBar onChange={(s) => filterProjects(s)} />
            </div>
            <div 
                className="flex flex-row width-[100%] gap-10 flex-wrap pt-14"
                id="card-container"
            >
                {isLoading && <div>Loading...</div>}
                {isError && <div>Error</div>}
                {!isLoading &&
                    !isError &&
                    filteredProjects.map((project) => (
                        <ProjectCard project={project} key={project.id} />
                    ))}
            </div>
        </>
    );
};

export default Page;
