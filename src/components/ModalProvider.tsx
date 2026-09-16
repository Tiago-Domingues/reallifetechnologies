"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

type ModalContextValue = {
  open: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextValue | null>(null);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);
  const value = useMemo(() => ({ open, openModal, closeModal }), [open, openModal, closeModal]);
  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
}

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used inside ModalProvider");
  return ctx;
}
