
export const INC_COUNTER = "INC_COUNTER"
export const DEC_COUNTER = "DEC_COUNTER"
export const ADD_COUNTER = "ADD_COUNTER"
export const ON_SAVE_RESULT = "ON_SAVE_RESULT"
export const ON_SAVE_NAME = "ON_SAVE_NAME"
export const FETCH_FEATURED_MOVIE = "FETCH_FEATURED_MOVIE"
export const LOAD_FLOWER_LIST = "LOAD_FLOWER_LIST"

export const loadFlowers = (flowers) => {
  return {
    type : LOAD_FLOWER_LIST,
    flowers : flowers
  }
}

export const loadFlowerList = () => {
  return dispatch => {

    let url = 'https://flowers.vapor.cloud/flowers'
    fetch(url)
    .then(response => response.json())
    .then(json => dispatch(loadFlowers(json)))

  }
}


export const featuredMovie = (movie) => {
  return {
    type : FETCH_FEATURED_MOVIE,
    movie : movie
  }
}

export const fetchFeaturedMovie = (randomNumber) => {

  return dispatch => {

    // fetch featured movie
    let url = 'http://www.omdbapi.com/?i=tt3896198&apikey=564727fa'
    fetch(url)
    .then(response => response.json())
    .then(json => {
      dispatch(featuredMovie(json))
    })

  }

}
