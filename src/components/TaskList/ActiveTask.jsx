import React, { useContext } from "react";
import { AppContext } from "../../context/AuthContext";


const ActiveTask = ({userData}) => {
  const userData1 = useContext(AppContext);
  return (
    <div
      className="active-task taskbox w-[400px] p-[30px] rounded min-h-[300px] shrink-0 relative"
      style={{ backgroundColor: userData1.employeesData.color }}
    >
      <div className="taskbox-header flex items-center justify-between mb-[20px] gap-[10px]">
        <div className="left flex gap-[10px] flex-wrap">
          <div className="category">
            <p className="priority px-[10px] py-[4px] bg-red-600 rounded">
              {userData1.employeesData.category}
            </p>
          </div>

          {/* <div className="tags">
            {e.active == true ? (
              <TagActive loggedinUserData={loggedinUserData} />
            ) : e.newTask == true ? (
              <TagNewTask loggedinUserData={loggedinUserData} />
            ) : e.completed == true ? (
              <TagCompletedTask loggedinUserData={loggedinUserData} />
            ) : e.failed == true ? (
              <TagFailedTask />
            ) : (
              "null"
            )}
          </div> */}
        </div>
        <div className="right flex-1">
          <p className="date">{userData1.employeesData.taskDate}</p>
        </div>
      </div>
      <div className="taskbox-body">
        <div className="task-heading text-[28px] font-bold mb-[5px]">
          {userData1.employeesData.taskTitle}
        </div>
        <div className="task-des text-[14px]">
          <p>{userData1.employeesData.taskDescription}</p>
        </div>
      </div>
        {/* <div className="newtask-ribbon">
          {e.newTask == true ? <TagNewTask /> : null}
        </div> */}
      <div className="action-btns"></div>
    </div>
  );
};

export default ActiveTask;
