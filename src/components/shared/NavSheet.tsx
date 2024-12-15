import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet";
import { MenuIcon } from "lucide-react";
import Menu from "./Menu";
import { Button } from "../ui/button";
import NavbarCta from "./NavCta";

const NavSheet = ({
  user,
}: {
  className?: string;
  generalSiteSettings?: any;
  user?: any;
}) => {
  const [open, setOpen] = useState(false);
  const handleLogout = async () => {
    
  };

  // Close the sheet when the user presses the Escape key
  useEffect(() => {
    const handleEscape = (e:any) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, [open]);

  // Close the sheet when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [open]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="border border-border p-1 rounded-sm z-50 lg:hidden">
        <MenuIcon />
      </SheetTrigger>
      <SheetContent className="flex flex-col p-0">
        <SheetHeader className="text-left p-4">Assignment 9</SheetHeader>
        <Menu className="flex-1 overflow-y-auto p-4" user={user} />
        <SheetFooter className="mt-auto bg-p-300/50 p-4 grid sm:justify-stretch">
          {user?._id ? (
            <div className="flex items-center justify-between gap-3">
              {user?.avatar ? (
                <h1>User Avatar</h1>
              ) : (
                <span className="w-10 aspect-square rounded-full bg-primary/10 text-primary inline-flex items-center justify-center font-semibold">
                  {user.name.charAt(0)}
                </span>
              )}
              <p className="text-sm mr-auto line-clamp-1">{user?.name}</p>
              <Button
                className="py-1.5 px-3 text-sm font-medium"
                onClick={handleLogout}
              >
                Sign Out
              </Button>
            </div>
          ) : (
            <NavbarCta onClose={() => setOpen(false)} />
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default NavSheet;
