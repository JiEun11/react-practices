import React from 'react'
import TaskListItem from './TaskListItem';

const TaskList = ({data}) => {
  return (
    <ul>
      {data.map((oneTask) => <TaskListItem
                              key={oneTask.no}
                              no={oneTask.no}
                              title={oneTask.title}
                              description={oneTask.description}
                              status={oneTask.status}
                              tasks={oneTask.tasks} />)}
    </ul>
  )
}

export default TaskList