import { createContext, useCallback, useContext, useState } from "react";

interface NavbarContextType {
  open: boolean;
  toggle: () => void;
}

const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

export const NavbarContextProvider = ({
  children,
}: React.PropsWithChildren) => {
  const [open, setOpen] = useState<boolean>(false);
  const toggle = useCallback(() => setOpen((open) => !open), []);

  return (
    <NavbarContext.Provider value={{ open, toggle }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbarContext = () => {
  const context = useContext(NavbarContext);
  if (!context)
    throw new Error("useNavbarContext must be used within NavbarProvider");
  return context;
};
