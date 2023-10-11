"use client";

import { useQuery } from "react-query";
import ProjectHeader from "~/components/admin/project/ProjectHeader";
import { useProjects } from "~/hooks/api/useProjects";

const Page = ({ params: { id } }: { params: { id: string } }) => {
    const { fetchProject } = useProjects();

    const {
        data: project,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["todos", id],
        queryFn: () => fetchProject(id),
    });

    return (
        <>
            {isLoading && <div>Loading...</div>}
            {isError && <div>Error</div>}
            {!isLoading && !isError && project && (
                <ProjectHeader project={project} key={project.id} />
            )}
        </>
    );
};

export default Page;
