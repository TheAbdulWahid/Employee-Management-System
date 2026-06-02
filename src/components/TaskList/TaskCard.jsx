import React, { useContext } from "react";
import ActiveTask from "./ActiveTask";
import NewTask from "./NewTask";
import CompletedTask from "./CompletedTask";
import FailedTask from "./FailedTask";
import { AppContext } from "../../context/AuthContext";


const TaskCard = ({ loggedinUserData }) => {
    const empData = useContext(AppContext)
  return (
    <div className="tasklist p-[20px] flex flex-nowrap gap-[20px] overflow-x-auto scrollbar-none ">
      {loggedinUserData.tasks.map((e, index) => {
        if(e.active){
            return <ActiveTask key={index} loggedinUserData={e} />
        }if(e.newTask){
            return <NewTask key={index} loggedinUserData={e} />
        }if(e.completed){
            return <CompletedTask key={index} loggedinUserData={e} />
        }if(e.failed){
            return <FailedTask key={index} loggedinUserData={e} />
        }
      })}
    </div>
  );
};

export default TaskCard;
