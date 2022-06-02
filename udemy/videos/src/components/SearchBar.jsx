import React from "react";

class SearchBar extends React.Component {
  state = { searchTerm : '' }

  onInputChange = (event) => {
    this.setState({ searchTerm: event.target.value })
  }
  
  render () {
    return (
      <div className='search-bar ui segment'>
        <form className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              placeholder="Search terms"
              value={this.state.searchTerm}
              onChange={this.onInputChange}
              />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar