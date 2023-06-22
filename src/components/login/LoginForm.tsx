export type Errors = {
    dni: boolean;
    pass: boolean;
    user: boolean;
};

export type LoginProps = { // no estoy seguro donde declarar esto
    redirectToHome: () => void;
    toggleRole: () => void;
}

export const LoginForm = ({
    children,
    handleSubmit,
    SideBar,
    toggleRoleText,
    toggleRole
}: {
    children: React.ReactNode;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    SideBar: React.FC;
    toggleRoleText: string;
    toggleRole: () => void;
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
                <h2 className="text-4xl font-semibold mb-5">Ingresar</h2>
                {children}
                <button
                    className="relative input active:scale-[99%] bg-accent"
                    type="submit"
                >
                    Ingresar
                </button>
                <p className="text-sm underline cursor-pointer self-center" onClick={toggleRole}>
                    {toggleRoleText}
                </p>
                <div className="flex flex-col gap-2 border-1 border-white/10 rounded-xl p-4 relative bottom-0">
                    <h4 className="text-md font-semibold">¿No tenés cuenta?</h4>
                    <p className="text-sm">
                        Acercate a pedir tu clave a algún profe de Proyecto Final de
                        5to año
                    </p>
                </div>
            </div>
        </form>
    );
};
