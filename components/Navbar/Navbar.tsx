"use client";

import { Button } from "@/components/Button/Button";
import Typography from "@/components/Typography/Typography";
import { MenuContext } from "@/context/menuContextProvider";
import useEventListener from "@/hooks/useEventListener";
import pageLinks from "@/lib/pageLinks";
import { cn, isBrowser } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";

const NavbarClient = ({ withBg = true, variant = "light" }) => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("Menu must be used within a MenuContextProvider");
  }
  const { showMenu, toggle } = context;

  const [isNavDown, setIsNavDown] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);

  const isNavBellow = () => {
    if (!isBrowser()) return false;

    return isNavDown && scrollPos > window.innerHeight / 3;
  };

  const handleKeyDown = (ev: KeyboardEvent) => {
    if (ev.key === "Escape" && showMenu) {
      ev.preventDefault();
      toggle(false);
    }
  };

  const handleScroll = () => {
    const { scrollY } = window;
    const isScrollingDown = scrollY > scrollPos;
    const isScrollingUp = scrollY < scrollPos;
    const isPastThreshold = Math.abs(scrollY - scrollPos) > 5;
    const isPastScreenThird = scrollPos > window.innerHeight / 3 - 50;

    if (isNavDown && isPastScreenThird && isScrollingDown && isPastThreshold) {
      setIsNavDown(false);
      if (showMenu) toggle(false);
    }

    if (isScrollingUp && isPastThreshold && !isNavDown) {
      setIsNavDown(true);
    }

    setScrollPos(scrollY);
  };

  const handleToggle = () => {
    if (!isNavDown) return;
    toggle(!showMenu);
  };

  useEventListener<KeyboardEvent>({
    event: "keydown",
    callback: handleKeyDown,
  });

  useEventListener({
    event: "scroll",
    callback: handleScroll,
  });

  return (
    <>
      <nav
        className={cn(
          "fixed z-30 w-full hover:bg-hover-background hover:transform-hoverTransform flex items-center justify-between ",
          { "opacity-0": !isNavDown },
          { "bg-navbarBgLight shadow-lg": withBg || isNavBellow() },
          { "bg-primaryBgDark": variant === "dark" }
        )}
      >
        <div className="flex items-center ">
          <Link href="/" className="flex items-center py-4 px-2">
            <Image
              src="/logo.png"
              alt="Alexander&Son Logo"
              width={200}
              height={60}
            />
          </Link>
        </div>
        <div className="hidden md:flex nav-links md:pr-4">
          {pageLinks.map((link) => (
            <Link key={link.path} href={link.path}>
              <Typography
                variant="p"
                className={cn(
                  "nav-linksLinks z-[50] font-navbarFont text-[20px] font-extrabold uppercase py-4 relative hover:navlinksHover"
                )}
              >
                {link.title}
              </Typography>
            </Link>
          ))}
        </div>
        {/* on mobile show hamburger menu */}

        <Button
          onClick={handleToggle}
          className={cn(
            "  cursor-pointer z-[101] hover:bg-hoverBgClr flex h-10 w-10 flex-col items-center justify-center gap-1 p-0 transition-opacity duration-300 md:hidden",
            {
              "bg-transparent hover:bg-hoverBgClr": !withBg && !isNavBellow(),
            },
            { "cursor-default opacity-0": !isNavDown }
          )}
          disabled={!isNavDown}
          variant={"navbar"}
          aria-label="Open navigation menu"
        >
          <div className={cn("hamburger-line", { "line-1": showMenu })} />
          <div className={cn("hamburger-line", { "line-2": showMenu })} />
          <div className={cn("hamburger-line", { "line-3": showMenu })} />
        </Button>
      </nav>
    </>
  );
};

export default NavbarClient;
