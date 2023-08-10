export type StudentType = {
    name: string;
    role: string;
};

export type Project = {
    id: number;
    name: string;
    category: string;
    students: StudentType[];
};

// Simulamos una llamada a una API
export const projects = [
    {
        id: 1,
        name: "IARA",
        category: "Videojuegos",
        students: [
            {
                name: "Juan Rodriguez",
                role: "frontend",
            },
            {
                name: "Pedro Malovich",
                role: "backend",
            },
        ],
    },
    {
        id: 2,
        name: "Hawkeye",
        category: "Videojuegos",
        students: [
            {
                name: "Ricardo Perez",
                role: "frontend",
            },
            {
                name: "Juan Rodriguez",
                role: "backend",
            },
        ],
    },
    {
        id: 3,
        name: "MIDI Machine",
        category: "Videojuegos",
        students: [
            {
                name: "Ricardo Perez",
                role: "hardware",
            },
            {
                name: "Juan Rodriguez",
                role: "arte",
            },
        ],
    },
    {
        id: 4,
        name: "Steption",
        category: "Impacto Social",
        students: [
            {
                name: "Ambar Jaichenco",
                role: "frontend",
            },
            {
                name: "Juan Rodriguez",
                role: "backend",
            },
        ],
    },
];
