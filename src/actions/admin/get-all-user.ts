import { axiosInstance } from "@/hooks/axios";

const getAllUser = async () => {
  const response = await axiosInstance.get("/users");
  return response.data;
};

export default getAllUser;
