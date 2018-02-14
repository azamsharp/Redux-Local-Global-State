import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loadFlowerList } from '../store/actions'

class FlowerList extends Component {


  componentDidMount = () => {
    this.props.onFlowerListLoad()
  }

  render() {

  let flowerListItems = this.props.flowers.map((flower,index) => {
    return <div key={index}>
    <img style={{width: 100, height:100}} src={flower.imageURL} />
    <li>{flower.name}</li>
    </div>
  })

  return (
    <div>
      <b>List of Flowers</b>
      <ul>
      {flowerListItems}
      </ul>
    </div>

    )
  }
}

const mapStateToProps = state => {
  return {
    flowers : state.flowers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFlowerListLoad : () => dispatch(loadFlowerList())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(FlowerList)
