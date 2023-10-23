import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export type Note = {
    title: string;
    content: string;
    issueDate: Date;
    term: "1° Bimestre" | "2° Bimestre" | "3° Bimestre" | "4° Bimestre";
};

type GradeTitle = "1° Bimestre" | "2° Bimestre" | "3° Bimestre" | "4° Bimestre";

export type Grade = {
    title: GradeTitle;
    grade: string;
    issueDate: Date;
};

const NoteItem = ({
    n: { title, content },
    size,
}: {
    n: Note;
    size: "large" | "small";
}) => {
    return (
        <li className="flex gap-6 items-center">
            <div
                className={twMerge(
                    "rounded-full bg-gray-500 h-5 w-5 mx-[10px]",
                    size === "small" && "mx-[13px]",
                )}
            />
            {size === "large" && (
                <div className="rounded-xl px-5 py-3 font-normal w-[270px] min-h-[70px] items-start justify-center flex text-base flex-col bg-white/10">
                    <h2>{title}</h2>
                    <p className="text-sm text-white/50">{content}</p>
                </div>
            )}
        </li>
    );
};

const GradeItem = ({
    g: { grade, title },
    size,
    notes,
}: {
    g: Grade;
    size: "large" | "small";
    notes: Note[];
}) => {
    const color =
        grade === "A" || parseInt(grade) > 5
            ? "bg-green"
            : grade === "S" || (parseInt(grade) >= 5 && parseInt(grade) <= 6)
            ? "bg-grade-yellow"
            : "bg-red";

    const [expanded, setExpanded] = useState(false);

    return (
        <>
            <li className="flex gap-6 items-center">
                <div
                    className={twMerge(
                        "rounded-full h-10 w-10 flex justify-center items-center text-2xl",
                        color,
                        size === "small" && "h-11 w-11",
                    )}
                >
                    {grade}
                </div>
                {size === "large" && (
                    <div
                        className={twMerge(
                            "rounded-xl pl-6 pr-4 py-2 font-normal w-[270px] min-h-[60px] items-center justify-between flex text-xl",
                            color,
                        )}
                    >
                        <h2>{title}</h2>
                        <div
                            className="cursor-pointer hover:bg-black/10 py-1 px-2 rounded-md"
                            onClick={() => setExpanded(!expanded)}
                        >
                            V
                        </div>
                    </div>
                )}
            </li>
            {expanded &&
                notes.map((item, i) => (
                    <NoteItem n={item} key={i} size={size} />
                ))}
        </>
    );
};

const Timeline = ({
    className,
    notes,
    grades,
    size = "large",
}: {
    className?: string;
    notes: Note[];
    grades: Grade[];
    size?: "large" | "small";
}) => {
    const scroll = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        const element = scroll.current;
        element?.scrollTo({
            top: element.scrollHeight,
            behavior: "smooth",
        });
    };

    if (scroll.current) scrollToBottom();

    return (
        <div
            ref={scroll}
            className={twMerge(
                "w-[370px] overflow-y-auto overflow-x-hidden grid grid-cols-[1fr_30fr] scroll-xs relative",
                className,
                size === "small" && "w-[55px]",
            )}
        >
            <div
                className={twMerge(
                    "left-[30px] h-[calc(100%-80px)] relative bg-gray-500 w-[4px] mt-10",
                    size === "small" && "left-[25px] mt-4 h-[calc(100%-50px)]",
                )}
            />
            <ul className="flex flex-col gap-4 relative">
                {grades.map((item, i) => (
                    <GradeItem
                        g={item}
                        key={i}
                        size={size}
                        notes={notes.filter((note) => note.term === item.title)}
                    />
                ))}
            </ul>
        </div>
    );
};

export default Timeline;
