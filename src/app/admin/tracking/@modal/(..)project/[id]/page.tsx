import { useRouter } from "next/navigation";
import { useQuery } from "react-query";
import Modal from "~/components/layout/Modal";
import { useProjects } from "~/hooks/api/useProjects";

const ProjectModal = ({ params: { id } }: { params: { id: string } }) => {
    const { fetchProject } = useProjects();
    const router = useRouter();

    const {
        data: project,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["todos", id],
        queryFn: () => fetchProject(id),
    });

    if (!project) return <div>Loading...</div>;

    return (
        <Modal title={project.title} isOpen={true} close={() => router.back()}>
            <div>Project Info</div>
        </Modal>
    );
};

export default ProjectModal;
