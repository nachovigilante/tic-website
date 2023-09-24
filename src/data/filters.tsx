export type Filter = {
    name: string;
    style: string;
}

const filters: Filter[] = [
    {
        name: "p1",
        style: "bg-blue-500 text-white rounded-md px-1",
    },
    {
        name: "p2",
        style: "bg-green-500 text-white rounded-md px-1",
    }
];

export default filters;