"use client";

import { useQuery } from "react-query";
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

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error</div>;

    return <div>{project!.title}</div>;
};

export default Page;
