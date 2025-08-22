"use client";

import { createContext, useState } from "react";

type MenuContextType = {
  showMenu: boolean;
  showBackdrop: boolean;
  toggle: (show: boolean) => void;
};

type MenuContextProviderProps = {
  children: React.ReactNode;
};

export const MenuContext = createContext<MenuContextType | undefined>(
  undefined
);

export const MenuContextProvider = (props: MenuContextProviderProps) => {
  const { children } = props;
  const [showMenu, setShowMenu] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);

  const toggle = (show: boolean) => {
    setShowMenu(show);
    setTimeout(() => setShowBackdrop(show), !show ? 300 : 0);
  };

  return (
    <MenuContext.Provider value={{ showMenu, showBackdrop, toggle }}>
      {children}
    </MenuContext.Provider>
  );
};
