import React from 'react'
import ReactDOM from 'react-dom'

function getButtonText () {
    return 'From a function'
}

const App = function () {

    const buttonText = 'Click it!'
    const arrayText = ['Click ', ' it!']
    const objectText = { text: 'Click It!'}

    return(
        <div>
            <label className="label" htmlFor="name">
                Enter Name: 
            </label>
            <input id="name" type="text"/>
            <button style={{ backgroundColor: 'blue', color: 'white'}}>
                {/* {getButtonText()} */}
                { objectText.text }
            </button>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)