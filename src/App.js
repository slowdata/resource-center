import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Routes, Route, Switch } from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import fusTheme from './fusTheme'

import SideNav from './SideNav'
import { Home } from './views/Home'
import { LogosPosters } from './views/LogosPosters'
import { Posters } from './views/Posters'
import { Logos } from './views/Logos'
import { NotFound } from './views/NotFound'

injectTapEventPlugin()

class App extends Component {
  render () {
    return (
      <Routes>
        <MuiThemeProvider muiTheme={getMuiTheme(fusTheme)}>
          <div>
            <SideNav />

            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/logos-posters' component={LogosPosters} />
              <Route path='/logos' component={Logos} />
              <Route path='/posters' component={Posters} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </MuiThemeProvider>
      </Routes>
    )
  }
}

export default App
