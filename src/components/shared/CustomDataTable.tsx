import { flexRender, Table } from "@tanstack/react-table";
import { Card, CardContent } from "@/components/ui/card";

const CustomDataTable = ({
  table,
  noDataMessage = "No data found",
}: {
  table: Table<any>;
  noDataMessage?: string;
}) => {
  return (
    <Card className="border-transparent relative overflow-hidden bg-white text-[#ff1010] rounded-none">
      <CardContent className="flex flex-col justify-between p-0 rounded-none">
        <div className="border-[#E8E8E8] border overflow-x-auto custom-scrollbar rounded-none">
          <table className="w-full min-w-fit text-base text-center text-t-800 rounded-none">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr
                  key={headerGroup.id}
                  className="bg-[#FFEFEF] border-[#E8E8E8]"
                >
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className={`text-[16px] text-[#787878] rounded-none font-medium justify-center border-l first:border-l-0 border-[#E8E8E8] h-[54px] px-2 bg-[#FFEFEF]`}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            <tbody>
              {table.getRowModel().rows.length ? (
                table.getRowModel().rows.map((row, rowIndex) => (
                  <tr
                    key={row.id}
                    className={`border-[#E8E8E8] border-t  text-[#787878] ${
                      rowIndex % 2 === 1 ? "bg-[#FCFCFC]" : "bg-white"
                    }`}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className={`text-[#787878] text-center  min-w-[200px] max-w-fit text-nowrap border-l first:border-l-0 border-[#E8E8E8] h-[54px] px-2 `}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={table.getHeaderGroups()[0].headers.length}
                    className="text-center h-[52px] text-sm lg:text-base text-t-600 font-normal"
                  >
                    {noDataMessage}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default CustomDataTable;
