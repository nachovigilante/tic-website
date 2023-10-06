"use client";

import React from "react";
import ProjectCard from "~/components/admin/ProjectCard";
import SearchBar from "~/components/admin/Searchbar";
import { type Project, useProjects } from "~/hooks/api/useProjects";
import { useCategoryFilters } from "~/hooks/utils/useFilters";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import "~/styles/tracking.css"

const Page = () => {
    const { fetchProjects } = useProjects();
    // const [modalOpen, setModalOpen] = useState(false);
    const [searchedStudents, setSearchedStudents] = useState<number[]>([]);
    const [categoryFilters, filterDispatch] = useCategoryFilters();

    // Queries
    const {
        data: projects,
        isLoading,
        isError,
    } = useQuery({ queryKey: ["todos"], queryFn: fetchProjects });


    // Search Projects
    const [filteredProjects, setFilteredProjects] = useState<Project[]>(
        projects || [],
    );

    const filterProjects = (search: string) => {
        
        if (!projects) return;
        if (search === "") { // Reset
            setFilteredProjects(projects);
            setSearchedStudents([]);
            return;
        };
        
        search = search.toLowerCase();
        // Removes categories from search
        categoryFilters.forEach(filter => {
            search = search.replace(filter, "");
        });
        // Removes empty spaces
        search = search.replace(/\s+/g, '');

        setSearchedStudents([]);
        const searchStudents: number[] = []; // Array of students ids
        const filtered = projects.filter((project) => {
            // Check if at least one student matches
            let hasStudent = false;
            project.students.forEach(student => {
                if (search && student.name.toLowerCase().includes(search.toLowerCase())) { 
                    searchStudents.push(student.id)
                    hasStudent = true;
                }
            });

            const name = project.title.toLowerCase();
            return (
                name.includes(search) || hasStudent
            ) && (
                categoryFilters.length === 0 
                    || categoryFilters.includes(project.categories[0]?.title.toLowerCase()) 
            );
        });

        setSearchedStudents(searchStudents);
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
            target.classList.add("fixed-searchbar");
        } else {
            target.classList.remove("fixed-searchbar");
        }
    });

    return (
        <>
            <div 
                className="w-full transition-all duration-500 ease-in-out"
                id="searchbar"
            >
                <SearchBar 
                    onChange={(s) => filterProjects(s)}
                    filterDispatch={filterDispatch}
                />
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
                        <ProjectCard 
                            project={project} 
                            key={project.id} 
                            searchedStudents={searchedStudents} 
                        />
                    ))}
            </div>  
        </>
    );
};

export default Page;
