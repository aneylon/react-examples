import React from "react";

class SearchBar extends React.Component {
  onInputChange (event) {
    console.log('change it!', event.target.value)
  }

  render () {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search
              <input
                onChange={this.onInputChange}
                className="field"
                type='text'
                placeholder="Enter a search term" />
            </label>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar

