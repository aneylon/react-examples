import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'


const App = () => {
  let lat

  window.navigator.geolocation.getCurrentPosition(
    (position) => {
      lat = position.coords.latitude
      console.info(position)
    },
    (err) => console.error(err)
  )

  return (
    <div>
      <div>Latitude: {lat}</div>
      <SeasonDisplay/>
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)
