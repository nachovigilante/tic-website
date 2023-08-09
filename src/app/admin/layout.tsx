"use client"

import Image from "next/image";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import AdminLinkList from "~/components/admin/LinkList";

const Layout = ({ children }: { children: React.ReactNode }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    return (
        <>
            <div className="flex flex-row max-h-[100vh] min-h-[100vh]">
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
                            <span className="animate-fadein">
                                {"<Proyecto/>"}
                            </span>
                        )}
                    </div>
                    <AdminLinkList isCollapsed={isCollapsed} />
                </div>
                <div className="flex flex-1 overflow-y-auto">{children}</div>
            </div>
        </>
    );
};

export default Layout;
