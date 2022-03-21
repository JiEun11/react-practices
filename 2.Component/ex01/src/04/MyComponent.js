import React, {Fragment} from 'react';
import {PropTypes} from 'prop-types';

export default function MyComponent({props01, props02, props03}){
  return (
    <Fragment>
      <h2>Property Validation</h2>
      <span>props01: {props01 ? props01 : '---- NOT SET ----'}</span>
      <br />
      <span>props02: {props02 ? props02 : '---- NOT SET ----'}</span>
      <br />
      <span>props03: {props03 ? `${props03}` : '---- NOT SET ----'}</span>  {/* '' + props03 이라고 해도 문자열 변환 된다. */}
      
    </Fragment>   
  )
}

MyComponent.propTypes = {
  // PropTypes Validator(primitive)
  props01 : PropTypes.string,
  props02 : PropTypes.number.isRequired,
  props03 : PropTypes.bool.isRequired
}

// Default Value
MyComponent.defaultProps = {
  props01 : 'Default Value',
  props02 : 10,
  props03 : true
}