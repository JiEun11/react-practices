import React,{useState} from 'react'
import styles from './assets/css/Task.css';
import {PropTypes} from 'prop-types';

const Task = ({name, done}) => {

  return (
    <li className={styles.TaskList__Task}>
      <input type="checkbox" 
        checked={done==='Y'}
        onChange={e=> setStateDone(!stateDone)} />
      {name}
      <a href="#" className={styles.TaskList__Task__remove}></a>
    </li>
  )
}

export default Task;

Task.propTypes = {
  name : PropTypes.string.isRequired,
  done : PropTypes.bool.isRequired
}

// Default Value
Task.defaultProps = {
  name : '',
  done : false
}