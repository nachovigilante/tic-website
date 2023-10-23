import Timeline, { Grade, Note } from "../Timeline";
import Modal from "~/components/layout/Modal";
import { StudentType } from "~/hooks/api/useProjects";

const StudentTimelineModal = ({
    student,
    notes,
    grades,
    isOpen,
    onClose,
}: {
    student: StudentType;
    notes: Note[];
    grades: Grade[];
    isOpen: boolean;
    onClose: () => void;
}) => {
    return (
        <Modal
            title={student.name + " " + student.lastName}
            isOpen={isOpen}
            onClose={onClose}
            className="bg-slate-600 pt-3 rounded-xl"
            headerClassName="min-w-[400px]"
        >
            <div className="flex justify-center py-10 px-5 overflow-y-auto scroll-xs max-h-[500px]">
                <Timeline notes={notes} grades={grades} />
            </div>
        </Modal>
    );
};

export default StudentTimelineModal;
