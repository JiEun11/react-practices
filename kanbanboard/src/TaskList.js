import React from 'react'
import Task from './Task';

const TaskList = ({tasks}) => {
  return (
    <div className='TaskList'>
      <ul>
        {tasks.map((task) => <Task 
                            key={task.no} 
                            name={task.name}
                            done={task.done}/> )}
      </ul>
    </div>
  )
}
export default TaskList