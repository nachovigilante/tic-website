import { Project } from "~/hooks/api/useProjects";
import Modal from "../layout/Modal";

const ProjectModal = ({
    isOpen,
    onClose,
    project,
    close,
}: {
    isOpen: boolean;
    onClose?: () => void;
    project: Project | undefined;
    close: () => void;
}) => {
    if (!project) return <div>Loading...</div>;

    return (
        <Modal
            title={project.title}
            isOpen={isOpen}
            // close={close}
        >
            <div>Project Info</div>
        </Modal>
    );
};

export default ProjectModal;
