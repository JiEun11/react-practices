import React, {Fragment, useRef} from 'react';
import logo from '../assets/images/react-logo.png';

export default function App() {
    const imageRef = useRef(null);

    const onKeyPressInput = (e) => {
      if(e.key == 'Enter') {
        console.log(e.target.value);
      }
    };

    const onFocusInput = e => console.log('focues');
    const onBlurInput = e => console.log('blur');
    const onMouseOverImage = e => console.log('mouse over',`x=${e.clientX}, y=${e.clientY}` );
    const onMouseOutImage = e => console.log('mouse out ',`x=${e.clientX}, y=${e.clientY}` );
    const onMouseMoveImage = e => {
      const offsetTop = imageRef.current.offsetTop;   // jQuery 설치 후 $(imageRef) 로 사용 가능 but 여기에서는 굳이..
      const offsetLeft = imageRef.current.offsetLeft;
      console.log('mouse move ',`x=${e.clientX - offsetLeft}, y=${e.clientY - offsetTop}`)
    };
    
    const onMouseDownImage = e => console.log('mouse down',`x=${e.clientX}, y=${e.clientY}` );;
    const onMouseUpImage = e => console.log('mouse up',`x=${e.clientX}, y=${e.clientY}` );;
    const onClickImage = e => console.log('mouse click image',`x=${e.clientX}, y=${e.clientY}` );;
    const onDoubleClickImage = e => console.log('mouse double click image',`x=${e.clientX}, y=${e.clientY}` );;

    return (
        <Fragment>
            <h2>ex03 - Some Examples of Event Handler</h2>
            <input
                type='text'
                placeholder='메세지를 입력 하세요'
                onKeyPress={ onKeyPressInput }
                onFocus={ onFocusInput }
                onBlur={ onBlurInput } 
                />
                <br/>
                <br/>
            <img
                ref={ imageRef }
                style={ {
                    cursor: 'pointer',
                    width: 190,
                    border: '1px solid #ccc'
                } }
                src={ logo }
                onMouseOver={ onMouseOverImage }
                onMouseMove={ onMouseMoveImage }
                onMouseOut={ onMouseOutImage }
                onMouseDown={ onMouseDownImage }
                onMouseUp={ onMouseUpImage }
                onClick={ onClickImage }
                onDoubleClick={ onDoubleClickImage }
                />
        </Fragment>
    );
}