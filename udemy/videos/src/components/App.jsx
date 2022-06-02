import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

class App extends React.Component {
  onSearchTermSubmit = async (searchTerm) => {
    console.log('searching', searchTerm)
    const response = await youtube.get('/search', {
      params: {
        q: searchTerm
      }
    })
    console.log(response)
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onSearchTermSubmit} />
      </div>
    )
  }
}

export default App