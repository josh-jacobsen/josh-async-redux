import React from 'react'
import {render} from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import {createStore} from 'redux'
import {Provider} from 'react-redux'

import reducer from './reducer'
import App from './components/App'
import DetailPane from './components/DetailPane'
import DisplayMountain from './components/DisplayMountain'
import DisplayDetails from './containers/DisplayDetails'
import DisplayPort from './containers/DisplayPort'


let store = createStore(reducer)



document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={DisplayPort} />
          <Route path='display' component={DisplayDetails} />
        </Route>
      </Router>
    </Provider>,
    document.getElementById("app")
  )
})


// <App />
