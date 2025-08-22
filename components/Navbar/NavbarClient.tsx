"use client";

import { Button } from "@/components/Button/Button";
import Typography from "@/components/Typography/Typography";
import { MenuContext } from "@/context/menuContextProvider";
import pageLinks from "@/lib/pageLinks";
import { cn } from "@/utils/utils";
import { X } from "lucide-react";
import Link from "next/link";
import { useContext, useState } from "react";

const MenuList = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("Menu must be used within a MenuContextProvider");
  }
  const { showBackdrop, showMenu, toggle } = context;
  const [linkIndex, setLinkIndex] = useState<number | null>(null);

  return (
    <>
      <div
        onClick={() => toggle(false)}
        className={cn(
          "fixed inset-0 z-[80] h-screen w-screen translate-x-0 bg-black/40 opacity-100 backdrop-blur-sm transition-opacity duration-300",
          { "opacity-100": showMenu },
          { "translate-x-full": !showBackdrop }
        )}
      />
      <aside
        className={cn(
          "fixed top-0 left-full flex z-[90] h-screen w-full max-w-[500px] scroll-pt-20 flex-col overflow-y-auto px-6 pt-20 pb-6 text-background transition-all duration-300 xl:p-16",
          { "-translate-x-full": showMenu }
        )}
      >
        <Button
          variant="ghost"
          size="small"
          onClick={() => toggle(false)}
          aria-label="Close menu"
          className="self-end mb-4 text-4xl font-bold text-white cursor-pointer absolute top-0 right-0 hover-scale-102 transition-transform"
        >
          <X size={24} />
        </Button>
        {pageLinks.map((link, index) => (
          <div
            key={link.path}
            className={cn("transition-colors duration-300", {
              "text-primaryAccent": index !== linkIndex && linkIndex !== null,
            })}
            onMouseEnter={() => setLinkIndex(index)}
            onMouseLeave={() => setLinkIndex(null)}
          >
            <Link href={link.path}>
              <Typography
                onClick={() => toggle(false)}
                className={
                  "py-2 text-end text-xl font-medium uppercase z-[101] hover:text-linkHoverClr"
                }
                size="lg"
              >
                {link.title}
              </Typography>
            </Link>
          </div>
        ))}
      </aside>
    </>
  );
};

export default MenuList;
