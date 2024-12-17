import { axiosInstance } from "@/hooks/axios";

const editCategory = async (id: string, name: string) => {
  const response = await axiosInstance.patch(`/admin/update-category/${id}`, {
    name,
  });
  return response.data;
};
export default editCategory;
