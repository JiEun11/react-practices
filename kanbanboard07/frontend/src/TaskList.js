import React from 'react'
import Task from './Task';
import styles from './assets/css/TaskList.css';

const TaskList = ({tasks}) => {
  return (
    <div className='TaskList'>
      <ul>
        {tasks.map((task) => <Task 
                            key={task.no} 
                            name={task.name}
                            done={task.done}/> )}
        <input 
          type="text" 
          className={styles.TaskList__add_task}
          placeholder={'Add Task'}
          onKeyPress={e=>{
            if(e.key === 'Enter'){
              console.log(`call notifyAddTask(${e.target.value})`);
            }
          }}/>
      </ul>
    </div>
  )
}
export default TaskList