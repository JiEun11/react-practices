import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
  
    const getCurrentClockTime = () => {
      const date = new Date();
      const hours = date.getHours();
      
      return{
        hours : ('0'+hours).slice(-2),
        minutes : ('0'+date.getMinutes()).slice(-2),
        seconds : ('0'+date.getSeconds()).slice(-2),
      }; 
    };

    const [state, setState] = useState(getCurrentClockTime());
    const [ticks, setTicks] = useState(0);
    
    useEffect(()=> {
      console.log("After App Rendering");
    });

    // useEffect(()=>{
    //   console.log("After App Mount");
    //   setInterval(()=> {
    //     setTicks(ticks+1);
    //   })
    // }, []);

    // useEffect(()=>{
    //   console.log("After App Mount");
    // }, []);

    useEffect(()=>{
      console.log("After state was changed");
      setTimeout(function(){
        console.log('timer started');
        setState(getCurrentClockTime());
        console.log("App ticks before : " + ticks);
        setTicks(ticks + 1);
        console.log("App ticks after : " + ticks);
      }, 1000);
    },[state]);

    return (
      <div className='clock'>
        <span>{ticks}</span>
        {
          ticks % 10 == 0 ? 
          null : 
          <Clock
                  message={'ex05: useEffect Hook example'}
                  hours={state.hours}
                  minutes={state.minutes}
                  seconds={state.seconds}/>
        }
      </div>
            
    );
}