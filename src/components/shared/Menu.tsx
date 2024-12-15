"use client";

import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";
import { Link, useLocation } from "react-router";

const fakeMenu = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Contact", path: "/contact" },
];

const fakeNavLinks = [
  { id: 1, name: "Dashboard", path: "/dashboard" },
  { id: 2, name: "My Bookings", path: "/my-bookings" },
  { id: 3, name: "Logout", path: "/logout" },
];

const Menu = ({
  className,
  isNavbarSticky,
  user,
}: {
  className?: string;
  isNavbarSticky?: boolean;
  user?: any;
}) => {
  const { pathname } = useLocation();

  return (
    <div className={className}>
      <ul className="flex flex-col gap-y-3 lg:flex-row lg:gap-x-8 xl:gap-x-10">
        {fakeMenu.map((item) => (
          <li key={item.id}>
            <Link
              to={item.path}
              className={cn(
                "text-sm lg:text-base text-t-700 inline-flex py-1 lg:px-2 duration-300 hover:text-p-900",
                {
                  "text-t-900": isNavbarSticky,
                  "text-primary": pathname === item.path,
                }
              )}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      {user?._id ? (
        <>
          <Separator className="lg:hidden my-3" />
          <ul className="flex flex-col gap-y-3 lg:flex-row lg:gap-x-8 xl:gap-x-10">
            {fakeNavLinks.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className={cn(
                    "text-sm lg:text-base text-t-700 inline-flex py-1 lg:px-2 duration-300 hover:text-p-900",
                    {
                      "text-t-900": isNavbarSticky,
                      "text-primary": pathname === item.path,
                    }
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </div>
  );
};

export default Menu;
