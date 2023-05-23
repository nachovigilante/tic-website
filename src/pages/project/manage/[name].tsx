import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Footer from "~/components/layout/Footer";
import Technology, {
    technologies,
    TechnologyType,
} from "~/components/utils/Technologies";
import { ProjectInfo } from "../[name]";
import { twMerge } from "tailwind-merge";

type ProjectManageInfo = ProjectInfo & {
    classes: string[];
    grades: {
        1: "A" | "S" | "D" | "-";
        2: number | "-";
        3: "A" | "S" | "D" | "-";
        4: number | "-";
    };
};

type ProjectProps = {
    projectInfo: ProjectManageInfo;
};

const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
              r: parseInt(result[1]!, 16),
              g: parseInt(result[2]!, 16),
              b: parseInt(result[3]!, 16),
          }
        : null;
};

const Grade = ({ grade }: { grade: "A" | "S" | "D" | number | "-" }) => {
    return (
        <div
            className={twMerge(
                "rounded-full h-16 w-16 text-2xl font-semibold flex justify-center items-center",
                grade === "A"
                    ? "bg-green-500"
                    : grade === "S"
                    ? "bg-yellow"
                    : grade === "D"
                    ? "bg-red"
                    : "bg-gray-500",
            )}
        >
            <div className="text-shadow">{grade}</div>
        </div>
    );
};

const Grades = ({ grades }: { grades: ProjectManageInfo["grades"] }) => {
    return (
        <div className="flex gap-5 relative z-50">
            {Object.entries(grades).map(([key, value]) => (
                <Grade key={key} grade={value} />
            ))}
        </div>
    );
};

const ProjectHeader = ({
    name,
    classes,
    grades,
}: {
    name: string;
    classes: string[];
    grades: ProjectManageInfo["grades"];
}) => {
    return (
        <div className="flex items-center">
            <div className="flex flex-col items-center gap-10 mt-6">
                <h1 className="font-raleway text-8xl font-semibold">{name}</h1>
                <h2 className="font-mono font-semibold text-4xl">
                    {classes.join(", ")}
                </h2>
            </div>
            <Grades grades={grades} />
        </div>
    );
};

const Project: NextPage<ProjectProps> = ({ projectInfo }) => {
    const tech = technologies.find(
        (t) => t.code === projectInfo.technologies[0],
    ) as TechnologyType;

    const parsedColor = hexToRgb(projectInfo.main_color);

    console.log(parsedColor);

    return (
        <>
            <Head>
                <title>TIC:// {projectInfo.name}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main
                style={{
                    background: `linear-gradient(-35deg, rgba(${
                        parsedColor!.r
                    }, ${parsedColor!.g}, ${
                        parsedColor!.b
                    }, 1) 40%, rgba(45, 45, 45, 1) 100%)`,
                }}
                className="min-h-screen pt-[67px] text-white overflow-x-hidden"
            >
                <Technology
                    tech={tech.code}
                    size={1200}
                    className="absolute opacity-10 rotate-[35deg] right-[50px] top-[-120px] fade-bottom pointer-events-none"
                />
                <div className="max-w-[1000px] m-auto pt-10">
                    <span className="font-space no-ligature text-4xl text-bold">{`<${tech.name}/>`}</span>
                    <ProjectHeader
                        name={projectInfo.name}
                        classes={projectInfo.classes}
                        grades={projectInfo.grades}
                    />
                    <div className="flex items-start justify-start gap-20 mt-20">
                        <div className="max-w-[300px]">
                            <h3 className="font-space text-2xl font-semibold mb-2">
                                Descripción corta
                            </h3>
                            <p className="text-lg">
                                {projectInfo.short_description}
                            </p>
                            <div className="h-0 overflow-hidden">
                                <h3 className="font-space text-2xl font-semibold mb-2 mt-10">
                                    Descripción larga
                                </h3>
                                <p className="text-2xl mt-4">
                                    {projectInfo.description}
                                </p>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-space text-2xl font-semibold mb-2">
                                Estudiantes
                            </h3>
                            <div>
                                <ul className="font-space text-xl font-light flex flex-col flex-wrap max-h-[150px] gap-x-10 gap-y-2">
                                    {projectInfo.students.map((student) => (
                                        <li
                                            className="flex gap-2"
                                            key={student}
                                        >
                                            <div className="profile-pic"></div>
                                            {student}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </main>
        </>
    );
};

const projects = [
    {
        name: "IARA",
        description: `An artificial intelligence (AI) deep learning approach for Tuberculosis (TB) detection in chest X-rays (CXR). IARA integrates multiple AI models to provide accurate and efficient predictions of TB in CXRs. The system is accessed via a web page designed to be user-friendly and intuitive to medical professionals, providing them with a reliable and valuable tool for TB detection.`,
        technologies: ["ia"],
        short_description: `Detección temprana de Tuberculosis en radiografías pulmonares mediante el uso de Inteligencia Artificial.`,
        images: ["/images/IARA.png", "/images/IARA 2.png"],
        main_color: "#000000",
        students: [
            "Carola O.",
            "Facundo V.",
            "Gonzalo B.",
            "Julieta K.",
            "Nicolas T.",
            "Vincenzo P.",
            "Daniel W.",
            "Luis E.",
        ],
        classes: ["5°A", "5°B", "5°E"],
        grades: {
            1: "A",
            2: 8,
            3: "S",
            4: 10,
        },
    },
    {
        name: "Zerti",
        description: `An artificial intelligence (AI) deep learning approach for Tuberculosis (TB) detection in chest X-rays (CXR). IARA integrates multiple AI models to provide accurate and efficient predictions of TB in CXRs. The system is accessed via a web page designed to be user-friendly and intuitive to medical professionals, providing them with a reliable and valuable tool for TB detection.`,
        short_description: `Detección temprana de Tuberculosis en radiografías pulmonares mediante el uso de Inteligencia Artificial.`,
        technologies: ["blockchain"],
        images: ["/images/Zerti.png", "/images/IARA 2.png"],
        main_color: "#30175c",
        students: [
            "Naomi c.",
            "Lucas G. R.",
            "llan T.",
            "Victoria s.",
            "Candela L. B.",
            "Nicolas H.",
            "Matias A.",
            "Matilde A.",
            "Facundo F.",
        ],
        classes: ["5°C"],
        grades: {
            1: "A",
            2: 8,
            3: "-",
            4: "-",
        },
    },
];

export const getStaticPaths = () => {
    const paths = projects.map((project) => ({
        params: { name: project.name },
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = ({ params }: { params: { name: string } }) => {
    const projectInfo = projects.find(
        (project) => project.name.toLowerCase() === params.name.toLowerCase(),
    );

    return {
        props: {
            projectInfo,
        },
    };
};

export default Project;
