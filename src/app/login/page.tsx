import { Metadata } from "next";
import LoginPage from "~/components/LoginPage";

export const metadata: Metadata = {
    title: "TIC://Login",
};

const Page = () => {
    return <LoginPage />;
};

export default Page;
