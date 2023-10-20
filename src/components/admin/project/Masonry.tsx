import { ReactNode } from "react";

export const Masonry = ({
    children,
    cols = 3,
}: {
    children: ReactNode;
    cols?: number;
}) => {
    const childrenArray = Array.from(children as Iterable<ReactNode>).flat();

    return (
        <div className="grid w-full grid-cols-3 gap-4 max-h-full overflow-y-auto scroll-xs pr-3">
            {Array.from({ length: cols }).map((_, i) => (
                <MasonryColumn key={i}>
                    {childrenArray
                        .filter((_, idx) => idx % cols === i)
                        .map((child) => (
                            <>{child}</>
                        ))}
                </MasonryColumn>
            ))}
        </div>
    );
};

export const MasonryColumn = ({ children }: { children: ReactNode }) => {
    return <div className="flex gap-4 flex-col justify-start">{children}</div>;
};
