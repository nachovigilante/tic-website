import { StudentType } from "~/hooks/api/useProjects";
import { twMerge } from "tailwind-merge";
import { roles } from "~/data/categories";
import Image from "next/image";

const StudentsCard = ({
    students,
    onStudentClick,
}: {
    students: StudentType[];
    onStudentClick: (student: StudentType) => void;
}) => {
    return (
        <div className="project-card flex w-2/5 flex-col justify-center gap-2 rounded-xl">
            {students.length === 5 ? (
                <div className="flex gap-2">
                    <div className="justify-left flex w-1/2 flex-col gap-2">
                        {students.map(
                            (student, index) =>
                                index < 3 && (
                                    <div key={student.id}>
                                        <StudentsItem
                                            onStudentClick={onStudentClick}
                                            student={student}
                                        />
                                    </div>
                                ),
                        )}
                    </div>
                    <div className="justify-left flex w-1/2 flex-col gap-2">
                        {students.map(
                            (student, index) =>
                                index >= 3 && (
                                    <div key={student.id}>
                                        <StudentsItem
                                            onStudentClick={onStudentClick}
                                            student={student}
                                        />
                                    </div>
                                ),
                        )}
                    </div>
                </div>
            ) : (
                <div className="flex gap-2">
                    <div className="justify-left flex flex-col gap-2">
                        {students.map(
                            (student, index) =>
                                index < 4 && (
                                    <div key={student.id}>
                                        <StudentsItem
                                            onStudentClick={onStudentClick}
                                            student={student}
                                        />
                                    </div>
                                ),
                        )}
                    </div>
                    <div className="justify-left flex flex-col gap-2">
                        {students.map(
                            (student, index) =>
                                index >= 4 && (
                                    <div key={student.id}>
                                        <StudentsItem
                                            onStudentClick={onStudentClick}
                                            student={student}
                                        />
                                    </div>
                                ),
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

const defaultRole = {
    color: "#000000",
    name: "Sin rol",
    icon: "/images/default-role.svg",
};

const StudentsItem = ({
    student,
    onStudentClick,
}: {
    student: StudentType;
    onStudentClick: (student: StudentType) => void;
}) => {
    if (student.roles.length == 0) return null;
    console.log(student.roles[0]!.name.toLowerCase().replace("/", ""));
    const role =
        roles[student.roles[0]!.name.toLowerCase().replace("/", "")] ??
        defaultRole;

    const roleClass = "bg-role-" + (role.name as string);
    const roleSvg = role.icon ?? "/images/default-role.svg";
    return (
        <div
            className={twMerge(
                "justify-left gaprounded-md flex items-center space-x-2 px-2 cursor-pointer hover:bg-white/10 rounded-md active:bg-white/20",
                roleClass,
            )}
            onClick={() => onStudentClick(student)}
        >
            {student.classes && student.classes[0] && (
                <p>
                    {`${student.classes[0].level}°${student.classes[0].division}`}
                </p>
            )}

            <Image
                src={roleSvg}
                alt={role.name ?? "Sin rol"}
                width={30}
                height={30}
            />
            <p className="truncate">{`${student.name.split(" ")[0]!} ${
                student.lastName
            }`}</p>
        </div>
    );
};

export default StudentsCard;
