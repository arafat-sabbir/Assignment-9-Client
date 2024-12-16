import CustomDataTable from "@/components/shared/CustomDataTable";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useState } from "react";
import moment from "moment";
import { Card, CardContent } from "@/components/ui/card";
import TablePagination from "@/components/shared/DataTablePagination";

const ManageShop = () => {
  const [shop, setShop] = useState([
    {
      id: 1,
      shopName: "John Doe",
      shopDescription: "This is a shop",
      shopLogo: "",
      user: {
        id: 1,
        name: "John Doe",
        role: "VENDOR",
        email: "john.doe@example.com",
        status: "ACTIVE",
        createdAt: new Date().toISOString(),
      },
    },
    {
      id: 2,
      shopName: "Jane Doe",
      shopDescription: "This is a shop",
      shopLogo: "",
      user: {
        id: 2,
        name: "Jane Doe",
        role: "USER",
        email: "jane.doe@example.com",
        status: "SUSPENDED",
        createdAt: new Date().toISOString(),
      },
    },
    {
      id: 3,
      shopName: "Bob Smith",
      shopDescription: "This is a shop",
      shopLogo: "",
      user: {
        id: 3,
        name: "Bob Smith",
        role: "VENDOR",
        email: "bob.smith@example.com",
        status: "DELETED",
        createdAt: new Date().toISOString(),
      },
    },
  ]);
  // Define table columns and data
  const columns = [
    {
      accessorKey: "id",
      header: "Id",
    },
    {
      accessorKey: "shopName",
      header: "Shop Name",
    },
    {
      accessorKey: "shopDescription",
      header: "Shop Description",
    },
    {
      accessorKey: "user.name",
      header: "User",
    },
    {
      accessorKey: "user.role",
      header: "Role",
    },
    {
      accessorKey: "user.status",
      header: "Status",
    },
    {
      accessorKey: "user.createdAt",
      header: "User Since",
      cell: (info: any) => (
        <>{moment(info.getValue()).format("DD MMM, YYYY")}</>
      ),
    },
  ];

  const table = useReactTable({
    data: shop,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <Card>
      <h1 className="pl-8 p-4 text-2xl font-medium text-[#4A4A4A]">
        Manage Shop
      </h1>
      <CardContent className="space-y-4">
        <CustomDataTable table={table} noDataMessage="No Shop Available" />
        <TablePagination table={table} data={shop} />
      </CardContent>
    </Card>
  );
};

export default ManageShop;
