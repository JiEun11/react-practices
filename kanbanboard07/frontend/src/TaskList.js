import React from 'react'
import Task from './Task';
import styles from './assets/css/TaskList.css';

const TaskList = ({callbackAddTask, callbackDeleteTask, callbackUpdateStatus, cardNo, tasks}) => {

  return (
    <div className={styles.TaskList}>
      <ul>
        {tasks.map((task) => <Task 
                            key={task.no}
                            no={task.no}
                            name={task.name}
                            done={task.done}
                            cardNo={task.cardNo}
                            callbackDeleteTask={callbackDeleteTask}
                            callbackUpdateStatus={callbackUpdateStatus}/> )}
        <input
          type="text" 
          className={styles.TaskList__add_task}
          placeholder={'Add Task'}
          onKeyPress={function(e){
            if(e.key === 'Enter'){
                console.log(`call notifyAddTask(${e.target.value}) cardNo : ${cardNo}`);
                const newTask = {name: `${e.target.value}`, done:'N', cardNo: `${cardNo}`};
                e.target.value='';
                callbackAddTask(newTask);
              }             
          }}/>
      </ul>
    </div>
  );
}
export default TaskList