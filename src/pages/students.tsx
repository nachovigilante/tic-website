import { NextPage } from "next";
import Head from "next/head";
import { useQuery } from "react-query";
import Section from "~/components/utils/Section";

import { Student, useStudents } from "~/hooks/api/useStudents";

import {
    Column,
    ColumnDefBase,
    createColumnHelper,
} from "@tanstack/react-table";
import Table from "~/components/Table";

const columnHelper = createColumnHelper<Student>();

const columns = [
    columnHelper.accessor("dni", {
        header: () => <span>DNI</span>,
    }),
    columnHelper.accessor("name", {
        header: () => <span>Nombre</span>,
    }),
    columnHelper.accessor("lastName", {
        header: () => <span>Apellido</span>,
    }),
    columnHelper.accessor("mail", {
        header: () => <span>Mail</span>,
    }),
    columnHelper.accessor("classYear", {
        header: () => <span>Clase</span>,
    }),
];

// const test = [
//     {
//         id: 1,
//         name: "Juan",
//         lastName: "Perez",
//         mail: "juan@gmail.com",
//         classYear: 1,
//     },
//     {
//         id: 2,
//         name: "Pedro",
//         lastName: "Gomez",
//         mail: "pedro@gmail.com",
//         classYear: 2,
//     },
// ] as Student[];

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
            <main className="bg-background-dark">
                <div className="bg-colors-1 w-full h-full absolute" />
                <Section className="min-h-screen pt-24 relative z-40">
                    {isLoading && <p>Loading...</p>}
                    {isError && <p>Error</p>}
                    {!isLoading && !isError && (
                        <Table
                            className="w-full text-white text-lg bg-white/20 rounded-md backdrop-blur-xl"
                            data={students || []}
                            columns={
                                columns as Column<
                                    Student,
                                    ColumnDefBase<Student>
                                >[]
                            }
                        />
                    )}
                </Section>
            </main>
        </>
    );
};

export default StudentsPage;
