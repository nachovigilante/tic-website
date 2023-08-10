import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { adminLinks, type AdminLinkType } from "~/data/links";

const AdminLink = ({
    link,
    children,
}: {
    link: AdminLinkType;
    children?: React.ReactNode;
}) => {
    return (
        <Link
            href={link.path}
            className="flex py-5 flex-row space-x-2 items-center rounded-sm"
        >
            <Image
                src={link.svgPath}
                alt="seguimiento"
                width={20}
                height={20}
            />
            {children}
        </Link>
    );
};

const AdminTile = ({ link }: { link: AdminLinkType }) => {
    return (
        <li className="flex justify-start px-3">
            <AdminLink link={link}>
                <span className="text-sm transition-all delay-100 ease-linear animate-fadein">
                    {link.name}
                </span>
            </AdminLink>
        </li>
    );
};

const AdminTileCollapsed = ({ link }: { link: AdminLinkType }) => {
    return (
        <li className="flex justify-center">
            <AdminLink link={link} />
        </li>
    );
};

const AdminTileContainer = ({
    children,
    path,
}: {
    children: React.ReactNode;
    path: string;
}) => {
    const pathname = usePathname();

    const background =
        pathname === path ? "bg-background-active" : "bg-background";
    return <div className={background}>{children}</div>;
};

const AdminLinkList = ({ isCollapsed }: { isCollapsed: boolean }) => {
    return (
        <ul className="list-none ">
            {adminLinks.map((link) => (
                <AdminTileContainer path={link.path} key={link.name}>
                    {isCollapsed ? (
                        <AdminTileCollapsed link={link} />
                    ) : (
                        <AdminTile link={link} />
                    )}
                </AdminTileContainer>
            ))}
        </ul>
    );
};

export default AdminLinkList;
