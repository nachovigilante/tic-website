import { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { useQuery } from "react-query";
import Section from "~/components/utils/Section";

import { Student, useStudents } from "~/hooks/api/useStudents";

const StudentsPage: NextPage = () => {
    const { fetchStudents } = useStudents();

    const {
        data: students,
        isLoading,
        isError,
    } = useQuery(["students"], () => fetchStudents());

    useEffect(() => {
        console.log(students);
    }, [students]);

    return (
        <>
            <Head>
                <title>TIC:// Estudiantes</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="pt-[67px] bg-background-dark">
                <Section className="min-h-screen">
                    <h2>A</h2>
                    {isLoading && <p>Loading...</p>}
                    {isError && <p>Error</p>}
                    {!isLoading && !isError && <ul></ul>}
                </Section>
            </main>
        </>
    );
};

export default StudentsPage;
