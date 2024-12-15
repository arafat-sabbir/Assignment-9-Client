import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useReactTable, getCoreRowModel } from "@tanstack/react-table";
import CustomDataTable from "@/components/shared/CustomDataTable";
import { Input } from "@/components/ui/input";
// import { useForm } from "react-hook-form";

const ManageCategories = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: "Electronics" },
    { id: 2, name: "Clothing" },
    { id: 3, name: "Groceries" },
  ]);

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
      header: "ID",
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
    <div className="p-6 space-y-6">
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
      <CustomDataTable table={table} noDataMessage="No categories Available" />
    </div>
  );
};

export default ManageCategories;
