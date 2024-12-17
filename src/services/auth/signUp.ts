import { axiosInstance } from "../../hooks/axios";

const signUp = async (data: any) => {
  const response = await axiosInstance.post("/auth/signUp", data);
  return response.data;
};

export default signUp;
