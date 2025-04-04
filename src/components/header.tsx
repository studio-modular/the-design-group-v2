"use client";

import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { DialogTitle } from "../shadcn/components/ui/dialog";
import { Separator } from "../shadcn/components/ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../shadcn/components/ui/sheet";
import { cn } from "../shadcn/utils";
import { DesignGroupFullLogo as Logo } from "./logo";

export function MobileNavigationBar({ className }: { className?: string }) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className={`${className} block lg:hidden`}>
      <div className="fixed flex justify-start left-8 z-30 top-8 text-inherit">
        <Link href="/">
          <Logo height="40px" width="auto" />
        </Link>
      </div>
      <Sheet key="mobile-menu" onOpenChange={setOpen} open={open}>
        <SheetTrigger className="fixed top-8 right-8 z-30">
          <MenuIcon
            className={cn([
              `stroke-1 size-8 text-inherit scale-x-150`,
              !open && "opacity-100 pointer-events-auto",
              open && "opacity-0 pointer-events-none",
              className,
            ])}
          />
        </SheetTrigger>
        <SheetContent
          className="bg-[#605D51] text-white border-transparent !w-full !max-w-none [&_svg]:size-8"
          side="right"
        >
          <VisuallyHidden>
            <DialogTitle>Navigation</DialogTitle>
          </VisuallyHidden>
          <SheetHeader className="flex flex-col gap-3">
            <Link
              className="uppercase tracking-wider text-lg text-left w-11/12 mx-auto"
              href="/"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Separator className="w-11/12 bg-white mx-auto" />
            <Link
              className="uppercase tracking-wider text-lg text-left w-11/12 mx-auto"
              href="/portfolio"
              onClick={() => setOpen(false)}
            >
              Portfolio
            </Link>
            <Separator className="w-11/12 bg-white mx-auto" />
            <Link
              className="uppercase tracking-wider text-lg text-left w-11/12 mx-auto"
              href="https://waimarinolodge.co.nz/real-estate"
              onClick={() => setOpen(false)}
            >
              Real Estate
            </Link>
            <Separator className="w-11/12 bg-white mx-auto" />
            <Link
              className="uppercase tracking-wider text-lg text-left w-11/12 mx-auto"
              href="/contact"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
            <Separator className="w-11/12 bg-white mx-auto" />
            <Link
              className="uppercase tracking-wider text-lg text-left w-11/12 mx-auto"
              href="/contact"
              onClick={() => setOpen(false)}
            >
              Work With Us
            </Link>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default function NavigationBar({ className }: { className?: string }) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <MobileNavigationBar className={className} />
      <header
        className={`hidden lg:flex fixed bg-gradient-to-b from-black/10 to-black/0 !border-l-transparent box-border top-0 font-skia tracking-wide left-0 w-full p-6 lg:p-8 text-white z-30 items-start ${className ?? ""}`}
      >
        <nav className="flex-1 flex gap-8 lg:gap-12 items-start text-sm h-full uppercase tracking-wider">
          <Link className="uppercase tracking-wider text-base" href="/portfolio">
            Portfolio
          </Link>
          <Link
            className="uppercase tracking-wider text-base"
            href="https://waimarinolodge.co.nz/real-estate"
            target="_blank"
          >
            Real Estate
          </Link>
          <Link className="uppercase tracking-wider text-base" href="/contact">
            Contact
          </Link>
        </nav>
        <div>
          <Link className="text-current" href="/">
            <Logo height="80px" width="auto" />
          </Link>
        </div>
        <div className="flex-1 text-white flex justify-end">
          <Sheet key="desktop-menu" onOpenChange={setOpen} open={open}>
            <SheetTrigger className={className}>
              <MenuIcon
                className={cn([
                  `stroke-1 text-inherit scale-x-150 cursor-pointer`,
                  !open && "opacity-100 pointer-events-auto",
                  open && "opacity-0 pointer-events-none",
                  className,
                ])}
              />
            </SheetTrigger>
            <SheetContent
              className={`!bg-transparent bg-gradient-to-l from-black/15 to-transparent !text-inherit shadow-none border-none !w-72 ${className ?? ""}`}
            >
              <VisuallyHidden>
                <DialogTitle>Navigation</DialogTitle>
              </VisuallyHidden>
              <nav className={`flex flex-col gap-4 items-end font-skia ${className ?? ""}`}>
                <Link
                  className="uppercase tracking-wider text-lg text-right w-11/12 mx-auto"
                  href="/"
                  onClick={() => setOpen(false)}
                >
                  Home
                </Link>
                <Link
                  className="uppercase tracking-wider text-lg text-right w-11/12 mx-auto"
                  href="/portfolio"
                  onClick={() => setOpen(false)}
                >
                  Portfolio
                </Link>
                <Link
                  className="uppercase tracking-wider text-lg text-right w-11/12 mx-auto"
                  href="https://waimarinolodge.co.nz/real-estate"
                  onClick={() => setOpen(false)}
                  target="_blank"
                >
                  Real Estate
                </Link>
                <Link
                  className="uppercase tracking-wider text-lg text-right w-11/12 mx-auto"
                  href="/contact"
                  onClick={() => setOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  className="uppercase tracking-wider text-lg text-right w-11/12 mx-auto"
                  href="/work-with-us"
                  onClick={() => setOpen(false)}
                >
                  Work With Us
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
}
