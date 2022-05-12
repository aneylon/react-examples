import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'

class App extends React.Component {
  constructor(props) {
    super(props)
    // only time to directly assign to state
    this.state = { lat: null, lon: null, errorMessage: '' }

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({lat: position.coords.latitude, lon: position.coords.longitude}) 
        console.info(position)
      },
      (err) => {
        console.error(err)
        this.setState({errorMessage: err.message})
      }
    )
  }

  render () {
    console.log('render')
    return (
      <div>
        <div>
          { (this.state.lat !== null && this.state.lon !== null) &&
            <div>
              <p>
                Latitude: {this.state.lat}
              </p>
              <p>
                Longitude: {this.state.lon}
              </p>
            </div>
          }
          { this.state.errorMessage !== '' && 
            <p>
              Error: {this.state.errorMessage}
            </p>
          }
          { (this.state.lon === null && this.state.lat === null && this.state.errorMessage === '') &&
            <p>
              ...Loading...
            </p>
          }
        </div>
        <SeasonDisplay/>
      </div>
    )
  }

  componentDidCatch(){
    console.info('catch')
  }
  componentDidMount(){
    console.info('mount')
  }
  componentDidUpdate(){
    console.info('update')
  }
  componentWillUnmount(){
    console.info('unmount')
  }
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)
