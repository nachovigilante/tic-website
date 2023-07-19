import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import links from "~/data/links";
import useShortcuts from "~/utils/useShortcuts";

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
            {links.map((link) => (
                <Link className="text-white" href={link.path} key={link.name}>
                    {link.name}
                </Link>
            ))}
        </nav>
    );
};

const Header = () => {
    const { addShortcuts } = useShortcuts();
    const router = useRouter();

    const headerShortcuts = [
        {
            keystrokes: ["ctrl+shift+p"],
            description: "Search",
            action: () => {
                console.log("Search");
            },
        },
        {
            keystrokes: ["ctrl+shift+h"],
            description: "Go to home",
            action: () => {
                router.push("/");
            },
        },
    ];

    addShortcuts(headerShortcuts);

    return (
        <header className="py-4 px-8 flex items-center justify-between absolute z-20 top-0 w-screen">
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
    );
};

export default Header;
