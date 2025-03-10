import React from "react";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/themeComponent";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NavBar = () => {
  return (
    <nav className="h-16 bg-background/60 sticky top-0 border-b px-8 backdrop-blur flex items-center justify-between">
      <div className="font-bold text-xl">CodeChronicles</div>
      <ul className=" hidden md:flex w-full md:justify-end space-x-4 items-center">
        <li><Link href={"/"}>Home</Link></li>
        <li><Link href={"/about"}>About</Link></li>
        <li><Link href={"/blog"}>Blog</Link></li>
        <li><Link href={"/contact"}>Contact</Link></li>
        <li className="buttons px-4 space-x-2">
          <Button asChild>
          <Link href={"/login"} className={buttonVariants({ variant: "default" })}>Login</Link>          
          </Button>
          <Button asChild>
          <Link href={"/signUp"} className={buttonVariants({ variant: "default" })}>Sign Up</Link>
          </Button>
        </li>
      </ul>
      <div className="flex gap-2 items-center">
        <ModeToggle />
        <Sheet>
          <SheetTrigger>
            <HamburgerMenuIcon className="size-7 md:hidden" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default NavBar;
