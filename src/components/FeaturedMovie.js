import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchFeaturedMovie } from '../store/actions'


class FeaturedMovie extends Component {

  render() {
    return (
      <div>
      <button onClick={this.props.onFetchFeaturedMovie}>Get Movie</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    movies : state.movies
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchFeaturedMovie : () =>  dispatch(fetchFeaturedMovie(Math.random()))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(FeaturedMovie)
