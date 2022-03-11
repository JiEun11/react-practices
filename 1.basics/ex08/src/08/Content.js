import React, { Fragment } from 'react';
import Clock from './Clock';

function content() {
  return(
    <Fragment>
      <p> {`JSX Tutorials - Dynamic HTML Rendering`} </p>
      <Clock />
    </Fragment>
  );
}
export default content;