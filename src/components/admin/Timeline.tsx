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

const Item = (props: ItemProps) => {
    const { type, title } = props;
    const grade = "grade" in props ? props.grade : "";
    const content = "content" in props ? props.content : "";

    return (
        <li className="flex gap-6 items-center">
            <div
                className={twMerge(
                    "rounded-full h-10 w-10 flex justify-center items-center text-2xl",
                    type === "note" && "bg-gray-500 h-5 w-5 mx-[10px]",
                    type === "grade" &&
                        (grade === "A" || parseInt(grade) > 5) &&
                        "bg-green",
                    type === "grade" &&
                        (grade === "S" ||
                            (parseInt(grade) >= 5 && parseInt(grade) <= 6)) &&
                        "bg-grade-yellow",
                    type === "grade" &&
                        (grade === "P" || parseInt(grade) < 5) &&
                        "bg-red",
                )}
            >
                {grade}
            </div>
            <div
                className={twMerge(
                    "rounded-xl px-8 py-4 font-normal w-[370px] min-h-[70px] items-start justify-center flex text-xl flex-col",
                    type === "note" && "bg-white/10",
                    type === "grade" &&
                        (grade === "A" || parseInt(grade) > 5) &&
                        "bg-green",
                    type === "grade" &&
                        (grade === "S" ||
                            (parseInt(grade) >= 5 && parseInt(grade) <= 6)) &&
                        "bg-grade-yellow",
                    type === "grade" &&
                        (grade === "P" || parseInt(grade) < 5) &&
                        "bg-red",
                )}
            >
                <h2>{title}</h2>
                {type === "note" && (
                    <p className="text-sm text-white/50">{content}</p>
                )}
            </div>
        </li>
    );
};

const Timeline = () => {
    return (
        <div className="w-[460px] max-h-[500px] overflow-y-auto overflow-x-hidden grid grid-cols-[1fr_30fr] scroll-xs relative">
            <div className="left-[33px] h-[calc(100%-80px)] relative bg-gray-500 w-[4px] mt-10 " />
            <ul className="flex flex-col gap-6 relative">
                <Item
                    type="note"
                    title="Primera entrega"
                    content="Login, Register"
                />
                <Item grade="A" type="grade" title="1° Bimestre" />
                <Item
                    type="note"
                    title="Segunda entrega"
                    content="Muestra de personas con filtros. Carga de perfil"
                />
                <Item grade="4" type="grade" title="2° Bimestre" />
                <Item
                    type="note"
                    title="Tercera entrega"
                    content="Muestra de personas con filtros. Carga de perfil"
                />
                <Item grade="S" type="grade" title="3° Bimestre" />
                <Item
                    type="note"
                    title="Última entrega"
                    content="Muestra de personas con filtros. Carga de perfil"
                />
                <Item grade="7" type="grade" title="4° Bimestre" />
            </ul>
        </div>
    );
};

export default Timeline;
