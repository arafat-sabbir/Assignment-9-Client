import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useReactTable, getCoreRowModel } from "@tanstack/react-table";
import CustomDataTable from "@/components/shared/CustomDataTable";
import Swal from "sweetalert2";
import TablePagination from "@/components/shared/DataTablePagination";
import { Card, CardContent } from "@/components/ui/card";
import getAllMyProduct from "@/actions/vendor/get-my-product";
import updateProduct from "@/actions/vendor/update-product";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomFormField, {
  FormFieldType,
} from "@/components/ui/CustomFormField";
import { Form } from "@/components/ui/form";
import { toast } from "sonner";
import { Loader } from "lucide-react";
import addProduct from "@/actions/vendor/add-product";
import deleteProduct from "@/actions/vendor/delete-product";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { SelectContent } from "@radix-ui/react-select";
import getAllCategories from "@/actions/admin/get-all-categories";
import { SelectItem } from "@/components/ui/select";

// Zod schema for form validation
const productSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Product name must be at least 2 characters" }),
  description: z
    .string()
    .min(5, { message: "Product description must be at least 5 characters" }),
  price: z.number().positive({ message: "Price must be a positive number" }),
  discount: z.number().min(0).max(100).optional(),
  inventory: z
    .number()
    .int()
    .min(0, { message: "Inventory must be a non-negative number" }),
  categoryId: z.number().int({ message: "Category ID must be a valid number" }),
  images: z.instanceof(FileList).optional(),
});

type ProductFormInputs = z.infer<typeof productSchema>;

const ManageProduct = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [categories, setCategories] = useState<
    { name: string; id: string }[] | []
  >([]);
  const [dialogMode, setDialogMode] = useState<"add" | "edit">("add");
  const [currentProduct, setCurrentProduct] = useState<any>(null);
  const [productLoading, setProductLoading] = useState(false);

  // Initialize form with Zod resolver
  const form = useForm<ProductFormInputs>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      discount: 0,
      inventory: 0,
      categoryId: 0,
    },
  });

  const { control, handleSubmit, reset } = form;

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllMyProduct();
        setProducts(response?.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

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

  // Add or Edit product handler
  const onSubmit: SubmitHandler<ProductFormInputs> = async (data) => {
    setProductLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("price", data.price.toString());
      formData.append("discount", data.discount?.toString() || "0");
      formData.append("inventory", data.inventory.toString());
      formData.append("categoryId", data.categoryId.toString());

      // Append images if provided
      if (data.images) {
        Array.from(data.images).forEach((file) => {
          formData.append("images", file);
        });
      }

      if (dialogMode === "add") {
        const result = await addProduct(formData);
        toast.success(result?.message);
      } else if (dialogMode === "edit" && currentProduct) {
        const result = await updateProduct(currentProduct.id, formData);
        toast.success(result?.message);
      }

      setDialogOpen(false);
      reset();
      refetchProducts();
    } catch (error: any) {
      console.error("Error saving product:", error);
      toast.error(error?.response?.data?.message);
    } finally {
      setProductLoading(false);
    }
  };

  // Refetch products
  const refetchProducts = async () => {
    try {
      const response = await getAllMyProduct();
      setProducts(response?.data);
    } catch (error) {
      console.error("Error refetching products:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to refresh products",
      });
    }
  };

  const handleDeleteProduct = async (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this product?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteProduct(id);
          refetchProducts();
          toast.success("Product deleted successfully");
        } catch (error: any) {
          console.error("Error deleting product:", error);
          toast.error(error?.response?.data?.message);
        }
      }
    });
  };

  // Table columns
  const columns = [
    { accessorKey: "id", header: "Id" },
    {
      accessorKey: "images",
      cell: (info: any) =>
        info.getValue()?.length ? (
          <img
            src={info.getValue()[0]}
            alt={info.row.original.name}
            className="size-20 rounded shadow-xl mx-auto object-cover my-2"
          />
        ) : (
          "N/A"
        ),
    },
    { accessorKey: "name", header: "Product Name" },
    { accessorKey: "description", header: "Description" },
    { accessorKey: "price", header: "Price" },
    { accessorKey: "inventory", header: "Inventory" },
    {
      header: "Actions",
      cell: (info: any) => (
        <div className="flex space-x-2">
          <Button
            className="h-8"
            onClick={() => {
              setDialogMode("edit");
              setCurrentProduct(info.row.original);
              setDialogOpen(true);
              reset(info.row.original);
            }}
          >
            Edit
          </Button>
          <Button
            className="h-8"
            onClick={() => handleDeleteProduct(info.row.original?.id)}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  const table = useReactTable({
    data: products,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Card>
      <CardContent className="space-y-6 p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Manage Products</h1>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button
                onClick={() => {
                  setDialogMode("add");
                  setCurrentProduct(null);
                  reset();
                }}
              >
                Add Product
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <h2 className="text-xl font-semibold mb-4">
                {dialogMode === "add" ? "Add Product" : "Edit Product"}
              </h2>
              <ScrollArea className="max-h-[80vh] overflow-y-auto px-2">
                <Form {...form}>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <CustomFormField
                      control={control}
                      fieldType={FormFieldType.INPUT}
                      name="name"
                      label="Product Name"
                      placeholder="Enter product name"
                    />
                    <CustomFormField
                      control={control}
                      fieldType={FormFieldType.TEXTAREA}
                      name="description"
                      label="Description"
                      placeholder="Enter product description"
                    />
                    <CustomFormField
                      control={control}
                      fieldType={FormFieldType.INPUT}
                      name="price"
                      label="Price"
                      type="number"
                      placeholder="Enter product price"
                    />
                    <CustomFormField
                      control={control}
                      fieldType={FormFieldType.INPUT}
                      name="discount"
                      label="Discount"
                      type="number"
                      placeholder="Enter product discount (optional)"
                    />
                    <CustomFormField
                      control={control}
                      fieldType={FormFieldType.INPUT}
                      name="inventory"
                      label="Inventory"
                      type="number"
                      placeholder="Enter product inventory"
                    />
                    <CustomFormField
                      control={control}
                      fieldType={FormFieldType.SELECT}
                      name="categoryId"
                      label="Category"
                      type="number"
                      placeholder="Select Your product category"
                    >
                      {categories.map((category) => (
                        <SelectItem
                          key={category.id}
                          value={category.id.toString()}
                        >
                          {category.name}
                        </SelectItem>
                      ))}
                    </CustomFormField>
                    <CustomFormField
                      control={control}
                      fieldType={FormFieldType.FILE}
                      name="images"
                      label="Product Images"
                      placeholder="Upload product images"
                      //  ty multiple
                    />
                    <div className="flex justify-end">
                      <Button
                        type="submit"
                        className="w-full"
                        disabled={productLoading}
                      >
                        {productLoading ? (
                          <Loader className="animate-spin" />
                        ) : dialogMode === "add" ? (
                          "Add Product"
                        ) : (
                          "Update Product"
                        )}
                      </Button>
                    </div>
                  </form>
                </Form>
              </ScrollArea>
            </DialogContent>
          </Dialog>
        </div>

        <CustomDataTable table={table} />
        <TablePagination table={table} data={products} />
      </CardContent>
    </Card>
  );
};

export default ManageProduct;
