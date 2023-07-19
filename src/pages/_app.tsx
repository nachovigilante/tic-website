import "~/styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "~/contexts/AuthContext";
import { ShortcutsProvider } from "~/contexts/ShortcutsContext";
import { type MyAppProps } from "~/components/types";
import { Layouts } from "~/components/layouts/Layouts";
import Head from "next/head";

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: MyAppProps) => {
    const Layout = Layouts[Component.Layout] ?? ((page) => page);
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ShortcutsProvider>
                <AuthProvider>
                    <QueryClientProvider client={queryClient}>
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </QueryClientProvider>
                </AuthProvider>
            </ShortcutsProvider>
        </>
    );
};

export default MyApp;
