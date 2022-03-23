import React, {useEffect} from 'react';
import SevenSegmentLED from "./SevenSegmentLED";
import SessionAmPm from "./SessionAmPm";
import './assets/scss/Clock.scss';

export default function Clock({message, hours, minutes, seconds}) {

  useEffect(()=>{
    console.log('-------After Clock Mount-------');
    return (function(){
      console.log('-------After Clock Unmount------');
    });
  },[]);

    return (
        <div className={'clock-display'}>
            <h2>{message}</h2>
            <div className={'Clock'}>
                <SevenSegmentLED number={('0'+(hours == 0 ? 12 : (hours > 12 ? hours-12 : hours))).slice(-2)} colon={true}/>
                <SevenSegmentLED number={minutes} colon={true}/>
                <SevenSegmentLED number={seconds} colon={false}/>
                <SessionAmPm session={hours > 12 ? 'pm' : 'am'}/>
            </div>
        </div>
    );
}