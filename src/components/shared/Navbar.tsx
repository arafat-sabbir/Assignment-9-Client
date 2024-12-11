"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import Container from "./Container";
import Menu from "./Menu";
import NavSheet from "./NavSheet";

const Navbar = () => {
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
        <div className="basis-[204px]">
          AssignMent 8
        </div>
        <div className="hidden lg:block">
          <Menu isNavbarSticky={isSticky} />
        </div>
        <div className="hidden lg:flex justify-end basis-[204px] ">
          Login /User
        </div>
        <NavSheet className="bg-red-500"/>
      </Container>
    </nav>
  );
};

export default Navbar;
