import React, {useState} from 'react';

export default function ({ begin, step }) {
    const [val, setVal] = useState(begin);

    const {a} = {a:10, b:20};
    const [b, c] = [1, 2, 3, 4];

    return (
        <div>
            <button onClick={ e => setVal(val+step)}>
                <strong>+</strong>
            </button>
            {' '}
            <span>{ val }</span>
        </div>
    );
}