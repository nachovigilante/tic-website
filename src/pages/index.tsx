import { type NextPage } from "next";
import Head from "next/head";
import Header from "~/components/layout/Header";
import { TitledGlassBox } from "~/components/utils/Glassbox";
import Section from "~/components/utils/Section";

import JuegosSVG from "../../public/images/games.svg";
import VRSVG from "../../public/images/vr.svg";
import IoTSVG from "../../public/images/iot.svg";
import IASVG from "../../public/images/ia.svg";
import NoseSVG from "../../public/images/nose.svg";
import BlockchainSVG from "../../public/images/blockchain.svg";
import MobileSVG from "../../public/images/mobile.svg";
import ArteSVG from "../../public/images/arte.svg";
import SatSVG from "../../public/images/sat.svg";
import Nose2SVG from "../../public/images/nose2.svg";
import HardwareSVG from "../../public/images/hardware.svg";

import TICExperienceSVG from "../../public/images/tic-experience.svg";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>TIC://</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="pt-[67px] bg-background-dark">
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
                        <h2 className="text-lg font-space font-extralight">
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
                        </h2>
                    </TitledGlassBox>
                </Section>
                <Section className="text-white m-auto min-h-screen">
                    <h1 className="text-7xl font-black font-raleway text-center mb-5 leading-[85px] max-w-[1000px]">
                        Descubrí las tecnologías que desarrollamos
                    </h1>
                    <div className="flex flex-wrap gap-6 justify-center mt-12 max-w-[1000px]">
                        <JuegosSVG />
                        <VRSVG />
                        <IoTSVG />
                        <IASVG />
                        <NoseSVG />
                        <BlockchainSVG />
                        <MobileSVG />
                        <ArteSVG />
                        <SatSVG />
                        <Nose2SVG />
                        <HardwareSVG />
                    </div>
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
                <Section className="min-h-screen">
                    <h1>AAAAAAAAAA</h1>
                </Section>
            </main>
        </>
    );
};

export default Home;
