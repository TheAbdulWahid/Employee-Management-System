import React from "react";
import Header from "../../others/Header";
import TaskListNumber from "../../others/TaskListNumber";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = () => {
  return (
    <div className="admindashboard">
      <div className="container">
        <div className="admindashboard-content">
          <Header />
          <TaskListNumber />
          <TaskList />
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
