"use client";

import { createContext, useState } from "react";
import { Project, StudentType } from "~/hooks/api/useProjects";

type FeaturedProjectContextType = {
    featuredProject: Project | undefined;
    featuredStudent: StudentType | undefined;
    modalOpen: boolean;
    setModalOpen: (open: boolean) => void;
    setFeaturedStudent: (student: StudentType) => void;
    setFeaturedProject: (project: Project) => void;
};

const FeaturedProjectContext = createContext({} as FeaturedProjectContextType);

export const FeaturedProjectProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [featuredStudent, setFeaturedStudent] = useState<StudentType>();
    const [featuredProject, setFeaturedProject] = useState<Project>();

    return (
        <FeaturedProjectContext.Provider
            value={{
                featuredProject,
                featuredStudent,
                modalOpen,
                setModalOpen,
                setFeaturedStudent,
                setFeaturedProject,
            }}
        >
            {children}
        </FeaturedProjectContext.Provider>
    );
};

export default FeaturedProjectContext;
