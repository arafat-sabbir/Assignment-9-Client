import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { logOut, TUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/features/hooks";
import { Link } from "react-router";
import { ShoppingCart, SquareChartGantt } from "lucide-react";

const UserProfile = ({ user, cart }: { user: TUser; cart: number }) => {
  const dispatch = useAppDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="rounded-full p-1 h-12 w-12 shadow-2xl"
        >
          <img
            src={
              "https://i.ibb.co.com/tQ0K88j/dummy-profile-pic-300x300-1-removebg-preview.png"
            }
            className="w-full h-full rounded-full object-cover cursor-pointer"
            alt={user?.name || "User Profile"}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-6 space-y-2 flex flex-col items-center text-center bg-white rounded-xl shadow-lg border border-gray-200 w-64">
        <h1 className="capitalize font-bai text-lg font-semibold text-gray-800">
          {user?.name}
        </h1>
        <h3 className="text-md font-semibold font-bai text-gray-500">
          {user?.email}
        </h3>
        <Link
          className="flex items-center gap-2 w-full justify-center py-2 px-4 text-sm text-white bg-primary rounded-md hover:bg-primary-dark transition duration-300"
          to={"/cart"}
        >
          <ShoppingCart className="w-4 h-4" />
          My Cart ({cart})
        </Link>
        <Link
          className="flex items-center gap-2 w-full justify-center py-2 px-4 text-sm text-white bg-primary rounded-md hover:bg-primary-dark transition duration-300"
          to={"/manage_products"}
        >
          <SquareChartGantt className="w-4 h-4" />
          Product Management
        </Link>
        <Button
          className="w-full bg-red-500 hover:bg-red-600 hover:text-white text-white rounded-md py-2"
          onClick={handleLogOut}
        >
          Logout
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserProfile;
