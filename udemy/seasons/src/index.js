import './SeasonDisplay.css'
import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

class App extends React.Component {
  constructor(props) {
    super(props)
    // only time to directly assign to state
    // this.state = { lat: null, lon: null, errorMessage: '' }
    console.info('constructicons!')
  }

  state = { lat: null, lon: null, errorMessage: '' }

  componentDidMount() {
    console.info('mount up!')
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
              <SeasonDisplay lat={this.state.lat} lon={this.state.lon} />
            </div>
          }
          { this.state.errorMessage !== '' && 
            <p>
              Error: {this.state.errorMessage}
            </p>
          }
          { (this.state.lon === null && this.state.lat === null && this.state.errorMessage === '') &&
            <Spinner loadingMessage="Please accept location request."/>
          }
        </div>
      </div>
    )
  }

  componentDidCatch(){
    console.info('catch')
  }
  componentDidUpdate(){
    console.info('update')
  }
  componentWillUnmount(){
    console.info('unmount')
  }
  // shouldComponentUpdate(){} // return boolean value
  // getSnapshotBeforeUpdate(){} // must return null
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)
