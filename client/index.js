import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import reducer from './reducer'
import App from './components/App'

let store = createStore(reducer)



document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById("app")
  )
})
