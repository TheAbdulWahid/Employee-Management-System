import React, { useContext } from "react";
import ActiveTask from "./ActiveTask";
import NewTask from "./NewTask";
import CompletedTask from "./CompletedTask";
import FailedTask from "./FailedTask";
import { AppContext } from "../../context/AuthContext";


const TaskCard = ({ loggedinUserData, index }) => {
    const empData = useContext(AppContext)
  return (
    <div className="tasklist p-[20px] flex flex-nowrap gap-[20px] overflow-x-auto scrollbar-none ">
      {loggedinUserData.tasks.map((e) => {
        if(e.active){
            return <ActiveTask loggedinUserData={loggedinUserData} index={index} />
        }if(e.newTask){
            return <NewTask loggedinUserData={loggedinUserData} index={index} />
        }if(e.completed){
            return <CompletedTask loggedinUserData={loggedinUserData} index={index} />
        }if(e.failed){
            return <FailedTask loggedinUserData={loggedinUserData} index={index} />
        }
      })}
    </div>
  );
};

export default TaskCard;
