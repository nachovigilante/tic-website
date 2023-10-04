export type CategoryType = {
    [key: string]: {
        color?: string;
        name?: string;
        icon?: string;
    };
}

export const categories: CategoryType = {
    ia: {
        color: "#9FEA18"
    },
    satellite: { 
        color: "#FF6C31"
    },
    blockchain: {
        color: "#390040"
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
        color: "#8d3ccf"
    },
}

// export const roles = {

