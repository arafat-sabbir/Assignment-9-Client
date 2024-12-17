import { axiosInstance } from "@/hooks/axios";

const deleteCategory = async (id: string) => {
  const response = await axiosInstance.delete(`/admin/delete-category/${id}`);
  return response.data;
};

export default deleteCategory;
