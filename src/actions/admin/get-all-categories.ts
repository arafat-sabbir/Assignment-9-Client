import { axiosInstance } from "@/hooks/axios";

const getAllCategories = async () => {
  const response = await axiosInstance.get("/admin/categories");
  return response.data;
};

export default getAllCategories;
