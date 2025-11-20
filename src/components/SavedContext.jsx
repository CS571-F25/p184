import { createContext, useState, useContext } from "react";

const SavedContext = createContext();

export function SavedProvider({ children }) {
  const [savedList, setSavedList] = useState([]);

  function addToSaved(item) {
    // no repeat
    if (!savedList.find((x) => x.name === item.name)) {
      setSavedList([...savedList, item]);
    }
  }

  return (
    <SavedContext.Provider value={{ savedList, addToSaved }}>
      {children}
    </SavedContext.Provider>
  );
}

export function useSaved() {
  return useContext(SavedContext);
}
