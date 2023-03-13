import { twMerge } from "tailwind-merge";

type SectionProps = {
    children: React.ReactNode;
    className?: string;
};

const Section = ({ children, className }: SectionProps) => {
    return (
        <section
            className={twMerge(
                className,
                "flex justify-center items-center",
            )}
        >
            <div className="w-[1200px] m-auto flex justify-center items-center">
                {children}
            </div>
        </section>
    );
};

export default Section;
