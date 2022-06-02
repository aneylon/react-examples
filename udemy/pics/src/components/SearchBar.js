import React from "react";

class SearchBar extends React.Component {
  // constructor() {
  //   super()
  //   // this.state = this.state.bind(this)
  // }

  state = { searchTerm : '' }
  // onInputChange (event) {
  //   console.log('change it!', event.target.value)
  // }

  // onFormSubmit(event){
  onFormSubmit = (event) => {
    event.preventDefault()
    // console.log(this.state.searchTerm)
    this.props.onSubmit(this.state.searchTerm)
  }

  render () {
    return (
      <div className="ui segment">
        <form onSubmit={(event) => this.onFormSubmit(event)} className="ui form">
        {/* <form onSubmit={this.onFormSubmit} className="ui form"> */}
          <div className="field">
            <label>Image Search
              <input
                // onChange={this.onInputChange}
                onChange={(event) => this.setState({searchTerm: event.target.value})}
                // onClick={(event) => console.info('click', event.target.value)}
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

