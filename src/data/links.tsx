type LinkType = {
    name: string;
    path: string;
};

export const links = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Tecnologías",
        path: "/tech",
    },
    {
        name: "Proyectos",
        path: "/projects",
    },
    {
        name: "Media",
        path: "/media",
    },
    {
        name: "Estudiantes",
        path: "/students",
    },
] as LinkType[];

export type AdminLinkType = {
    name: string;
    path: string;
    svgPath: string;
};

export const adminLinks = [
    {
        name: "Proyectos",
        path: "/admin/tracking",
        svgPath: "/images/admin/people.svg",
    },
    {
        name: "Notas",
        path: "/admin/notas",
        svgPath: "/images/admin/notebook.svg",
    },
    {
        name: "Asistencias",
        path: "/admin/asistencias",
        svgPath: "/images/admin/happy-face.svg",
    },
] as AdminLinkType[];
