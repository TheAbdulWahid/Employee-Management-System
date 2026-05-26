import React, { useContext, useEffect, useEffectEvent, useState } from "react";
import Login from "./components/auth/Login";
import EmployeeDashboard from "./components/dashboard/EmployeeDashboard";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import { setItems, getItems } from "./utils/localStorage";
import { AppContext } from "./context/AuthContext";

const App = () => {
  const [user, setUser] = useState("null");
  const authData = useContext(AppContext);

  const userLogin = (email, password) => {
    if (email == "admin@example.com" && password == 123) {
      console.log("This is admin");
      setUser("admin");
      localStorage.setItem("loggedInUser", "admin");
    } else if (authData && authData.employeesData.find((e)=>{e.email === email && e.password === password})) {
      console.log("This is Employee");
      setUser("employee");
      localStorage.setItem("loggedInUser", "employee");
    } else {
      alert("Invalid Credentials");
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("loggedInUser");
    console.log("logout");
  };

  const role = localStorage.getItem("loggedInUser");
  useEffectEvent(() => {
    if (role) {
      setUser(role);
    }
  }, []);

  return (
    <>
      {role == "employee" ? (
        <EmployeeDashboard handleLogout={handleLogout} />
      ) : role == "admin" ? (
        <AdminDashboard handleLogout={handleLogout} />
      ) : (
        <Login userLogin={userLogin} />
      )}
    </>
  );
};

export default App;
