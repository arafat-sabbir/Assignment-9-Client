import { axiosInstance } from "@/hooks/axios";

const addNewShop = async (formData: FormData) => {
  const response = await axiosInstance.post("/vendor/add-shop", formData);
  return response.data;
};
export default addNewShop;
