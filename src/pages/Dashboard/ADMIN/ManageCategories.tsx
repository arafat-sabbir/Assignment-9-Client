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
import editCategory from "@/actions/admin/edit-category";
// import { useForm } from "react-hook-form";

const ManageCategories = () => {
  const [categories, setCategories] = useState<
    { categories: string; id: string }[] | []
  >([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<{
    id: string;
    name: string;
  } | null>(null);

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
  const handleEditSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
    id: string
  ) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    try {
      const result = await editCategory(id, name);
      console.log(result);
      setEditDialogOpen(false);
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

  const handleDeleteCategory = async (id: string) => {
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
      accessorKey: "name",
      header: "Edit Category",
      cell: (info: any) => {
        const categoryId = info.row.original.id;
        const categoryName = info.row.original.name;

        return (
          <>
            <Dialog
              open={editDialogOpen && selectedCategory?.id === categoryId} // Open for specific row
              onOpenChange={(isOpen) => {
                setEditDialogOpen(isOpen);
                if (isOpen) {
                  setSelectedCategory({ id: categoryId, name: categoryName });
                } else {
                  setSelectedCategory(null); // Reset state on close
                }
              }}
            >
              <DialogTrigger asChild>
                <Button
                  className="py-0 px-2 text-xs"
                  onClick={() =>
                    setSelectedCategory({ id: categoryId, name: categoryName })
                  }
                >
                  Edit Category
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <h2 className="text-xl font-semibold mb-4">Edit Category</h2>
                <form
                  onSubmit={(e) =>
                    handleEditSubmit(e, selectedCategory?.id as string)
                  }
                >
                  <Input
                    name="name"
                    defaultValue={selectedCategory?.name || ""}
                    placeholder="Enter category name"
                  />
                  <Button className="mt-4 w-full" type="submit">
                    Save
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </>
        );
      },
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
