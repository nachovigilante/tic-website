"use client";

import React from "react";
import ProjectCard from "~/components/admin/ProjectCard";
import SearchBar from "~/components/admin/Searchbar";
import { type Project, useProjects } from "~/hooks/api/useProjects";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import "~/styles/tracking.css"

const Page = () => {
    const { fetchProjects } = useProjects();
    const [modalOpen, setModalOpen] = useState(false);
    const [searchedStudents, setSearchedStudents] = useState<number[]>([]);

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
        if (search === "") { // Reset
            setFilteredProjects(projects);
            setSearchedStudents([]);
            return;
        };

        setSearchedStudents([]);
        const searchStudents: number[] = []; // Array of students ids
        const filtered = projects.filter((project) => {
            const name = project.title.toLowerCase();
            let hasStudent = false;
            project.students.forEach(student => {
                if (student.name.toLowerCase().includes(search.toLowerCase())) { 
                    searchStudents.push(student.id)
                    hasStudent = true;
                }
            });
            return name.includes(search) || hasStudent;
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
