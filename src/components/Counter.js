import React, { Component } from 'react';
import CounterControl from './CounterControl'
import CounterOutput from './CounterOutput'
import CounterResult from './CounterResult'

import { connect } from 'react-redux'

import * as actionTypes from '../store/actions'

class Counter extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name : ''
    }

    // you can comment this out since
    // we are not using local state
    /*
    this.state = {
      counter : 0
    } */

  }

  // you can comment this out because we are not using
  // local events/handlers
  /*
  incrementCounterHandler = () => {

      this.setState({
        counter : this.state.counter + 1
      })

  }*/

  onNameChangedHandler = (event) => {

    this.setState({
      name : event.target.value
    })

  }

  render() {
    return (
        <div>
          <input onChange={this.onNameChangedHandler} type="text" />
          <button onClick={() => this.props.onSaveName(this.state.name)}>Save Name</button>
          <CounterOutput counterLabel = {this.props.ctr} />
          <CounterControl title="increment +1" clicked = {this.props.onIncrementCounter} />
          <CounterControl title="decrement -1" clicked = {this.props.onDecrementCounter} />
          <CounterControl title="increment by +5" clicked={this.props.onAddCounter} />
          <CounterControl title="decrement by -5" />
          <button onClick={this.props.onSaveResult}>Save Result</button>
          <CounterResult results = {this.props.res} />

        </div>
    )
  }

}

// maps the global state to the properties of the component
const mapStateToProps = state => {
  return  {
    // state.counter is a global state from the redux store
    ctr : state.counter,
    res : state.results
  }
}

// maps the global dispatches to the properties of the component
const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter : () => dispatch({type : actionTypes.INC_COUNTER}),
    onDecrementCounter : () => dispatch({type : actionTypes.DEC_COUNTER}),
    onAddCounter : () => dispatch({type :actionTypes.ADD_COUNTER, value : 5}),
    onSaveResult : () => dispatch({type : actionTypes.ON_SAVE_RESULT}),
    onSaveName : (name) => dispatch({type : actionTypes.ON_SAVE_NAME, value : name})
    // write the code for DEC_COUNTER
    // write the code to ADD_COUNTER
    // write code for SUBTRACT_COUNTER
  }
}
// link the props and dispatches to the component
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
