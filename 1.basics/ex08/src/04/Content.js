import React from 'react'

function content(){
  // return (
  //   <p>JSX Tutorials - Pure React(React API)로 컴포넌트 작성하기 </p>
  // );

  return React.createElement('p', null, 'JSX Tutorials - Pure React(React API)로 컴포넌트 작성하기');
}

export default content;