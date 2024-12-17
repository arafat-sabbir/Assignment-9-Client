import { axiosInstance } from "@/hooks/axios";

const deleteShop = async (id: string) => {
  const response = await axiosInstance.delete(`/vendor/delete-shop/${id}`);
  return response.data;
};

export default deleteShop;
