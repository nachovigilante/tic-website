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
        name: "Seguimiento",
        path: "/admin/seguimiento",
        svgPath: "/images/admin/seguimiento.svg",
    },
    {
        name: "Notas",
        path: "/admin/notas",
        svgPath: "/images/admin/notas.svg",
    },
    {
        name: "Asistencias",
        path: "/admin/asistencias",
        svgPath: "/images/admin/asistencias.svg",
    },
] as AdminLinkType[];
