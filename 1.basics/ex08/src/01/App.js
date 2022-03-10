import React from 'react';

const App = function(){
  return (
    <div>
      <h2>App01</h2>
      <p>JSX Tutorials - 특징1 : HTML과의 차이점</p>
      {/*
        1. 속성은 Camel Case
      */}
      <input type="text" maxLength='10' />
      {/*
        2. Element는 꼭 닫는다.
          error : <br>, <hr>, <input>, <img>
      */}
      <br />
      <hr />
      <img src="https://image.kpopmap.com/2021/10/TXT-Yeonjun-Boyfriend-material-handsome-pictures-BEST-1.jpg" />
       {/*
        3. 속성 이름은 DOM API 기반이다. (HTML Tag 기반 X)
          <div id='box' class='box'>...</div> : HTML Tag
          document.getElemenById('box').className='box'; : DOM API
      */}
      <div id='blox' className='box'>
        box입니다.
      </div>
    </div>
  );
}

export default App;