import React from 'react'

const TaskListNumber = ({loggedinUserData}) => {
  return (
    <div className='takslistnumber flex gap-[20px] p-[20px]'>
        <div className="box newtask w-1/4 bg-green-400 p-[30px] rounded">
            <div className="task-count text-[30px]">{loggedinUserData?.taskNumbers.newTask || 0 }</div>
            <div className="task-heading text-[26px] font-bold">New Tasks</div>
        </div>
        <div className="box newtask w-1/4 bg-blue-400 p-[30px] rounded">
            <div className="task-count text-[30px]">{loggedinUserData?.taskNumbers.active}</div>
            <div className="task-heading text-[26px] font-bold">Accepted Tasks</div>
        </div>
        <div className="box newtask w-1/4 bg-red-400 p-[30px] rounded">
            <div className="task-count text-[30px]">{loggedinUserData?.taskNumbers.failed}</div>
            <div className="task-heading text-[26px] font-bold">Failed Tasks</div>
        </div>
        <div className="box newtask w-1/4 bg-yellow-400 p-[30px] rounded">
            <div className="task-count text-[30px]">{loggedinUserData?.taskNumbers.completed}</div>
            <div className="task-heading text-[26px] font-bold">Completed Tasks</div>
        </div>
    </div>
  )
}

export default TaskListNumber