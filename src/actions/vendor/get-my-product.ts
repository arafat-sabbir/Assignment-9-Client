import { axiosInstance } from "@/hooks/axios";

const getAllMyProduct = async () => {
  const response = await axiosInstance.get("/products/vendor");
  return response.data;
};

export default getAllMyProduct;
