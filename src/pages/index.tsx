import { type NextPage } from 'next';
import Head from 'next/head';
import Header from '~/components/layout/Header';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>TIC://</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="">
                <Header />
            </main>
        </>
    );
};

export default Home;
