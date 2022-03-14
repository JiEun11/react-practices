import React from 'react'

const TaskListItem = ({no, status}) => {
  return (
    <li>{no} : {status} </li>
  )
}

export default TaskListItem