import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import Footer from "~/components/layout/Footer";
import Glassbox from "~/components/utils/Glassbox";
import Section from "~/components/utils/Section";
import Technology, {
    TechnologiesContainer,
} from "~/components/utils/Technologies";

const TechGlassBox = ({
    children,
    className,
    titles,
}: {
    children: React.ReactNode;
    className?: string;
    titles: string[];
}) => {
    return (
        <Glassbox>
            <div
                className={twMerge(
                    "text-3xl font-medium font-space no-ligature flex flex-col gap-2",
                    className,
                )}
            >
                {titles.map((title, index) => (
                    <h2 key={index}>{title}</h2>
                ))}
            </div>
            <p className="text-xl font-space font-extralight">{children}</p>
            <div className="flex justify-end">
                <button className="py-2 px-5 bg-dark-blue rounded-lg font-space w-fit mt-5">
                    Ver proyectos
                </button>
            </div>
        </Glassbox>
    );
};

const TechSection = ({
    titles,
    mirror,
    text,
    tech,
}: {
    titles: string[];
    mirror?: boolean;
    text: string;
    tech: string;
}) => {
    return (
        <div
            className={twMerge(
                "text-white min-h-screen gap-10 grid grid-rows-1 justify-center items-center max-w-[1200px] m-auto",
                mirror ? "grid-cols-tech-reverse" : "grid-cols-tech-section",
            )}
        >
            {mirror ? <Technology tech={tech} size={250} /> : null}
            <TechGlassBox titles={titles}>{text}</TechGlassBox>
            {mirror ? null : <Technology tech={tech} size={250} />}
        </div>
    );
};

const Tech: NextPage = () => {
    return (
        <>
            <Head>
                <title>TIC:// Tecnologías</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="bg-background-dark text-white pt-[67px]">
                <Section className="text-white min-h-screen flex flex-col justify-center items-center">
                    <div className="opacity-100 flex flex-col justify-center items-center mt-[-128px] absolute z-10 max-w-[1000px]">
                        <h1 className="text-7xl font-black font-raleway text-center mb-5 leading-[85px] max-w-[1000px] m-auto">
                            <span className="underline underline-offset-8 decoration-accent">
                                Tecnología
                            </span>{" "}
                            Innovación y Creatividad
                        </h1>
                        <h2 className="text-[27px] font-space font-light">
                            Las tecnologías que desarrollamos
                        </h2>
                        <TechnologiesContainer glow size={120} />
                    </div>
                    <div className="bg-colors-1 w-full h-[180%] absolute" />
                </Section>
                <TechSection
                    titles={["</Hardware>", "</Internet_de_las_cosas>"]}
                    text={`Gala in köttnorm. Kopimism terapeutisk kloning valpromenera.
                Spetspatient svenskad. Kärrtorpa bjudkaffe: som faktaresistens.
                Klimatflykting gåtåg lätthelg. Mjuk betalvägg plötslig vuxendöd.
                Den nya ekonomin serieotrohet. Givomat shoppingspion, respektive
                klimatlarm.`}
                    tech="hardware"
                />
                <TechSection
                    titles={["</Tecnología_Satelital>"]}
                    text={`Gala in köttnorm. Kopimism terapeutisk kloning valpromenera.
                Spetspatient svenskad. Kärrtorpa bjudkaffe: som faktaresistens.
                Klimatflykting gåtåg lätthelg. Mjuk betalvägg plötslig vuxendöd.
                Den nya ekonomin serieotrohet. Givomat shoppingspion, respektive
                klimatlarm.`}
                    tech="sat"
                    mirror
                />
                <TechSection
                    titles={["</Arte_Digital>", "</Impresión_3D>"]}
                    text={`Gala in köttnorm. Kopimism terapeutisk kloning valpromenera.
                Spetspatient svenskad. Kärrtorpa bjudkaffe: som faktaresistens.
                Klimatflykting gåtåg lätthelg. Mjuk betalvägg plötslig vuxendöd.
                Den nya ekonomin serieotrohet. Givomat shoppingspion, respektive
                klimatlarm.`}
                    tech="art"
                />
                <TechSection
                    titles={["</Videojuegos>", "</Realidad_Virtual>"]}
                    text={`Gala in köttnorm. Kopimism terapeutisk kloning valpromenera.
                Spetspatient svenskad. Kärrtorpa bjudkaffe: som faktaresistens.
                Klimatflykting gåtåg lätthelg. Mjuk betalvägg plötslig vuxendöd.
                Den nya ekonomin serieotrohet. Givomat shoppingspion, respektive
                klimatlarm.`}
                    tech="vr"
                    mirror
                />
                <TechSection
                    titles={[
                        "</Inteligencia_Artificial>",
                        "</Tecnología_Satelital>",
                        "</Blockchain>",
                    ]}
                    text={`Gala in köttnorm. Kopimism terapeutisk kloning valpromenera.
                Spetspatient svenskad. Kärrtorpa bjudkaffe: som faktaresistens.
                Klimatflykting gåtåg lätthelg. Mjuk betalvägg plötslig vuxendöd.
                Den nya ekonomin serieotrohet. Givomat shoppingspion, respektive
                klimatlarm.`}
                    tech="ia"
                />
                <Section className="flex justify-center h-[300px] mb-40">
                    <Link
                        href="/"
                        className="underline underline-offset-4 text-4xl font-space"
                    >
                        Ver plan de estudios de TIC 2022
                    </Link>
                </Section>
            </main>
            <Footer />
        </>
    );
};

export default Tech;
