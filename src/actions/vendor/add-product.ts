import { axiosInstance } from "@/hooks/axios";

const addProduct = async (formData: FormData) => {
  const response = await axiosInstance.post("/products/add-product", formData);
  return response.data;
};
export default addProduct;
