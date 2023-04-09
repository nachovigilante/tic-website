import { type AppType } from "next/app";

import "~/styles/globals.css";
import Header from "~/components/layout/Header";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "~/contexts/AuthContext";
import { ShortcutsProvider } from "~/contexts/ShortcutsContext";
import Head from "next/head";

const queryClient = new QueryClient();

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ShortcutsProvider>
                <AuthProvider>
                    <QueryClientProvider client={queryClient}>
                        <Header />
                        <Component {...pageProps} />
                    </QueryClientProvider>
                </AuthProvider>
            </ShortcutsProvider>
        </>
    );
};

export default MyApp;
