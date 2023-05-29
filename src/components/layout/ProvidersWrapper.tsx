"use client";

import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "~/contexts/AuthContext";
import { ShortcutsProvider } from "~/contexts/ShortcutsContext";
import Header from "./Header";

const queryClient = new QueryClient();

const ProvidersWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <ShortcutsProvider>
            <AuthProvider>
                <QueryClientProvider client={queryClient}>
                    <Header />
                    {children}
                </QueryClientProvider>
            </AuthProvider>
        </ShortcutsProvider>
    );
};

export default ProvidersWrapper;
