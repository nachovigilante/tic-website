"use client";

import { GetStaticPaths } from "next";

const Page = ({ slug }: { slug: string }) => {
    console.log(slug);

    return (
        <main className="pt-[67px] bg-background-dark pb-[1000px]">
            <h1 className="text-white">HOLA</h1>
            <div>
                <h2 className="text-white">{slug}</h2>
            </div>
        </main>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [{ params: { slug: "hola" } }],
        fallback: false,
    };
};

export const getInitialProps = async () => {
    return {
        props: { slug: "chau" },
    };
};

export default Page;
