import CustomDataTable from "@/components/shared/CustomDataTable";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import moment from "moment";
import { Card, CardContent } from "@/components/ui/card";
import TablePagination from "@/components/shared/DataTablePagination";
import getAllUser from "@/actions/admin/get-all-user";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import updateUserStatus from "@/actions/admin/update-user-status";
import { TUser } from "@/redux/features/auth/authSlice";

const ManageUsers = () => {
  type TUSerStatus = "ACTIVE" | "SUSPENDED" | "DELETED";
  const [users, setUsers] = useState<TUser[] | []>([]);
  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const response = await getAllUser();
        setUsers(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllUsers();
  }, []);

  const changeUserStatus = async (id: string, status: TUSerStatus) => {
    try {
      const response = await updateUserStatus(id, status);
      console.log(response);
      toast.success(response.message);
      const updatedUser = response.data;
      const updatedUsers = users.map((user) =>
        user.id === id ? { ...user, status: updatedUser.status } : user
      );
      setUsers(updatedUsers);
    } catch (error: any) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };

  // Define table columns and data
  const columns = [
    {
      accessorKey: "id",
      header: "Id",
      cell: (info: any) => <p className="text-[13px]">{info.getValue()}</p>,
    },
    {
      accessorKey: "name",
      header: "Name",
      cell: (info: any) => <p className="capitalize">{info.getValue()}</p>,
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
    {
      accessorKey: "status",
      header: "Status",
    },
    {
      header: "Actions",
      cell: (info: any) => (
        <Select
          onValueChange={(value) =>
            changeUserStatus(info.row.original.id, value as TUSerStatus)
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Change Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ACTIVE">Active</SelectItem>
            <SelectItem value="SUSPENDED">Suspended</SelectItem>
            <SelectItem value="DELETED">Deleted</SelectItem>
          </SelectContent>
        </Select>
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
