export type CategoryType = {
    [key: string]: {
        color?: string;
        name?: string;
        icon?: string;
    };
};

export const categories: CategoryType = {
    ia: {
        color: "#9FEA18",
    },
    satellite: {
        color: "#FF6C31",
    },
    blockchain: {
        color: "#390040",
    },
    videojuegos: {
        color: "2AB9FF",
    },
    "web app": {
        color: "#0094dd",
    },
    "?": {
        color: "#ddb900",
    },
    "impacto social": {
        color: "#8d3ccf",
    },
};

export const roles: CategoryType = {
    arte: {
        color: "#FF6C31",
        icon: "/images/arte.svg",
    },
    uxui: {
        color: "#FF6C31",
        icon: "/images/arte.svg",
    },
    videojuegos: {
        color: "#2AB9FF",
        icon: "/images/videojuegos.svg",
    },
    hardware: {
        color: "#390040",
        icon: "/images/hardware.svg",
    },
    ia: {
        color: "#9FEA18",
        icon: "/images/ia.svg",
    },
    frontend: {
        color: "#0094dd",
        icon: "/images/frontend.svg",
    },
    backend: {
        color: "#0094dd",
        icon: "/images/sat.svg",
    },
    fullstack: {
        color: "#0094dd",
        icon: "/images/fullstack.svg",
    },
    po: {
        color: "#ddb900",
        icon: "/images/po.svg",
    },
};
