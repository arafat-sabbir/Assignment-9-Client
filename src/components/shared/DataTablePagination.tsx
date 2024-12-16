import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const TablePagination = ({ table, data }: { table: any; data: any }) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <Select onValueChange={(value) => table?.setPageSize(Number(value))}>
          <SelectTrigger className="w-[70px] py-0 focus:ring-0 focus:ring-offset-0">
            <SelectValue
              placeholder={table?.getState().pagination.pageSize.toString()}
            />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="5">5</SelectItem>
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="25">25</SelectItem>
            <SelectItem value="50">50</SelectItem>
            <SelectItem value="100">100</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md gap-2 h-[36px]"
            aria-label="Pagination"
          >
            <button
              onClick={() => table?.previousPage()}
              disabled={!table?.getCanPreviousPage()}
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 rounded-lg"
            >
              <span className="sr-only">Previous</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  fillRule="evenodd"
                  d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {Array.from(
              {
                length: Math.ceil(
                  data?.length / table?.getState().pagination.pageSize
                ),
              },
              (_, index) => {
                const totalPages = Math.ceil(
                  data?.length / table?.getState().pagination.pageSize
                );
                const currentPage = table?.getState().pagination.pageIndex;

                // Show first, last, and current pages, with ellipsis when necessary
                if (
                  index === 0 ||
                  index === totalPages - 1 ||
                  (index >= currentPage - 1 && index <= currentPage + 1)
                ) {
                  return (
                    <button
                      key={index}
                      onClick={() => table?.setPageIndex(index)}
                      className={`relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold ${
                        table?.getState().pagination.pageIndex === index
                          ? "bg-primary text-white"
                          : "text-t-600 hover:text-primary hover:bg-primary-foreground"
                      } rounded-lg`}
                      aria-current={
                        table?.getState().pagination.pageIndex === index
                          ? "page"
                          : undefined
                      }
                    >
                      {index + 1}
                    </button>
                  );
                }

                // Show ellipsis between first and current page, and current page and last page
                if (index === currentPage - 2 || index === currentPage + 2) {
                  return (
                    <span
                      key={index}
                      className="px-4 py-2 text-sm font-semibold text-gray-500"
                    >
                      ...
                    </span>
                  );
                }
              }
            )}
            <button
              onClick={() => table?.nextPage()}
              disabled={!table?.getCanNextPage()}
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-t-600 hover:text-primary hover:bg-primary-foreground rounded focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  fillRule="evenodd"
                  d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default TablePagination;
