import { axiosInstance } from "@/hooks/axios";

const updateUserStatus = async (
  id: string,
  status: "ACTIVE" | "SUSPENDED" | "DELETED"
) => {
  const response = await axiosInstance.post(`/admin/update-user-status/${id}`, {
    status,
  });
  return response.data;
};

export default updateUserStatus;
