import React from "react";
import Header from "../../others/Header";
import TaskListNumber from "../../others/TaskListNumber";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({handleLogout}) => {
  return (
    <div className="admindashboard">
      <div className="container">
        <div className="admindashboard-content">
          <Header handleLogout={handleLogout} />
          <TaskListNumber />
          <TaskList />
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
