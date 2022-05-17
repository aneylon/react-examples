import React from "react";

class SearchBar extends React.Component {
  state = { searchTerm : 'testers' }
  // onInputChange (event) {
  //   console.log('change it!', event.target.value)
  // }

  render () {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search
              <input
                // onChange={this.onInputChange}
                onChange={(event) => this.setState({searchTerm: event.target.value})}
                onClick={(event) => console.info('click', event.target.value)}
                value={this.state.searchTerm}
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

