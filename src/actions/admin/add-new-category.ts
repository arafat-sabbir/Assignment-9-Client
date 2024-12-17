import { axiosInstance } from "@/hooks/axios";

const addNewCategory = async (name: string) => {
  const response = await axiosInstance.post("/admin/add-category", {
    name,
  });
  return response.data;
};
export default addNewCategory;
