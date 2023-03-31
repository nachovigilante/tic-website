import Head from "next/head";
import Link from "next/link";

const SearchBar = () => {
    return (
        <div className="gap-5 font-space pl-3 pr-1 border-1 border-color-white rounded-lg bg-black/20 flex items-center justify-between h-9">
            <input
                className="text-sm bg-transparent placeholder-white outline-none text-white w-[230px]"
                type="text"
                placeholder="Search or jump to..."
            />
            <div className="text-white border-1 border-color-white rounded-md bg-black/20 h-6 w-6 flex justify-center items-center">
                /
            </div>
        </div>
    );
};

const Navbar = () => {
    return (
        <nav className="flex gap-10 font-space text-base font-medium">
            <Link className="text-white" href="/">
                Home
            </Link>
            <Link className="text-white" href="/tech">
                Ejes y materias
            </Link>
            <Link className="text-white" href="/projects">
                Proyectos
            </Link>
            <Link className="text-white" href="/media">
                Media
            </Link>
            <Link className="text-white" href="/students">
                Estudiantes
            </Link>
        </nav>
    );
};

const Header = () => {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap"
                    rel="stylesheet"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <header className="py-4 px-8 flex items-center justify-between fixed z-20 top-0 w-screen">
                <div className="flex justify-between gap-10 items-center">
                    <div className="w-9 h-9">
                        <Link href="/">
                            <img src="/X.svg" alt="TIC://" />
                        </Link>
                    </div>
                    <SearchBar />
                </div>
                <Navbar />
            </header>
        </>
    );
};

export default Header;
