import React from 'react'
import axios from 'axios'

import unsplash from '../api/unsplash'

import SearchBar from './SearchBar'
import ImageList from './ImageList'

// const App = () => {
class App extends React.Component {
  state = { images : [] }

  onSearchSubmit = async (term) => {
    // console.log(term)
    // let rootUrl = 'https://api.unsplash.com'
    let endPoint = '/search/photos'
    const response = await unsplash.get(endPoint, {
      params: { query: term }
    })
    // axios.get(`${rootUrl}${endPoint}`, {
    // const response = await axios.get(`${rootUrl}${endPoint}`, {
    //   params: {
    //     query: term
    //   },
    // })
      // .then((response) => {
      //   console.log(response.data.results)
      // })

    this.setState({ images: response.data.results })
  }

  render() {
    return (
      <div
        className="ui container"
        style={{ marginTop: '10px' }}
        >
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <ImageList images={this.state.images}/>
      </div>
    )
  }
}

export default App