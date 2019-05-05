import React from 'react';
import logo from './logo.svg';
import {propTypes} from "prop-types"

require('./style.css')

function PrimaryButton(props) {
    const activeStyle = props.disabled ? " disabled" : ""
  return (
    <div className={"primaryButton" + activeStyle}>
      Click Me
    </div>
  );
}


export default PrimaryButton;
