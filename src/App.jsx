import React, { useEffect, useEffectEvent } from "react";
import Login from "./components/auth/Login";
import EmployeeDashboard from "./components/dashboard/EmployeeDashboard";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import { setItems, getItems } from "./utils/localStorage";


const App = () => {
  
  useEffect(() => {
    setItems();
    getItems();
  });

  return (
    <>
      <Login />
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
    </>
  );
};

export default App;
