import React from "react";
import Header from "../../others/Header";
import TaskListNumber from "../../others/TaskListNumber";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({handleLogout,loggedinUserData}) => {
  return (
    <div className="admindashboard">
      <div className="container">
        <div className="admindashboard-content">
          <Header handleLogout={handleLogout} loggedinUserData={loggedinUserData} />
          <TaskListNumber />
          <TaskList />
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
