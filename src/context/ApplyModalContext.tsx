import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface ApplyModalContextType {
  isOpen: boolean;
  selectedCourse: string;
  openModal: (course?: string) => void;
  closeModal: () => void;
}

const ApplyModalContext = createContext<ApplyModalContextType | undefined>(undefined);

export function ApplyModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  const openModal = (course?: string) => {
    setSelectedCourse(course || "");
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ApplyModalContext.Provider value={{ isOpen, selectedCourse, openModal, closeModal }}>
      {children}
    </ApplyModalContext.Provider>
  );
}

export function useApplyModal() {
  const context = useContext(ApplyModalContext);
  if (!context) {
    throw new Error("useApplyModal must be used within an ApplyModalProvider");
  }
  return context;
}
