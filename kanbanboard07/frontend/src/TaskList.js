import React from 'react'
import Task from './Task';
import styles from './assets/css/TaskList.css';

const TaskList = ({callbackAdd, callbackDelete, cardNo, tasks}) => {

  return (
    <div className={styles.TaskList}>
      <ul>
        {tasks.map((task) => <Task 
                            key={task.no}
                            no={task.no}
                            name={task.name}
                            done={task.done}
                            cardNo={task.cardNo}
                            callbackDelete={callbackDelete}/> )}
        <input
          type="text" 
          className={styles.TaskList__add_task}
          placeholder={'Add Task'}
          onKeyPress={function(e){
            if(e.key === 'Enter'){
                console.log(`call notifyAddTask(${e.target.value}) cardNo : ${cardNo}`);
                const newTask = {name: `${e.target.value}`, done:'N', cardNo: `${cardNo}`};
                e.target.value='';
                callbackAdd(newTask);
              }             
          }}/>
      </ul>
    </div>
  );
}
export default TaskList