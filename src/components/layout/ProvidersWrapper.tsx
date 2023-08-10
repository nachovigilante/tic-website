"use client";

import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "~/contexts/AuthContext";
import { ShortcutsProvider } from "~/utils/ShortcutsContext";
import Header from "./Header";
import { usePathname } from "next/navigation";

const queryClient = new QueryClient();

const ProvidersWrapper = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();

    return (
        <ShortcutsProvider>
            <AuthProvider>
                <QueryClientProvider client={queryClient}>
                    {!pathname.startsWith("/admin") && <Header />}
                    {children}
                </QueryClientProvider>
            </AuthProvider>
        </ShortcutsProvider>
    );
};

export default ProvidersWrapper;
