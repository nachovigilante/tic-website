import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { type Project, type StudentType } from "~/hooks/api/useProjects";
import { roleIcons } from "~/data/images";
import { categories } from "~/data/categories";
import Link from "next/link";

const StudentsItem = ({ student }: { student: StudentType }) => {
    const role =
        student.roles.length > 0 ? student.roles[0]!.name.toLowerCase() : "?";

    const roleClass = "bg-role-" + role;
    const roleSvg = roleIcons[role] ?? "/images/default-role.svg";
    return (
        <div
            className={twMerge(
                "flex flex-row items-center bg-fuchsia-400 rounded-md px-1 space-x-1 shadow-md",
                roleClass,
            )}
        >
            <Image src={roleSvg} alt={role} width={24} height={24} />
            <span className="flex justify-center text-xs">{student.name}</span>
        </div>
    );
};

const ProjectCard = ({ project }: { project: Project }) => {
    const color = categories[project.categories[0]?.title.toLowerCase()]?.color ?? "#000000";
    return (
        <div 
            className="flex flex-col rounded-xl p-5 w-[15rem] gap-2 shadow-lg"
            style={{ backgroundColor: color }}
        >
            <div className="flex justify-between">
                <span className="text-[10px] no-ligature">
                    {"</" +
                        (project.areas.length > 0 ? project.areas[0].name : "?") +
                        ">"}
                </span>
                
            </div>
            <Link href={`/admin/tracking/project/${project.id}`}>
                <span className="text-xl font-bold">{project.title}</span>
            </Link>
            <Image src="/images/IARA.png" alt="IARA" width={200} height={200} />
            <div className="flex flex-col space-y-2">
                {project.students.map((student) => (
                    <StudentsItem student={student} key={student.name} />
                ))}
            </div>
        </div>
    );
};

export default ProjectCard;
