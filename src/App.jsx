import React, { useContext, useEffect, useEffectEvent, useState } from "react";
import Login from "./components/auth/Login";
import EmployeeDashboard from "./components/dashboard/EmployeeDashboard";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import { setItems, getItems } from "./utils/localStorage";
import { AppContext } from "./context/AuthContext";

const App = () => {
  const [user, setUser] = useState("null");
  const [loggedinUserData, setLoggedinUserData] = useState(null);
  const authData = useContext(AppContext);  
  const userLogin = (email, password) => {
    if (email == "admin@example.com" && password == 123) {
      console.log("This is admin");
      setUser("admin");
      localStorage.setItem("loggedInUser", "admin");
    } else if (authData) {
      const employee = authData.employeesData.find(e => e.email == email && e.password == password);
      if (employee) {
        setUser("employee");
        setLoggedinUserData(employee);
        console.log(employee)
        localStorage.setItem("loggedInUser", "employee");
        localStorage.setItem("loggedinUserData", JSON.stringify(employee));
      }
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
  useEffect(() => {
    if (role === 'employee') {
      const employeeData = JSON.parse(localStorage.getItem('loggedinUserData'))
      console.log("hello")
      setLoggedinUserData(employeeData)
    }
    setUser(role);
  }, []);

  return (
    <>
      {role == "employee" ? (
        <EmployeeDashboard handleLogout={handleLogout} loggedinUserData={loggedinUserData} />
      ) : role == "admin" ? (
        <AdminDashboard handleLogout={handleLogout} />
      ) : (
        <Login userLogin={userLogin} />
      )}
    </>
  );
};

export default App;
