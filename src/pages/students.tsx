import { NextPage } from "next";
import Head from "next/head";
import { useQuery } from "react-query";

import { Student, useStudents } from "~/hooks/api/useStudents";

const StudentsPage: NextPage = () => {
    const { fetchStudents } = useStudents();

    const {
        data: students,
        isLoading,
        isError,
    } = useQuery(["students"], () => fetchStudents());

    return (
        <>
            <Head>
                <title>TIC:// Estudiantes</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="pt-[67px] bg-background-dark">
                <h2>A</h2>
                <ul>
                    {students?.map((student: Student) => (
                        <li key={student.dni}>{student.name}</li>
                    ))}
                </ul>
            </main>
        </>
    );
};

export default StudentsPage;
