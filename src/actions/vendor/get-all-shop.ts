import { axiosInstance } from "@/hooks/axios";

const getAllShop = async () => {
  const response = await axiosInstance.get("/vendor/shops");
  return response.data;
};

export default getAllShop;
