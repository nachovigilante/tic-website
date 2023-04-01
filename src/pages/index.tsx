import { type NextPage } from "next";
import Head from "next/head";
import { TitledGlassBox } from "~/components/utils/Glassbox";
import Section from "~/components/utils/Section";

import TICExperienceSVG from "../../public/images/tic-experience.svg";
import { TechnologiesContainer } from "~/components/utils/Technologies";
import useShortcuts from "~/hooks/shortcuts/useShortcuts";
import Footer from "~/components/layout/Footer";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>TIC://</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="pt-[67px] bg-background-dark pb-[1000px]">
                <Section className="text-white min-h-screen">
                    <div className="opacity-100 flex flex-col justify-center items-center mt-[-128px] absolute z-10 max-w-[1000px]">
                        <h1 className="text-7xl font-black font-raleway text-center mb-5 leading-[85px]">
                            Tecnología Innovación y Creatividad
                        </h1>
                        <h2 className="text-[27px] font-space font-light">
                            Especialización de la Escuela ORT
                        </h2>
                    </div>
                    <div className="bg-colors-1 w-full h-[180%] absolute" />
                </Section>
                <Section className="h-fit pb-64">
                    <TitledGlassBox
                        className="max-w-4xl"
                        title="</Tecnología de la Información y la Comunicación>"
                    >
                        <p className="text-xl font-space font-extralight mt-4">
                            ¿Te interesa conocer sobre Inteligencia Artificial?
                            ¿Te gustaría producir tu propio videojuego con
                            Realidad Virtual? ¿Querés usar drones, impresoras 3D
                            y cámaras 360? ¿Queres construir tu robot o
                            controlar tu casa de forma remota? ¿Crees que la
                            tecnología está innovando todos los sectores y
                            querés ser protagonista del futuro? Entonces, ¡TIC
                            es para vos! En esta especialización los alumnos
                            aprenden a desarrollar sus propios proyectos
                            tecnológicos, utilizando las últimas tecnologías.
                        </p>
                    </TitledGlassBox>
                </Section>
                <Section className="text-white m-auto min-h-screen">
                    <h1 className="text-7xl font-black font-raleway text-center mb-5 leading-[85px] max-w-[1000px]">
                        Descubrí las tecnologías que desarrollamos
                    </h1>
                    <TechnologiesContainer glow color />
                </Section>
                <Section className="h-screen m-auto tic-experience-shadow">
                    <div className="absolute z-10 flex justify-center flex-col items-center">
                        <TICExperienceSVG className="max-w-[1000px]" />
                        <h2 className="max-w-[1000px] text-white text-[27px] font-space font-light mt-12">
                            Conocé los proyectos de la edición pasada
                        </h2>
                    </div>
                    <div className="bg-colors-2 w-full h-full absolute" />
                    <div className="tic-experience-shadow  w-full h-full absolute z-10" />
                </Section>
            </main>
            <Footer />
        </>
    );
};

export default Home;
