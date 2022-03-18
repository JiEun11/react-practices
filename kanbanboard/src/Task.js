import React from 'react'
import styles from './assets/css/Task.css';

const Task = ({name, done}) => {
  return (
    <li className={styles.TaskList__Task}>
      <input type="checkbox" checked={done} />
      {name}
      <a href="#" className={styles.TaskList__Task__remove}></a>
    </li>
  )
}

export default Task