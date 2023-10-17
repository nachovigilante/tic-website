import { twMerge } from "tailwind-merge";

type ItemProps =
    | {
          type: "note";
          title: string;
          content: string;
      }
    | {
          type: "grade";
          title: string;
          grade: string;
      };

const GradeItem = ({ grade, title }: { grade: string; title: string }) => {
    const color =
        grade === "A" || parseInt(grade) > 5
            ? "bg-green"
            : grade === "S" || (parseInt(grade) >= 5 && parseInt(grade) <= 6)
            ? "bg-grade-yellow"
            : "bg-red";

    return (
        <li className="flex gap-6 items-center">
            <div
                className={twMerge(
                    "rounded-full h-10 w-10 flex justify-center items-center text-2xl",
                    color,
                )}
            >
                {grade}
            </div>
            <div
                className={twMerge(
                    "rounded-xl px-6 py-4 font-normal w-[370px] min-h-[70px] items-start justify-center flex text-xl flex-col",
                    color,
                )}
            >
                <h2>{title}</h2>
            </div>
        </li>
    );
};

const NoteItem = ({ title, content }: { title: string; content: string }) => {
    return (
        <li className="flex gap-6 items-center">
            <div className="rounded-full bg-gray-500 h-5 w-5 mx-[10px]" />
            <div className="rounded-xl px-6 py-4 font-normal w-[370px] min-h-[70px] items-start justify-center flex text-xl flex-col bg-white/10">
                <h2>{title}</h2>
                <p className="text-sm text-white/50">{content}</p>
            </div>
        </li>
    );
};

const Timeline = () => {
    return (
        <div className="w-[460px] max-h-[500px] overflow-y-auto overflow-x-hidden grid grid-cols-[1fr_30fr] scroll-xs relative">
            <div className="left-[33px] h-[calc(100%-80px)] relative bg-gray-500 w-[4px] mt-10 " />
            <ul className="flex flex-col gap-6 relative">
                <NoteItem title="Primera entrega" content="Login, Register" />
                <GradeItem grade="A" title="1° Bimestre" />
                <NoteItem
                    title="Segunda entrega"
                    content="Muestra de personas con filtros. Carga de perfil"
                />
                <GradeItem grade="4" title="2° Bimestre" />
                <NoteItem
                    title="Tercera entrega"
                    content="Muestra de personas con filtros. Carga de perfil"
                />
                <GradeItem grade="S" title="3° Bimestre" />
                <NoteItem
                    title="Última entrega"
                    content="Muestra de personas con filtros. Carga de perfil"
                />
                <GradeItem grade="7" title="4° Bimestre" />
            </ul>
        </div>
    );
};

export default Timeline;
