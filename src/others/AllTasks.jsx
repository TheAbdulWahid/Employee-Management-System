import React, { useContext } from "react";
import { AppContext } from "../context/AuthContext";

const AllTasks = () => {
  const [userData, setUserData] = useContext(AppContext);
  console.log(userData.employeesData)
  return (
    <div className="pt-[50px]">
      <h2 className="text-[50px] font-bold p-[20px]">All Tasks</h2>
      <div className="tasklist p-[20px] pt-[0] overflow-x-auto scrollbar-none ">
        <div className="tasklist-head flex gap-[20px] w-full mb-[20px]">
          <p className="w-1/5 p-[10px] bg-black">Employee Name</p>
          <p className="w-1/5 p-[10px] bg-blue-400">Accepted Task</p>
          <p className="w-1/5 p-[10px] bg-green-400">New Task</p>
          <p className="w-1/5 p-[10px] bg-yellow-400">Completed Task</p>
          <p className="w-1/5 p-[10px] bg-red-400">Failed Task</p>
        </div>
        <div className="tasklist-body flex flex-col gap-[20px] w-full mb-[20px]">
          {userData.employeesData.map((e,idx) => {
            return (
              <div key={idx} className="record-row w-full flex gap-[20px]">
                <p className="p-[10px] w-1/5 bg-black">{e.firstname}</p>
                <p className="w-1/5 p-[10px] bg-blue-400">
                  {e.taskNumbers.active}
                </p>
                <p className="w-1/5 p-[10px] bg-green-400">
                  {e.taskNumbers.newTask}
                </p>
                <p className="w-1/5 p-[10px] bg-yellow-400">
                  {e.taskNumbers.completed}
                </p>
                <p className="w-1/5 p-[10px] bg-red-400">
                  {e.taskNumbers.failed}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllTasks;
