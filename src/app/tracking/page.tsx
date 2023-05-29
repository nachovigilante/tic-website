import { Metadata } from "next";
import StudentsPage from "~/components/StudentsPage";

export const metadata: Metadata = {
    title: "TIC://PF/Seguimiento",
    description: "Tecnología Innovación y Creatividad",
};

const Page = () => {
    return <StudentsPage />;
};

export default Page;
