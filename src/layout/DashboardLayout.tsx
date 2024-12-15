import { NavLink, Outlet, useNavigate } from "react-router";
import { FaHome, FaUser, FaListUl } from "react-icons/fa";
import { FaUsersRays } from "react-icons/fa6";
import { GoCodeReview, GoListUnordered } from "react-icons/go";
import { IoIosGitPullRequest } from "react-icons/io";
import { MdOutlineReviews } from "react-icons/md";
import { TbBrandWish, TbHomeDollar } from "react-icons/tb";
import {
  RiAdvertisementLine,
  RiGitPullRequestFill,
  RiMoneyEuroCircleLine,
} from "react-icons/ri";
import { HiOutlineFolderAdd } from "react-icons/hi";
import { MdOutlineHolidayVillage } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "@/redux/features/hooks";
import {
  logOut,
  selectCurrentUser,
  TUser,
} from "@/redux/features/auth/authSlice";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const DashBoard = () => {
  const dispatch = useAppDispatch();
  const handleSignOut = () => {
    dispatch(logOut());
  };
  const userinfo = useAppSelector(selectCurrentUser) as TUser;
  const role = userinfo?.role;
  const [sheetOpen, setSheetOpen] = useState(false);
  const dashboardItem = (
    <ul className="space-y-4 p-4">
      {role === "ADMIN" ? (
        <>
          {/* Admin Sidebar */}
          <li>
            <NavLink to="/dashboard" className="flex items-center space-x-2">
              <FaUser />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/manageShop"
              className="flex items-center space-x-2"
            >
              <MdOutlineHolidayVillage />
              <span>Manage Shop</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/manageUsers"
              className="flex items-center space-x-2"
            >
              <FaUsersRays />
              <span>Manage Users</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/manageCategories"
              className="flex items-center space-x-2"
            >
              <MdOutlineReviews />
              <span>Manage Category</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/manageTransaction"
              className="flex items-center space-x-2"
            >
              <RiAdvertisementLine />
              <span>Advertise Transaction</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/manageReview"
              className="flex items-center space-x-2"
            >
              <RiGitPullRequestFill />
              <span>Manage Review</span>
            </NavLink>
          </li>
        </>
      ) : role === "USER" ? (
        <>
          {/* User Sidebar */}
          <li>
            <NavLink
              to="/dashboard/order"
              className="flex items-center space-x-2"
            >
              <FaUser />
              <span>Order History</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/products"
              className="flex items-center space-x-2"
            >
              <TbBrandWish />
              <span>Manage Products</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/myReview"
              className="flex items-center space-x-2"
            >
              <GoCodeReview />
              <span>My Review</span>
            </NavLink>
          </li>
        </>
      ) : role === "VENDOR" ? (
        <>
          {/* Vendor Sidebar */}
          <li>
            <NavLink to="/dashboard" className="flex items-center space-x-2">
              <FaUser />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/manageShop"
              className="flex items-center space-x-2"
            >
              <HiOutlineFolderAdd />
              <span>Manage Shop</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/manageProduct"
              className="flex items-center space-x-2"
            >
              <GoListUnordered />
              <span>Manage Product</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/manage-orders"
              className="flex items-center space-x-2"
            >
              <RiMoneyEuroCircleLine />
              <span>Manage Orders</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/manage-reviews"
              className="flex items-center space-x-2"
            >
              <IoIosGitPullRequest />
              <span>Manage Reviews</span>
            </NavLink>
          </li>
        </>
      ) : null}
      <div className="border-t border-gray-300 my-4"></div>
      <li>
        <NavLink to="/" className="flex items-center space-x-2">
          <FaHome />
          <span>Home</span>
        </NavLink>
      </li>
      <li>
        <button
          onClick={handleSignOut}
          className="w-full px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
        >
          Sign Out
        </button>
      </li>
    </ul>
  );

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-72 bg-gray-100 h-screen hidden lg:block p-4">
        <div className="text-center">
          <img
            src={
              "https://i.ibb.co.com/tQ0K88j/dummy-profile-pic-300x300-1-removebg-preview.png"
            }
            alt="Profile"
            className="w-20 h-20 rounded-full mx-auto border border-gray-300"
          />
          <h3 className="text-lg font-semibold mt-4">Welcome Back</h3>
          <h3 className="text-xl font-bold text-red-600">{userinfo.name}</h3>
        </div>
        <div className="mt-6">{dashboardItem}</div>
      </aside>

      {/* Mobile Drawer */}
      <div className="lg:hidden rounded-full h-full bg-gray-100 p-4">
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger className="rounded-full">
            <FaListUl size={24} />
          </SheetTrigger>
          <SheetContent>
            <div className="fixed top-0 left-0 w-64 h-full bg-gray-100 p-4">
              {dashboardItem}
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Content Area */}
      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default DashBoard;
