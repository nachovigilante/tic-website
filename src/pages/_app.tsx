import { type AppType } from "next/app";

import "~/styles/globals.css";
import Header from "~/components/layout/Header";
import Footer from "~/components/layout/Footer";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const MyApp: AppType = ({
    Component,
    pageProps: { ...pageProps },
}) => {
    return (
        <QueryClientProvider client={queryClient}>
                <Header />
                <Component {...pageProps} />
                <Footer />
        </QueryClientProvider>
    );
};

export default MyApp;
