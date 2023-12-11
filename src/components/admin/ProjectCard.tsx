import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { type ProjectType, type StudentType } from "~/hooks/api/useProjects";
import { categories, roles } from "~/data/categories";
import Link from "next/link";

const defaultRole = {
    color: "#000000",
    name: "Sin rol",
    icon: "/images/default-role.svg",
};

const StudentsItem = ({ student }: { student: StudentType }) => {
    if (student.roles.length == 0) return null;
    //console.log(student.roles[0]!.name);
    const role = roles[student.roles[0]!.name.toLowerCase()] ?? defaultRole;

    const roleClass = "bg-role-" + (role.name as string);
    const roleSvg = role.icon ?? "/images/default-role.svg";
    return (
        <div
            className={twMerge(
                "flex flex-row items-center space-x-1 rounded-md bg-fuchsia-400 px-1 shadow-md",
                roleClass,
            )}
        >
            <Image
                src={roleSvg}
                alt={role.name ?? "Sin rol"}
                width={24}
                height={24}
            />
            <span className="flex justify-center text-xs">
                {student.name + " " + student.lastName}
            </span>
        </div>
    );
};

const ProjectCard = ({
    project,
    noImage = false,
    noArea = false,
}: {
    project: ProjectType;
    noImage?: boolean;
    noArea?: boolean;
}) => {
    const color =
        categories[project.categories[0]?.title.toLowerCase()]?.color ??
        "#000000";
    return (
        <Link
            href={`/admin/tracking/project/${project.id}`}
            className="flex w-[15rem] flex-col gap-2 rounded-xl p-5 shadow-lg"
            style={{ backgroundColor: color }}
        >
            {!noArea && (
                <div className="flex justify-between">
                    <span className="no-ligature text-[10px]">
                        {"</" +
                            (project.areas.length > 0
                                ? project.areas[0].name
                                : "?") +
                            ">"}
                    </span>
                </div>
            )}
            <span className="text-xl font-bold">{project.title}</span>
            {!noImage && (
                <Image
                    src="/images/IARA.png"
                    alt="IARA"
                    width={200}
                    height={200}
                />
            )}
            <div className="flex flex-col space-y-2">
                {project.students.map((student) => (
                    <StudentsItem student={student} key={student.id} />
                ))}
            </div>
        </Link>
    );
};
export { StudentsItem };
export default ProjectCard;
