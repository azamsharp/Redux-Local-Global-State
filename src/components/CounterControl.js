import React, { Component } from 'react';

const counterControl = (props) => (
    <button onClick={props.clicked}>{props.title}</button>

)

export default counterControl
