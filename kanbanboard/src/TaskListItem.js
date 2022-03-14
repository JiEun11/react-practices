import React from 'react'

const TaskListItem = ({no, status, tasks}) => {
  return (
    <li>{no} : {status} </li>
  )
}

export default TaskListItem