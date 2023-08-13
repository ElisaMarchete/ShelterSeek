// TODO:
// 1. Create a UserContext
// Info needed:
// - isLoggedIn
// - username
// - saved shelters

import React, { useState, createContext } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [savedShelters, setSavedShelters] = useState([]);

  const value = {
    isLoggedIn,
    setIsLoggedIn,
    username,
    setUsername,
    savedShelters,
    setSavedShelters,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
