import CustomDataTable from "@/components/shared/CustomDataTable";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useState } from "react";
import moment from "moment";
import { Card, CardContent } from "@/components/ui/card";
import TablePagination from "@/components/shared/DataTablePagination";

const ManageUsers = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      role: "VENDOR",
      email: "john.doe@example.com",
      status: "ACTIVE",
      createdAt: new Date().toISOString(),
    },
    {
      id: 2,
      name: "Jane Doe",
      role: "USER",
      email: "jane.doe@example.com",
      status: "SUSPENDED",
      createdAt: new Date().toISOString(),
    },
    {
      id: 3,
      name: "Bob Smith",
      role: "VENDOR",
      email: "bob.smith@example.com",
      status: "DELETED",
      createdAt: new Date().toISOString(),
    },
  ]);
  // Define table columns and data
  const columns = [
    {
      accessorKey: "id",
      header: "Id",
    },
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "status",
      header: "Status",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "role",
      header: "Role",
    },
    {
      accessorKey: "createdAt",
      header: "User Since",
      cell: (info: any) => (
        <>{moment(info.getValue()).format("DD MMM, YYYY")}</>
      ),
    },
  ];

  const table = useReactTable({
    data: users,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <Card>
      <h1 className="pl-8 p-4 text-2xl font-medium text-[#4A4A4A]">
        Manage User
      </h1>
      <CardContent className="space-y-4">
        <CustomDataTable table={table} noDataMessage="No User Available" />
        <TablePagination table={table} data={users} />
      </CardContent>
    </Card>
  );
};

export default ManageUsers;
