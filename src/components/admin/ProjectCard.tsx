import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { type Project, type StudentType } from "~/hooks/api/useProjects";
import { categories, roles } from "~/data/categories";
import Link from "next/link";

const defaultRole = {
    color: "#000000",
    name: "Sin rol",
    icon: "/images/default-role.svg",
}

const StudentsItem = ({ student, isSearched }: { student: StudentType, isSearched: boolean }) => {
    if (student.roles.length == 0) return null;
    const role = roles[student.roles[0]!.name.toLowerCase()] ?? defaultRole;

    const roleClass = "bg-role-" + role.name!;
    const roleSvg = role.icon ?? "/images/default-role.svg";
    return (
        <div
            className={twMerge(
                "flex flex-row items-center bg-fuchsia-400 rounded-md px-1 space-x-1 shadow-md",
                roleClass,
                isSearched ? "border-white border-2" : ""
            )}
        >
            <Image src={roleSvg} alt={role.name ?? "Sin rol"} width={24} height={24} />
            <span className="flex justify-center text-xs">{student.name}</span>
        </div>
    );
};

const ProjectCard = ({ project, searchedStudents }: { project: Project, searchedStudents: number[] }) => {
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
                    <StudentsItem 
                        student={student} 
                        key={student.id} 
                        isSearched={searchedStudents.includes(student.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectCard;
