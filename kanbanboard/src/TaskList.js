import React from 'react'
import Task from './Task';

const TaskList = ({tasks}) => {
  return (
    <div className='TaskList'>
      <ul>
        {tasks.map((task) => <Task 
                            key={task.no} 
                            name={task.name} /> )}
      </ul>
    </div>
  )
}
export default TaskList