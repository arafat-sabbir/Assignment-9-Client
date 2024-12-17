import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useReactTable, getCoreRowModel } from "@tanstack/react-table";
import CustomDataTable from "@/components/shared/CustomDataTable";
import { Input } from "@/components/ui/input";
import Swal from "sweetalert2";
import TablePagination from "@/components/shared/DataTablePagination";
import { Card, CardContent } from "@/components/ui/card";
import getAllCategories from "@/actions/admin/get-all-categories";
import addNewCategory from "@/actions/admin/add-new-category";
import deleteCategory from "@/actions/admin/delete-category";
// import { useForm } from "react-hook-form";

const ManageCategories = () => {
  const [categories, setCategories] = useState<
    { categories: string; id: string }[] | []
  >([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  useEffect(() => {
    const getAllCategory = async () => {
      try {
        const response = await getAllCategories();
        setCategories(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllCategory();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    try {
      const result = await addNewCategory(name);
      console.log(result);
      setDialogOpen(false);
      refetchCategories(); // Refetch categories
    } catch (error) {
      console.log(error);
    }
  };

  const refetchCategories = async () => {
    try {
      const response = await getAllCategories();
      setCategories(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteCategory = async (id: any) => {
    console.log(id, "id");
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You want to delete this category?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          try {
            const response = await deleteCategory(id);
            console.log(response);
            refetchCategories(); // Refetch categories
          } catch (error) {
            console.log(error);
          }
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
  };

  // Define table columns and data
  const columns = [
    {
      accessorKey: "id",
      header: "Id",
    },
    {
      accessorKey: "name",
      header: "Category Name",
    },
    {
      header: "Delete Category",
      cell: (info: any) => (
        <Button
          className="h-8"
          onClick={() => handleDeleteCategory(info.row.original?.id)}
        >
          Delete
        </Button>
      ),
    },
  ];

  const table = useReactTable({
    data: categories,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Card>
      <CardContent className="space-y-6 p-6 ">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Manage Categories</h1>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button>Add Category</Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <h2 className="text-xl font-semibold mb-4">Add Category</h2>
              <form onSubmit={handleSubmit}>
                <Input name="name" placeholder="Enter category name" />
                <Button className="mt-4 w-full" type="submit">
                  Save
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        {/* Categories Table */}
        <CustomDataTable
          table={table}
          noDataMessage="No categories Available"
        />
        <TablePagination table={table} data={categories} />
      </CardContent>
    </Card>
  );
};

export default ManageCategories;
