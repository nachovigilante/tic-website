import {
    Column,
    ColumnDefBase,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";

type TableProps<T> = {
    data: T[];
    columns: Column<T, ColumnDefBase<T>>[];
};

const Table = <T,>({ data, columns }: TableProps<T>) => {
    const table = useReactTable<T>({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <table className="w-full text-white text-lg glass border-none overflow-hidden table-fixed">
            <thead className="border-none overflow-hidden z-20 rounded-t-md">
                {table.getHeaderGroups().map((headerGroup) => (
                    <tr
                        key={headerGroup.id}
                        className="border-b border-white/10 rounded-none"
                    >
                        {headerGroup.headers.map((header) => (
                            <th
                                key={header.id}
                                className="py-4 px-5 text-[20px] font-medium first:rounded-tl-md last:rounded-tr-md"
                            >
                                {header.isPlaceholder
                                    ? null
                                    : flexRender(
                                          header.column.columnDef.header,
                                          header.getContext(),
                                      )}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody className="max-h-[700px] block overflow-auto w-[1200px]">
                {table.getRowModel().rows.map((row) => (
                    <tr key={row.id} className="table w-full table-fixed">
                        {row.getAllCells().map((cell) => (
                            <td
                                key={cell.id}
                                className="text-center py-4 border-b border-white/10 first:rounded-bl-md last:rounded-br-md"
                            >
                                {flexRender(
                                    cell.column.columnDef.cell,
                                    cell.getContext(),
                                )}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
