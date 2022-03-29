import React from 'react'
import styles from './assets/css/Task.css';
import {PropTypes} from 'prop-types';

const Task = ({no, name, done, cardNo, callbackUpdateStatus, callbackDeleteTask}) => {

  return (
    <li className={styles.TaskList__Task}>
      <input 
        type="checkbox" 
        checked={done === 'Y'}
        onChange={e => {
          console.log(`${e.target.value} ${no} done 누름 done -> ${!(done==='Y')}`)
          const updateTask = {no: `${no}`, name: `${name}`, done: `${ (done==='Y')? 'N' : 'Y' }`, cardNo: `${cardNo}`};
          console.log(updateTask);
          callbackUpdateStatus(updateTask);
        }} />
      {name}
      <a href="#" 
        onClick={e=>callbackDeleteTask(no)} 
        className={styles.TaskList__Task__remove}></a>
    </li>
  )
}

export default Task;

Task.propTypes = {
  name : PropTypes.string.isRequired,
  done : PropTypes.string.isRequired
}

// Default Value
Task.defaultProps = {
  name : '',
  done : ''
}