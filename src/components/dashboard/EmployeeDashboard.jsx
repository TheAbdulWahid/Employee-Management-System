import React from "react";
import Header from "../../others/Header";
import TaskListNumber from "../../others/TaskListNumber";
import TaskList from "../TaskList/TaskList";
import TaskCard from "../TaskList/TaskCard";

const EmployeeDashboard = ({handleLogout,loggedinUserData}) => {
  return (
    <div className="admindashboard">
      <div className="container">
        <div className="admindashboard-content">
          <Header handleLogout={handleLogout} loggedinUserData={loggedinUserData} />
          <TaskListNumber loggedinUserData={loggedinUserData} />
          <TaskCard loggedinUserData={loggedinUserData}/>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
