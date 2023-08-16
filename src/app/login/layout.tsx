import type { Metadata } from "next";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import useAuth from "~/hooks/auth/useAuth";

export const metadata: Metadata = {
    title: "TIC://Login",
};

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <main className="h-screen overflow-y-hidden bg-background-dark pt-[67px]">
                <div className="relative z-50 flex h-full font-raleway text-white justify-center items-center">
                    {children}
                </div>
                <div className="bg-colors-1 absolute -mt-[1000px] h-[140%] w-full" />
            </main>
        </>
    );
};

export default Layout;
