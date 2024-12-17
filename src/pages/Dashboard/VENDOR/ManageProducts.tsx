import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useReactTable, getCoreRowModel } from "@tanstack/react-table";
import CustomDataTable from "@/components/shared/CustomDataTable";
import Swal from "sweetalert2";
import TablePagination from "@/components/shared/DataTablePagination";
import { Card, CardContent } from "@/components/ui/card";
import getAllShop from "@/actions/vendor/get-all-shop";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomFormField, {
  FormFieldType,
} from "@/components/ui/CustomFormField";
import { Form } from "@/components/ui/form";
import addNewShop from "@/actions/vendor/add-shop";
import deleteShop from "@/actions/vendor/delete-shop";
import { toast } from "sonner";
import { Loader } from "lucide-react";

// Zod schema for form validation
const categorySchema = z.object({
  shopName: z
    .string()
    .min(2, { message: "Shop name must be at least 2 characters" }),
  shopDesc: z
    .string()
    .min(5, { message: "Shop description must be at least 5 characters" }),
  shopImage: z.instanceof(FileList).optional(),
});

type CategoryFormInputs = z.infer<typeof categorySchema>;

const ManageProduct = () => {
  const [shops, setShops] = useState<any[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [shopLogo, setShopLogo] = useState<File | null>(null);

  // Initialize form with Zod resolver
  const form = useForm<CategoryFormInputs>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      shopName: "",
      shopDesc: "",
    },
  });

  const {
    control,
    handleSubmit,
    reset
  } = form;

  // Fetch shops
  useEffect(() => {
    const fetchShops = async () => {
      try {
        const response = await getAllShop();
        setShops(response?.data);
      } catch (error) {
        console.error("Error fetching shops:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to fetch shops",
        });
      }
    };
    fetchShops();
  }, []);
  const [shopLoading, setShopLoading] = useState(false);
  // Add shop handler
  const onAddShopSubmit: SubmitHandler<CategoryFormInputs> = async (data) => {
    setShopLoading(true);
    try {
      const formData = new FormData();
      formData.append("shopName", data.shopName);
      formData.append("shopDesc", data.shopDesc);

      // Only append image if a file is selected
      if (shopLogo) {
        formData.append("shopLogo", shopLogo);
      }
      const result = await addNewShop(formData);
      // Show success message
      toast.success(result?.message);
      console.log(result);
      setDialogOpen(false);
      reset(); // Reset form after successful submission
      refetchShop();
    } catch (error: any) {
      console.error("Error adding shop:", error);
      toast.error(error?.response?.data?.message);
    } finally {
      setShopLoading(false);
    }
  };

  // Refetch shops
  const refetchShop = async () => {
    try {
      const response = await getAllShop();
      setShops(response?.data);
    } catch (error) {
      console.error("Error refetching shops:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to refresh shops",
      });
    }
  };

  const handleDeleteShop = async (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this shop?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteShop(id);
          refetchShop();
          toast.success("Shop deleted successfully");
        } catch (error: any) {
          console.error("Error deleting Shop:", error);
          toast.error(error?.response?.data?.message);
        }
      }
    });
  };
  // Table columns
  const columns = [
    { accessorKey: "id", header: "Id" },
    {
      accessorKey: "shopLogo",
      cell: (info: any) =>
        info.getValue() ? (
          <img
            src={info.getValue()}
            alt={info.row.original.name}
            className="size-20 rounded-full shadow-xl mx-auto object-cover my-2"
          />
        ) : (
          "N/A"
        ),
    },
    { accessorKey: "shopName", header: "Shop Name" },
    {
      accessorKey: "shopDesc",
      header: "Shop Description",
      cell: (info: any) => (
        <p className="capitalize">{info.getValue() || "N/A"}</p>
      ),
    },
    {
      header: "Delete Category",
      cell: (info: any) => (
        <Button
          className="h-8"
          onClick={() => handleDeleteShop(info.row.original?.id)}
        >
          Delete
        </Button>
      ),
    },
  ];

  const table = useReactTable({
    data: shops,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Card>
      <CardContent className="space-y-6 p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Manage Shop</h1>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button disabled={shops?.length > 0}>Add Shop</Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <h2 className="text-xl font-semibold mb-4">Add Shop</h2>
              <Form {...form}>
                <form
                  onSubmit={handleSubmit(onAddShopSubmit)}
                  className="space-y-4"
                >
                  <CustomFormField
                    control={control}
                    fieldType={FormFieldType.INPUT}
                    name="shopName"
                    label="Shop Name"
                    placeholder="Enter shop name"
                  />
                  <CustomFormField
                    control={control}
                    fieldType={FormFieldType.INPUT}
                    name="shopDesc"
                    label="Shop Description"
                    placeholder="Enter shop description"
                  />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setShopLogo(e.target.files?.[0] as File)
                    }
                  />
                  <Button
                    disabled={shopLoading}
                    className="mt-4 w-full"
                    type="submit"
                  >
                    Save{" "}
                    {shopLoading && (
                      <Loader className="animate-spin ml-2"></Loader>
                    )}
                  </Button>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </div>
        {/* Data Table */}
        <CustomDataTable table={table} noDataMessage="No shops available" />
        <TablePagination table={table} data={shops} />
      </CardContent>
    </Card>
  );
};

export default ManageProduct;
