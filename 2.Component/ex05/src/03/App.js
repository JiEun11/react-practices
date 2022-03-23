import React, { Component } from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default class App extends Component {
    constructor() {
        super(...arguments);
        this.state = this.getCurrentClockTime();    
    }

    getCurrentClockTime(){
      const date = new Date();

      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      const session = hours > 11 ? "pm" : "am";

      return{

      };
    }

    render() {
        return (
            <div className='clock-display'>
                <h2>ex05 - Component LifeCycle Practice</h2>
                    <Clock 
                      hours={10}
                      minutes={10}
                      seconds={10}
                      session={'am'}/>
            </div>
        );
    }
}