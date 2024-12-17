import { axiosInstance } from "../../hooks/axios";

const signIn = async (data: any) => {
  const response = await axiosInstance.post("/auth/signIn", data);
  return response.data;
};

export default signIn;
