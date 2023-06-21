export type Errors = {
    dni: boolean;
    pass: boolean;
    user: boolean;
};

export const LoginForm = ({
    children,
    handleSubmit,
    SideBar,
}: {
    children: React.ReactNode;
    isTeacher: boolean;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    SideBar: React.FC;
}) => {
    return (
        <form
            action=""
            className="glass flex h-[500px] m-auto justify-between relative"
            onSubmit={handleSubmit}
        >
            <div className="flex flex-col items-center p-10 w-50">
                <SideBar />
            </div>
            <div className="relative -top-[1px] left-[1px] h-[501px] bg-background-default border-background-default border rounded-r-2xl py-8 px-16 flex flex-col justify-start gap-5">
                {children}
            </div>
        </form>
    );
};
