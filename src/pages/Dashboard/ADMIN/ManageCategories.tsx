import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useReactTable, getCoreRowModel } from "@tanstack/react-table";
import CustomDataTable from "@/components/shared/CustomDataTable";
import { Input } from "@/components/ui/input";
import TablePagination from "@/components/shared/DataTablePagination";
import { Card, CardContent } from "@/components/ui/card";
import getAllCategories from "@/actions/admin/get-all-categories";
// import { useForm } from "react-hook-form";

const ManageCategories = () => {
  const [categories, setCategories] = useState<
    { categories: string; id: string }[] | []
  >([]);
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

  const [newCategory, setNewCategory] = useState("");

  // Add a new category
  const handleAddCategory = () => {
    if (newCategory.trim() !== "") {
      setCategories((prev) => [...prev, { id: Date.now(), name: newCategory }]);
      setNewCategory("");
    }
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
          <Dialog>
            <DialogTrigger asChild>
              <Button>Add Category</Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <h2 className="text-xl font-semibold mb-4">Add Category</h2>
              <form>
                <Input
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  placeholder="Enter category name"
                />
                <Button onClick={handleAddCategory} className="mt-4 w-full">
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
