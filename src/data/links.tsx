type LinkType = {
    name: string;
    path: string;
};

const links = [
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

export default links;
