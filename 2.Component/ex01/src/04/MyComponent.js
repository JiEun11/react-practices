import React, {Fragment} from 'react';
import {PropTypes} from 'prop-types';

export default function MyComponent({props01, props02, props03, props04, props05, props06, props07, props08, props09}){
  return (
    <Fragment>
      <h2>Property Validation</h2>
      <span>props01: {props01 ? props01 : '---- NOT SET ----'}</span>
      <br />
      <span>props02: {props02 ? props02 : '---- NOT SET ----'}</span>
      <br />
      <span>props03: {props03 ? `${props03}` : '---- NOT SET ----'}</span>  {/* '' + props03 이라고 해도 문자열 변환 된다. */}
      <br />
      <span>props04: {props04 ? `${props04.no}` : '---- NOT SET ----'}</span> 
      <br />
      <span>props05: {props05 ? props05.map((e,i)=> <b key={i}>{e}</b>) : '---- NOT SET ----'}</span> 
      <br />
      <span>props06: {props06 ? props06() : '---- NOT SET ----'}</span> 
      <br />
      <span>props07: {props07 ? props07 : '---- NOT SET ----'}</span> 
      <br />
      <span>props08: {props08 ? props08.map((e,i)=> <b key={i}>{`${e}`}</b> ) : '---- NOT SET ----'}</span> 
      <br />
      <span>props09: 
        {
          props09 ? 
            <div>
              <h3>{props09.no}</h3>
              <h4>{props09.name}</h4>
              <h5>{props09.email}</h5>
            </div> : 
            '---- NOT SET ----'
        }
      </span> 

    </Fragment>   
  )
}

MyComponent.propTypes = {
  // PropTypes Validator(primitive)
  props01 : PropTypes.string,
  props02 : PropTypes.number.isRequired,
  props03 : PropTypes.bool.isRequired,
  props04 : PropTypes.object.isRequired,
  props05 : PropTypes.array.isRequired,
  props06 : PropTypes.func.isRequired,

  // PropTypes Validator(combined primitive)
  props07: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  props08 : PropTypes.arrayOf(PropTypes.bool).isRequired,
  props09 : PropTypes.shape({
    no : PropTypes.number.isRequired,
    name : PropTypes.string.isRequired,
    email : PropTypes.string.isRequired
  }).isRequired
}

// Default Value
MyComponent.defaultProps = {
  props01 : 'Default Value',
  props02 : 10,
  props03 : true,
  props04 : {},
  props05 : [],
  props06 : () => {}, // dumy function
  props07 : 200,
  props08 : []
}