import { Project } from "~/hooks/api/useProjects";
import Modal from "../layout/Modal";

const ProjectModal = ({
    isOpen,
    onClose,
    project,
}: {
    isOpen: boolean;
    onClose?: () => void;
    project: Project | undefined;
}) => {
    if (!project) return <div>Loading...</div>;

    return (
        <Modal title={project.title} isOpen={isOpen} onClose={close}>
            <div>Project Info</div>
        </Modal>
    );
};

export default ProjectModal;
