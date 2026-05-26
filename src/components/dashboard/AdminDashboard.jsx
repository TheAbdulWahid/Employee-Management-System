import React from "react";
import Header from "../../others/Header";
import CreateTask from "../../others/CreateTask";
import AllTasks from "../../others/AllTasks";

const AdminDashboard = ({handleLogout}) => {
  return (
    <div className="admin-dashboard">
      <div className="container">
        <div className="admin-dashboard-content">
          <Header handleLogout={handleLogout} />
          <CreateTask />
          <AllTasks />
        </div>
      </div>
    </div>  
  );
};

export default AdminDashboard;
