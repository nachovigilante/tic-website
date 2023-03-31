import { type AppType } from "next/app";

import "~/styles/globals.css";
import Header from "~/components/layout/Header";
import Footer from "~/components/layout/Footer";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "~/contexts/AuthContext";

const queryClient = new QueryClient();

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
    return (
        <AuthProvider>
            <QueryClientProvider client={queryClient}>
                <Header />
                <Component {...pageProps} />
                <Footer />
            </QueryClientProvider>
        </AuthProvider>
    );
};

export default MyApp;
