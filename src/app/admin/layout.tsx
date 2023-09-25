"use client";

import Image from "next/image";
import { ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { twMerge } from "tailwind-merge";
import AdminLinkList from "~/components/admin/LinkList";
import useAuth from "~/hooks/auth/useAuth";
import useLogin from "~/hooks/auth/useLogin";

const queryClient = new QueryClient();

const Layout = ({ children }: { children: ReactNode }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const { auth } = useAuth();
    const { refreshToken } = useLogin();

    // console.log(auth);

    if (!auth.user) {
        void refreshToken();
    }

    return (
        <QueryClientProvider client={queryClient}>
            <div className="flex flex-row max-h-screen min-h-screen overflow-auto">
                <div
                    className={twMerge(
                        "bg-background-default transition-all delay-100 ease-linear text-white font-space font-bold",
                        isCollapsed ? "w-[4rem]" : "w-[12rem]",
                    )}
                    onMouseEnter={setIsCollapsed.bind(null, false)}
                    onMouseLeave={setIsCollapsed.bind(null, true)}
                >
                    <div className="bg-background-alt w-[100%] flex justify-center items-center gap-2 p-4 mb-4 cursor-pointer overflow-hidden">
                        <Image
                            src="/logo.svg"
                            alt="TIC://"
                            width={25}
                            height={25}
                        />
                        {!isCollapsed && (
                            <span className="animate-fadein no-ligature">
                                {"<Proyecto/>"}
                            </span>
                        )}
                    </div>
                    <AdminLinkList isCollapsed={isCollapsed} />
                </div>
                <div className="flex flex-1 overflow-y-auto">
                    <main
                        className="bg-background-dark w-[100%] min-h-screen max-h-screen p-14 font-space text-white space-y-5 overflow-auto"
                        style={{ backgroundImage: "url('/images/Cloudy.png')" }}
                        id="main-container"
                    >
                        {!auth.user ? <div>Loading...</div> : children}
                    </main>
                </div>
            </div>
        </QueryClientProvider>
    );
};

export default Layout;
