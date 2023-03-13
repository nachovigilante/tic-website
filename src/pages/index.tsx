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
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-7xl font-extrabold font-raleway text-center mb-6 leading-[85px]">
                            Tecnología Innovación y Creatividad
                        </h1>
                        <h2 className="text-3xl font-space font-extralight">
                            Especialización de la Escuela ORT
                        </h2>
                    </div>
                </Section>
            </main>
        </>
    );
};

export default Home;
