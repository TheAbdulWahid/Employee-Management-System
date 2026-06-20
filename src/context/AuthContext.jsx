import React, { createContext, useEffect, useState } from "react";
import { getItems, setItems } from "../utils/localStorage";

export const AppContext = createContext();

const AuthContext = ({ children }) => {
  const [userData, setUserData] = useState({
    employeesData: []
  });
  
  useEffect(() => {
    setItems();
    const {employeesData} = getItems();
    setUserData({employeesData});
  }, []);

 

  return (
    <div>
      <AppContext.Provider value={[userData, setUserData]}>{children}</AppContext.Provider>
    </div>
  );
};

export default AuthContext;
