export type Filter = {
    name: string;
    values: string[];
    style: string;
};

const filters = {
    Estudiante: {
        name: "Estudiante",
        values: [],
        style: "bg-blue-500 text-white rounded-md px-1",
    },
    Proyecto: {
        name: "Proyecto",
        values: [],
        style: "bg-green-500 text-white rounded-md px-1",
    },
    Tutor: {
        name: "Tutor",
        values: [],
        style: "bg-yellow-500 text-white rounded-md px-1",
    },
    Area: {
        name: "Area",
        values: [],
        style: "bg-red-500 text-white rounded-md px-1",
    },
    Curso: {
        name: "Curso",
        values: [],
        style: "bg-purple-500 text-white rounded-md px-1",
    },
    Tarea: {
        name: "Tarea",
        values: [],
        style: "bg-pink-500 text-white rounded-md px-1",
    },
    Nota: {
        name: "Nota",
        values: [],
        style: "bg-gray-500 text-white rounded-md px-1",
    },
} as { [key: string]: Filter };

export default filters;
