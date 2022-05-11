import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'

class App extends React.Component {
  constructor(props) {
    super(props)
    // only time to directly assign to state
    this.state = { lat: null, lon: null }

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({lat: position.coords.latitude, lon: position.coords.longitude}) 
        console.info(position)
      },
      (err) => console.error(err)
    )
  }

  render () {
    return (
      <div>
        <div>
          <p>
            Latitude: {this.state.lat}
          </p>
          <p>
            Longitude: {this.state.lon}
          </p>
        </div>
        <SeasonDisplay/>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)
