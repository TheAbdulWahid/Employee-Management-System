import React, { createContext, useEffect, useState } from "react";
import { getItems, setItems } from "../utils/localStorage";

export const AppContext = createContext();

const AuthContext = ({ children }) => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    setItems();
    const { adminData, employeesData } = getItems();
    setUserData({ adminData, employeesData });
  }, []);

 

  return (
    <div>
      <AppContext.Provider value={userData}>{children}</AppContext.Provider>
    </div>
  );
};

export default AuthContext;
