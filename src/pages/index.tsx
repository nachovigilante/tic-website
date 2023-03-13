import { type NextPage } from "next";
import Head from "next/head";
import Header from "~/components/layout/Header";
import Section from "~/components/layout/Home/Section";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>TIC://</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="pt-[67px] bg-background-light">
                <Section className="text-white">
                    <div className="flex flex-col justify-center items-center mt-[-128px]">
                        <h1 className="text-7xl font-black font-raleway text-center mb-5 leading-[85px]">
                            Tecnología Innovación y Creatividad
                        </h1>
                        <h2 className="text-[27px] font-space font-light">
                            Especialización de la Escuela ORT
                        </h2>
                    </div>
                </Section>
                <Section className="bg-background-default">
                    <div className="glass max-w-4xl">
                        <h1 className="text-3xl font-medium font-raleway">
                            {
                                "</Tecnología de la Información y la Comunicación>"
                            }
                        </h1>
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
                    </div>
                </Section>
            </main>
        </>
    );
};

export default Home;
