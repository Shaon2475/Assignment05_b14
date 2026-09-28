import { createContext, useContext, useMemo, useState } from "react";
import { toast } from "react-toastify";

const StackContext = createContext(null);

export function StackProvider({ children }) {
  const [stack, setStack] = useState([]);

  const isInStack = (id) => stack.some((item) => item.id === id);

  const addToStack = (technology) => {
    if (isInStack(technology.id)) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }
    setStack((prev) => [...prev, technology]);
    toast.success(`${technology.name} added to your stack.`);
  };

  const removeFromStack = (id) => {
    const removed = stack.find((item) => item.id === id);
    setStack((prev) => prev.filter((item) => item.id !== id));
    if (removed) {
      toast.info(`${removed.name} removed from your stack.`);
    }
  };

  const removeAll = () => {
    if (stack.length === 0) return;
    setStack([]);
    toast.info("Your stack has been cleared.");
  };

  const value = useMemo(
    () => ({ stack, isInStack, addToStack, removeFromStack, removeAll }),
    [stack]
  );

  return <StackContext.Provider value={value}>{children}</StackContext.Provider>;
}

export function useStack() {
  const context = useContext(StackContext);
  if (!context) {
    throw new Error("useStack must be used within a StackProvider");
  }
  return context;
}
