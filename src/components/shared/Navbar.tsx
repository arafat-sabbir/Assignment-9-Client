"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import Container from "./Container";
import Menu from "./Menu";
import NavSheet from "./NavSheet";
import { Link} from "react-router";
import { Button } from "../ui/button";
import { useTheme } from "../ui/theme-provider";
import { Moon, Sun } from "lucide-react";
import UserProfile from "./UserProfile";
import { useAppSelector } from "@/redux/features/hooks";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const user = useAppSelector(selectCurrentUser);
  const cartProducts = JSON.parse(localStorage.getItem("cart") || "[]");
  const [isSticky, setIsSticky] = useState(false);
  // Handle sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  console.log(user);
  return (
    <nav
      className={cn(
        "sticky top-0 z-40 bg-white/50 backdrop-blur-sm duration-300",
        {
          "border-b border-b-[#eaeaea]": isSticky,
        }
      )}
    >
      <Container className="flex items-center gap-4 justify-between py-3 lg:py-6 duration-300">
        <div className="basis-[204px]">AssignMent 8</div>
        <div className="hidden lg:block">
          <Menu isNavbarSticky={isSticky} />
        </div>
        <div className="hidden lg:flex justify-end basis-[204px] ">
          <div className="flex md:gap-6 gap-2 items-center">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? (
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-90 scale-100 transition-all" />
              ) : (
                <Moon className="h-[1.2rem] w-[1.2rem] text-white scale-100 transition-all" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
            {!user ? (
              <Link to={"/login"}>
                <Button className="lg:block hidden dark:text-white">
                  Login
                </Button>
              </Link>
            ) : (
              <UserProfile user={user} cart={cartProducts?.length} />
            )}
          </div>
        </div>
        <NavSheet />
      </Container>
    </nav>
  );
};

export default Navbar;
