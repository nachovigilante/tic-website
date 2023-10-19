import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { AssignmentType } from "~/hooks/api/useProjects";

const Assignemt = ({ assignment }: { assignment: AssignmentType }) => {
    if (assignment == null) return <></>;

    const date = new Date(
        !assignment.completed ? assignment.issueDate : assignment.completed,
    ).toLocaleString("es-AR", {
        dateStyle: "short",
    });

    return (
        <div
            className={twMerge(
                "flex h-auto min-h-[70px] w-full flex-col items-start justify-center rounded-xl bg-white/10 px-6 py-4 text-xl font-normal",
                assignment.completed && "bg-green",
            )}
        >
            <div className="flex flex-row gap-4">
                <Image
                    className="h-8 w-8 object-scale-down md:h-auto"
                    src={
                        assignment.completed
                            ? "/images/check-transparent.png"
                            : "/images/todo-transparent.png"
                    }
                    alt="TIC://"
                    width={25}
                    height={25}
                />
                <div className="flex flex-col">
                    <div className="flex w-full justify-between">
                        <h1 className="bold text-lg font-bold tracking-wider">
                            {assignment.title}
                        </h1>
                        <div className="flex items-center gap-1">
                            <p className="text-sm text-white/50">{date}</p>
                            <Image
                                src="/logo.svg"
                                alt="TIC://"
                                width={25}
                                height={25}
                            />
                        </div>
                    </div>
                    <p className="text-sm text-white/50">
                        {assignment.description}
                        {assignment.completed &&
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus"}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Assignemt;
