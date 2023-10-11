import { Project, StudentType } from "~/hooks/api/useProjects";
import "~/styles/tracking.css";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { roles } from "~/data/categories";

const ProjectHeader = ({ project }: { project: Project }) => {
    console.log(project);
    return (
        <div className="mb4 flex">
            <ProjectCard project={project} key={project.id} />
            {project.students && <StudentCard students={project.students} />}
        </div>
    );
};

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <div className="project-card w-3/5 rounded-xl md:flex">
            <Image
                className="h-36 w-36 object-cover md:h-auto"
                src="/images/IARA.png"
                alt="IARA"
                width={200}
                height={200}
            />
            <div className="space-y-2 pl-6 pt-2 md:text-left">
                {project.areas.length > 0 && <div>{project.areas[0].name}</div>}
                <h1 className="bold text-lg font-bold tracking-wider">
                    {project.title}
                </h1>
                <p>{project.description}</p>
            </div>
        </div>
    );
};

const StudentCard = ({ students }: { students: StudentType[] }) => {
    if (students.length == 0) return null;
    if (students.length < 4) {
        return (
            <div className="student-card justify-left flex w-2/5 flex-col gap-2 rounded-xl">
                {students.map((student) => (
                    <div>
                        <StudentsItem student={student} key={student.id} />
                    </div>
                ))}
            </div>
        );
    } else {
        return (
            <div className="student-card grid w-2/5 auto-cols-max grid-flow-col gap-3 rounded-xl">
                <div className="justify-left flex flex-col gap-2">
                    {students.map(
                        (student, index) =>
                            index < 4 && (
                                <div>
                                    <StudentsItem
                                        student={student}
                                        key={student.id}
                                    />
                                </div>
                            ),
                    )}
                </div>
                <div className="justify-left flex flex-col gap-2">
                    {students.map(
                        (student, index) =>
                            index >= 4 && (
                                <div>
                                    <StudentsItem
                                        student={student}
                                        key={student.id}
                                    />
                                </div>
                            ),
                    )}
                </div>
            </div>
        );
    }
};

const defaultRole = {
    color: "#000000",
    name: "Sin rol",
    icon: "/images/default-role.svg",
};

const StudentsItem = ({ student }: { student: StudentType }) => {
    if (student.roles.length == 0) return null;
    console.log(student.roles[0]!.name.toLowerCase().replace("/", ""));
    const role =
        roles[student.roles[0]!.name.toLowerCase().replace("/", "")] ??
        defaultRole;

    const roleClass = "bg-role-" + role.name;
    const roleSvg = role.icon ?? "/images/default-role.svg";
    return (
        <div
            className={twMerge(
                "justify-left gaprounded-md flex items-center space-x-2 px-1",
                roleClass,
            )}
        >
            {student.classes && student.classes[0] && (
                <p>
                    {student.classes[0].level +
                        "°" +
                        student.classes[0].division}
                </p>
            )}

            <Image
                src={roleSvg}
                alt={role.name ?? "Sin rol"}
                width={30}
                height={30}
            />
            <p>{student.name + " " + student.lastName}</p>
        </div>
    );
};

export default ProjectHeader;
