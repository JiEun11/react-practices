import React, {useState} from 'react'
import styles from './assets/css/Card.css';
import TaskList from './TaskList';
import {PropTypes} from 'prop-types';

const Card = ({no, title, description}) => {
  const [tasks, setTasks] = useState([]);
  const [showDetails, setShowDetails] = useState(false);  // 첫 번째는 안 보이게
  return (
    <div className={styles.Card}>
      <div 
        className={showDetails ? `${styles.Card__Title} ${styles.Card__Title__open}` : `${styles.Card__Title}`}
        onClick={() => {
          console.log(`.... fetch tasks (/api/10/task?cardNo=${no}`);
          setShowDetails(!showDetails)}
        }>
        {title}
      </div>
      {showDetails ? 
        <div className={styles.Card__Details}>
          {description}
          <TaskList tasks={tasks}/> 
        </div> 
        : null}
    </div>
  )
}

export default Card

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description : PropTypes.string,
  tasks : PropTypes.array
}

// Default Value
Card.defaultProps = {
  title : '',
  tasks : {}
}