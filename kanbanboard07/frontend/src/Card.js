import React, { useEffect, useState } from 'react'
import styles from './assets/css/Card.css';
import TaskList from './TaskList';
import {PropTypes} from 'prop-types';

const Card = ({no, title, description}) => {
  const [tasks, setTasks] = useState([]);
  const [showDetails, setShowDetails] = useState(false);  // 첫 번째는 안 보이게

  const showTask = async function(){
    try{
      const response = await fetch(`/api/card/task?cardNo=${no}`,{
        method:'get',
        headers:{
          'Accept':'application/json'
        }
      });

      if(!response.ok){
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();

      if(json.result !== 'success'){
        console.log("error!!!", json.message);
        throw new Error(`${json.result} ${json.message}`);
      }
      setTasks(json.data);

    }catch(err){
      console.log(err);
    }
  }

  const notifyAddTask = async function(task){
    try{
      const response = await fetch(`/api/add`,{
        method: 'post',
        headers: {
          'Content-Type' : 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(task)
      });

      if(!response.ok){
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();

      if(json.result !== 'success'){
        console.log("error!!!", json.message);
        throw new Error(`${json.result} ${json.message}`);
      }
      console.log(json.data.no);
      setTasks([json.data, ...tasks]);
    }catch(err){
      console.log(err);
    }
  }

  const updateTaskStatus = async function(no){
    try {
      const response = await fetch(`/api/card/task`)
    } catch (error) {
      
    }
  }

  const deleteTask = async function(no){
    try {
      if(window.confirm('삭제하시겠습니까?')){
        const response = await fetch(`/api/delete/task/${no}`,{
          method: 'delete',
        });

        if(!response.ok){
          throw new Error(`${response.status} ${response.statusText}`);
        }

        const json = await response.json();

        if(json.result !== 'success'){
          console.log("error!!!!", json.message);
          throw new Error(`${json.result} ${json.message}`);
        }
        setTasks(tasks.filter(t => t.no !== no));
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={styles.Card}>
      <div 
        className={showDetails ? `${styles.Card__Title} ${styles.Card__Title__open}` : `${styles.Card__Title}`}
        onClick={() => {
          console.log(`.... fetch tasks (/api/10/task?cardNo=${no}`);
          showTask()
          setShowDetails(!showDetails)}
        }>
        {title}
      </div>
      {showDetails ? 
        <div className={styles.Card__Details}>
          {description}
          <TaskList callbackAdd={notifyAddTask} callbackDelete={deleteTask} cardNo={no} tasks={tasks}/> 
        </div> 
        : null}
    </div>
  )
}

export default Card

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description : PropTypes.string,
  tasks : PropTypes.object
}

// Default Value
Card.defaultProps = {
  title : '',
  tasks : {}
}