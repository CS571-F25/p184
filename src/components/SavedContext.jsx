import { createContext, useState, useContext, useEffect } from "react";

const SavedContext = createContext();
const STORAGE_KEY = "travel-saved-destinations";

export function SavedProvider({ children }) {
  const [savedList, setSavedList] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedList));
  }, [savedList]);

  function addToSaved(item) {
    setSavedList((prev) => {
      if (prev.find((x) => x.name === item.name)) return prev;
      return [...prev, item];
    });
  }

  function removeFromSaved(name) {
    setSavedList((prev) => prev.filter((x) => x.name !== name));
  }

  return (
    <SavedContext.Provider value={{ savedList, addToSaved, removeFromSaved }}>
      {children}
    </SavedContext.Provider>
  );
}

export function useSaved() {
  return useContext(SavedContext);
}
