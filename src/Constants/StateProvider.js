import React, { createContext, useState } from "react";

export const StateContext = createContext();

export function SearchProvider({ children }) {
  const [items, setItems] = useState("");

  const addSearch = (search) => {
    setItems(search); //update the state
  };


  return (
    //setting provider value and pass to the child component
    <StateContext.Provider value={{ items, addSearch }}>
      {children}
    </StateContext.Provider>
  );
}