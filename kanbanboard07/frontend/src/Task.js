import React,{useState} from 'react'
import styles from './assets/css/Task.css';
import {PropTypes} from 'prop-types';

const Task = ({no, name, done, callbackDelete}) => {

  return (
    <li className={styles.TaskList__Task}>
      <input 
        type="checkbox" 
        checked={done === 'Y'}
        onChange={e => {}} />
      {name}
      <a href="#" 
        onClick={e=>callbackDelete(no)} 
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