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
        ticks : state ? state.ticks + 1 : 0
      }; 
    };

    const [state, setState] = useState(getCurrentClockTime());
    
    useEffect(()=> {
      console.log("After App Rendering");
      setTimeout(function(){
        setState(getCurrentClockTime());
        console.log("App ticks =======>   " + state.ticks);
      }, 1000);
    });

    useEffect(()=>{
      console.log("After App Mount");
      
    }, []);

    return (
      <div className='clock'>
        {
          state.ticks % 10 == 0 ? 
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