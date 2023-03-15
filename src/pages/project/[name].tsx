import { NextPage } from "next";
import Head from "next/head";
import { technologies, Technology } from "~/components/utils/Technologies";

type ProjectInfo = {
    name: string;
    description: string;
    short_description: string;
    technologies: string[];
    images: string[];
    main_color: string;
};

type ProjectProps = {
    projectInfo: ProjectInfo;
};

const Project: NextPage<ProjectProps> = ({ projectInfo }) => {
    const tech = technologies.find(
        (t) => t.code === projectInfo.technologies[0],
    ) as Technology;

    return (
        <>
            <Head>
                <title>TIC:// {projectInfo.name}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main
                style={{ backgroundColor: projectInfo.main_color }}
                className="min-h-screen pt-[67px] text-white"
            >
                <div className="max-w-[1000px] m-auto pt-10">
                    <span className="font-space no-ligature text-4xl text-bold">{`<${tech.name}/>`}</span>
                    <h1 className="font-raleway text-8xl font-semibold mt-6">
                        {projectInfo.name}
                    </h1>
                    <p className="text-2xl mt-4">{projectInfo.description}</p>
                    <div className="flex items-start justify-start gap-20 mt-20">
                        <div className="max-w-[300px]">
                            <h3 className="font-space text-2xl font-semibold mb-2">
                                ¿Qué hace?
                            </h3>
                            <p className="text-lg">{projectInfo.short_description}</p>
                        </div>
                        <div className="min-w-[180px]">
                            <h3 className="font-space text-2xl font-semibold mb-2">
                                Etapa
                            </h3>
                            <p className="bg-[#e61366] px-2 py-1 rounded-md font-raleway font-semibold text-lg">
                                En desarrollo
                            </p>
                        </div>
                        <div className="flex-grow">
                            <h3 className="font-space text-2xl font-semibold mb-2">
                                Estudiantes
                            </h3>
                            <div>
                                <ul className="font-space text-xl font-light flex flex-col flex-wrap max-h-[150px] gap-x-10 gap-y-2">
                                    <li className="flex gap-2"><div className="profile-pic"></div>Carola O.</li>
                                    <li className="flex gap-2"><div className="profile-pic"></div>Facundo V.</li>
                                    <li className="flex gap-2"><div className="profile-pic"></div>Gonzalo B.</li>
                                    <li className="flex gap-2"><div className="profile-pic"></div>Julieta K.</li>
                                    <li className="flex gap-2"><div className="profile-pic"></div>Nicolas T.</li>
                                    <li className="flex gap-2"><div className="profile-pic"></div>Vincenzo P.</li>
                                    <li className="flex gap-2"><div className="profile-pic"></div>Daniel W.</li>
                                    <li className="flex gap-2"><div className="profile-pic"></div>Luis E.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="h-[1000px]"></div>
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
        images: ["image1", "image2"],
        main_color: "#000000",
    },
    {
        name: "Zerti",
        description: `An artificial intelligence (AI) deep learning approach for Tuberculosis (TB) detection in chest X-rays (CXR). IARA integrates multiple AI models to provide accurate and efficient predictions of TB in CXRs. The system is accessed via a web page designed to be user-friendly and intuitive to medical professionals, providing them with a reliable and valuable tool for TB detection.`,
        short_description: `Detección temprana de Tuberculosis en radiografías pulmonares mediante el uso de Inteligencia Artificial.`,
        technologies: ["blockchain"],
        images: ["image1", "image2"],
        main_color: "#30175c",
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
