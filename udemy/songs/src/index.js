import React from 'react'
// import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './components/App'
import reducers from './reducers'

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>
)

// render(
//   <Provider store={createStore(reducers)}>
//     <App />
//   </Provider>,
//   document.querySelector('#root')
// )