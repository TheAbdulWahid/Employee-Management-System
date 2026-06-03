import React, { useContext, useEffect, useEffectEvent, useState } from "react";
import Login from "./components/auth/Login";
import EmployeeDashboard from "./components/dashboard/EmployeeDashboard";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import { setItems, getItems } from "./utils/localStorage";
import { AppContext } from "./context/AuthContext";

const App = () => {
  const [user, setUser] = useState("null");
  const [loggedinUserData, setLoggedinUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const authData = useContext(AppContext);
  // console.log(authData);

  useEffect(() => {
    setLoading(false);
    if (authData) {
      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
      if (loggedInUser) {
        setUser(loggedInUser.role);
        setLoggedinUserData(loggedInUser.data);
      }
    }
  }, [authData]);

  const userLogin = (email, password) => {
    if (email == "admin@example.com" && password == 123) {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin", data: authData.employeesData }));
      const data = JSON.parse(localStorage.getItem("loggedInUser"))
      console.log(data)
      setLoggedinUserData(data.data);
    } else if (authData) {
      const employee = authData.employeesData.find((e) => e.email == email && e.password == password);
      if (employee) {
        localStorage.setItem("loggedInUser",JSON.stringify({ role: "employee", data: employee }),);
        setUser('employee');
        setLoggedinUserData(employee);
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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {user == "admin" ? (
        <AdminDashboard handleLogout={handleLogout} loggedinUserData={loggedinUserData} />
      ) : user == "employee" ? (
        <EmployeeDashboard
          handleLogout={handleLogout}
          loggedinUserData={loggedinUserData}
        />
      ) : (
        <Login userLogin={userLogin} />
      )}
    </>
  );
};

export default App;
