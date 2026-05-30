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
    // if (role === "employee") {
    //   const employeeData = JSON.parse(localStorage.getItem("loggedinUserData"));
    //   console.log("hello");
    //   setLoggedinUserData(employeeData);
    // }
    // setUser(role);
    setLoading(false);
    if (authData) {
      const loggedInUser = JSON.parse(
        localStorage.getItem("loggedInUser".role),
      );
      if (loggedInUser) {
        setUser(loggedInUser.role);
      }
    }
  }, [authData]);

  const userLogin = (email, password) => {
    if (email == "admin@example.com" && password == 123) {
      console.log("This is admin");
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employee = authData.employeesData.find((e) => e.email == email && e.password == password);
      if (employee) {
        console.log(employee)
        localStorage.setItem("loggedInUser",JSON.stringify({ role: "employee" }),);
        setUser('employee');
        setLoggedinUserData(employee);
      }
      
      // if (employee) {
      //   setUser("employee");
      //   setLoggedinUserData(employee);
      //   console.log(employee);
      //   localStorage.setItem("loggedInUser", "employee");
      //   localStorage.setItem("loggedinUserData", JSON.stringify(employee));
      // }
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
      {/* {role == "employee" ? (
        <EmployeeDashboard handleLogout={handleLogout} loggedinUserData={loggedinUserData} />
      ) : role == "admin" ? (
        <AdminDashboard handleLogout={handleLogout} />
      ) : (
        <Login userLogin={userLogin} />
      )} */}
      {/* {!user ? <Login userLogin={userLogin} /> : ''} */}
      {user == "admin" ? (
        <AdminDashboard handleLogout={handleLogout} />
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
