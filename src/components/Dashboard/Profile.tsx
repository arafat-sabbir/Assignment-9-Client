import { selectCurrentUser, TUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/features/hooks";

const Profile = () => {
  const userinfo = useAppSelector(selectCurrentUser) as TUser;
  return (
    <div className="min-w-[calc(100vw-530px)] mx-auto min-h-[100vh] p-4  flex justify-center items-center">
      <div className="">
        <img
          className="w-60 h-60 rounded-full mx-auto border-dashed border-main border"
          src={
            "https://i.ibb.co.com/tQ0K88j/dummy-profile-pic-300x300-1-removebg-preview.png"
          }
          alt=""
        />
        <div className="text-center">
          <h3 className="text-3xl font-semibold mt-6">
            Your Name : <span className="text-main">{userinfo?.name}</span>
          </h3>
          <h3 className="text-2xl font-semibold mt-6">
            Your Email: <span className="text-main">{userinfo?.email}</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Profile;
