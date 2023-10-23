"use client";

import { createContext, useState } from "react";
import { useQuery } from "react-query";
import { ProjectType, StudentType, useProjects } from "~/hooks/api/useProjects";

type FeaturedProjectContextType = {
    featuredProject: ProjectType | undefined;
    featuredStudent: StudentType | undefined;
    modalOpen: boolean;
    setModalOpen: (open: boolean) => void;
    setFeaturedStudent: (student: StudentType) => void;
};

const FeaturedProjectContext = createContext({} as FeaturedProjectContextType);

export const FeaturedProjectProvider = ({
    children,
    projectId,
}: {
    children: React.ReactNode;
    projectId: string;
}) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [featuredStudent, setFeaturedStudent] = useState<StudentType>();
    const { fetchProject } = useProjects();

    const {
        data: featuredProject,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["todos", projectId],
        queryFn: () => fetchProject(projectId),
    });

    return (
        <>
            {isLoading && <div>Loading...</div>}
            {isError && <div>Error</div>}
            {!isLoading && !isError && featuredProject && (
                <FeaturedProjectContext.Provider
                    value={{
                        featuredProject,
                        featuredStudent,
                        modalOpen,
                        setModalOpen,
                        setFeaturedStudent,
                    }}
                >
                    {children}
                </FeaturedProjectContext.Provider>
            )}
        </>
    );
};

export default FeaturedProjectContext;
