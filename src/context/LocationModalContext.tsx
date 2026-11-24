import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface LocationModalContextType {
  isLocationOpen: boolean;
  openLocationModal: () => void;
  closeLocationModal: () => void;
}

const LocationModalContext = createContext<LocationModalContextType | undefined>(undefined);

export function LocationModalProvider({ children }: { children: ReactNode }) {
  const [isLocationOpen, setIsLocationOpen] = useState(false);

  const openLocationModal = () => setIsLocationOpen(true);
  const closeLocationModal = () => setIsLocationOpen(false);

  return (
    <LocationModalContext.Provider
      value={{ isLocationOpen, openLocationModal, closeLocationModal }}
    >
      {children}
    </LocationModalContext.Provider>
  );
}

export function useLocationModal() {
  const context = useContext(LocationModalContext);
  if (!context) {
    throw new Error("useLocationModal must be used within a LocationModalProvider");
  }
  return context;
}
