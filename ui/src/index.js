import React from 'react'
import { render } from 'react-dom'
import { Router, Route } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'

import App from 'components/App'
import Servers from 'components/Servers'
import Example from 'components/Example'

let routes =
  <Router
    history = { createBrowserHistory() }
  >
    <Route
      path = "/"
      component = { App }
    />

    <Route
      path = "/example"
      component = { Example }
    />

    <Route
      path = "/servers"
      component = { Servers }
    />
  </Router>

render(routes, document.getElementById(`root`))
