import Link from "next/link";
import Footer from "~/components/layout/Footer";
import Technology, {
    technologies,
    TechnologyType,
} from "~/components/utils/Technologies";

export type ProjectInfo = {
    name: string;
    description: string;
    short_description: string;
    technologies: string[];
    images: string[];
    main_color: string;
    students: string[];
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

const projects = {
    iara: {
        name: `IARA`,
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
    },
    zerti: {
        name: `Zerti`,
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
    },
} as Record<string, ProjectInfo>;

const Page = ({ params }: { params: { slug: string } }) => {
    if (!projects[params.slug]) {
        return <div>404</div>;
    }

    const projectInfo = projects[params.slug]!;

    const tech = technologies.find(
        (t) => t.code === projectInfo.technologies[0],
    ) as TechnologyType;

    const parsedColor = hexToRgb(projectInfo.main_color);

    // console.log(parsedColor);

    return (
        <>
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
                    <h1 className="font-raleway text-8xl font-semibold mt-6">
                        {projectInfo.name}
                    </h1>
                    <p className="text-2xl mt-4">{projectInfo.description}</p>
                    <div className="flex items-start justify-start gap-20 mt-20">
                        <div className="max-w-[300px]">
                            <h3 className="font-space text-2xl font-semibold mb-2">
                                ¿Qué hace?
                            </h3>
                            <p className="text-lg">
                                {projectInfo.short_description}
                            </p>
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
                                    {/* <li className="flex gap-2">
                                        <div className="profile-pic"></div>
                                        Carola O.
                                    </li> */}
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
                    <div className="grid grid-cols-2 grid-rows-2 justify-center items-center mt-40">
                        <img src={projectInfo.images[0]} alt="" />
                        <Technology tech={tech.code} size={220} />
                        <img
                            src="/images/project_decoration.svg"
                            alt="decoration"
                            className="m-auto"
                        />
                        <img src={projectInfo.images[1]} alt="" />
                    </div>
                    <div className="flex justify-center h-[500px] pt-[150px] pb-[600px]">
                        <Link
                            href="/"
                            className="underline text-3xl font-space"
                        >
                            Ver más proyectos de {tech.name}
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Page;
