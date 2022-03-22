import React, {Fragment, useState} from 'react';
import LifeCycle from './LifeCycle';

export default function App() {
    const [color, setColor] = useState('#000');
    const [showBox, setShowBox] = useState(true);
    return (
        <Fragment>
            <h2>ex05 - Component LifeCycle</h2>
            <button
                onClick={() => setColor(`#${Math.floor((Math.random() * 0x00ffffff)).toString(16)}`)}>
                색상변경
            </button>
            {" "}
            <button
              onClick={() => setShowBox(false)}>
              색상없애기
            </button>
            <br/>
            {
              showBox ? <LifeCycle color={color}/> : null
            }
            
        </Fragment>
    );
}