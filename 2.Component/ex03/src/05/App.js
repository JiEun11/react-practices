import React, { useRef } from 'react';
import './assets/scss/App.scss';

export default function App() {
    const outterRef = useRef(null);
    const innerRef = useRef(null);

    // const result = Array.from({length: 10}, (_,i) => i+1);

    // console.log(result);
    // a = [];
    // for(let i = 0; i < 100; i++){
    //   a.push(<li>love u</li>);
    // }

    return (
        <div
            ref={ outterRef }
            className={'App'}
            onScroll={function(e){
              console.log(outterRef.current.clientHeight, ':', outterRef.current.scrollTop, ':', innerRef.current.clientHeight)
            }}>
            <div
                ref={ innerRef }>
                <ul>
                    {/* { [1,2,3,4,5,6,7].map(e=> <li>{ `아이템 ${e} 입니다.`}</li>)} */ }
                    {  Array.from({length: 100}, (_,i) => i+1).map(e =>
                        <li key={e} >
                            { `아이템 ${e} 입니다.` }
                        </li>
                    ) }
                </ul>
            </div>
        </div>
    );
}