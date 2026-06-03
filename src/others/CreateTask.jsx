import React, { useState } from "react";

const CreateTask = ({ loggedinUserData }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskAssignTo, setTaskAssignTo] = useState("");
  const [taskCategory, setTaskCategory] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [newTask, setNewTask] = useState({});
  const Submitted = (e) => {
    e.preventDefault();

    setNewTask({
      taskTitle,
      taskDate,
      taskAssignTo,
      taskCategory,
      taskDescription,
    });

    loggedinUserData.map((e) => {
      if (taskAssignTo == e.firstname) {
        e.tasks.push(newTask)
        console.log(e.tasks)
      }
    });

    console.log(newTask);
    setTaskTitle("");
    setTaskDate("");
    setTaskAssignTo("");
    setTaskCategory("");
    setTaskDescription("");
  };
  return (
    <div className="p-[20px]">
      <h2 className="text-[50px] font-bold mb-[30px]">Create Task</h2>
      <form className="flex justify-between gap-[60px]">
        <div className="form-left w-1/2 flex flex-col gap-[20px]">
          <div className="task-title flex flex-col gap-[10px]">
            <label>Task Title</label>
            <input
              onChange={(e) => {
                setTaskTitle(e.target.value);
              }}
              value={taskTitle}
              type="text"
              placeholder="Enter Task Title"
              required
              className="border-1 border-white px-[25px] py-[10px] rounded outline-0"
            />
          </div>
          <div className="task-date flex flex-col gap-[10px]">
            <label>Task Date</label>
            <input
              onChange={(e) => {
                setTaskDate(e.target.value);
              }}
              value={taskDate}
              type="Date"
              placeholder="Enter Task Date"
              required
              className="border-1 border-white px-[25px] py-[10px] rounded outline-0"
            />
          </div>
          <div className="task-asignto flex flex-col gap-[10px]">
            <label>Asign To</label>
            <input
              onChange={(e) => {
                setTaskAssignTo(e.target.value);
              }}
              value={taskAssignTo}
              type="text"
              placeholder="Employee Name"
              required
              className="border-1 border-white px-[25px] py-[10px] rounded outline-0"
            />
          </div>
          <div className="task-cat flex flex-col gap-[10px]">
            <label>Task Category</label>
            <input
              onChange={(e) => {
                setTaskCategory(e.target.value);
              }}
              value={taskCategory}
              type="text"
              placeholder="Enter Task Category"
              required
              className="border-1 border-white px-[25px] py-[10px] rounded outline-0"
            />
          </div>
        </div>
        <div className="form-right w-1/2 flex flex-col gap-[20px]">
          <div className="task-des flex flex-col gap-[10px]">
            <label>Task Description</label>
            <textarea
              onChange={(e) => {
                setTaskDescription(e.target.value);
              }}
              value={taskDescription}
              type="text"
              rows="10"
              placeholder="Enter Task Description"
              required
              className="border-1 border-white px-[25px] py-[10px] rounded outline-0"
            ></textarea>
          </div>
          <button
            onClick={Submitted}
            className="bg-white p-[20px] text-black rounded w-full text-[18px]"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
