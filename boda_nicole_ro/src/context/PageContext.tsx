import React from "react";
// src/context/PageContext.tsx
import { createContext, useContext, ReactNode } from "react";

// Define la forma del contexto
interface PageContextType {
  page_name: string;
  novia_name: string;
  novio_name: string;
}

// Crea el contexto con un valor por defecto (opcional si lo pasas en el Provider)
const PageContext = createContext<PageContextType | undefined>(undefined);

// Hook personalizado para acceder fácilmente al contexto
export const usePage = () => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error("usePage debe usarse dentro de PageProvider");
  }
  return context;
};

// Componente proveedor del contexto
export const PageProvider = ({ children }: { children: ReactNode }) => {
  const value: PageContextType = {
    page_name: "Diego & Nicole",
    novia_name: "Nicole",
    novio_name: "Diego",
  };

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};
