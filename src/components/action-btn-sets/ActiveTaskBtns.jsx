import React from 'react'

const ActiveTaskBtns = () => {
  return (
    <div>
        <button className="btn completed bg-green-400">
            Mark as Completed
        </button>
        <button className="btn failed">
            Mask as Failed
        </button>
    </div>
  )
}

export default ActiveTaskBtns