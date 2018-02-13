import React, { Component } from 'react';

const counterResult = (props) => {

  let numberItems = props.results.map(num => {
    return <li>{num}</li>
  })

  return  (
    <ul>
    {numberItems}
    </ul>
  )

}


export default counterResult
