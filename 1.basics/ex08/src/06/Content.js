import React, { Fragment } from 'react';
import Clock01 from './Clock01';
import Clock02 from './Clock02';

function content() {
  return(
    <Fragment>
      <p> {`특징3: JSX Tutorials - JSX 표현식 표기법({JS Expression})과 문제점`} </p>
      <Clock01 />
      <Clock02 />
    </Fragment>
  );
}
export default content;