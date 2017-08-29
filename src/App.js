import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Routes, Route, Switch } from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { MuiThemeProvider } from 'material-ui/styles'
import fusTheme from './fusTheme'

import SideNav from './SideNav'

/* Import Views */
import Glossary from './views/Glossary'
import Home from './views/Home'
import LetterHead from './views/LetterHead'
import Logos from './views/Logos'
import LogosPosters from './views/LogosPosters'
import PlanningGuide from './views/PlanningGuide'
import Posters from './views/Posters'
import ServiceRequest from './views/ServiceRequest'
import Services from './views/Services'
import Story from './views/Story'
import Tutorial from './views/Tutorial'
import NotFound from './views/NotFound'

injectTapEventPlugin()

class App extends Component {
  render () {
    return (
      <Routes>
        <MuiThemeProvider theme={fusTheme}>
          <div>
            <SideNav />

            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/logos-posters' component={LogosPosters} />
              <Route path='/logos' component={Logos} />
              <Route path='/posters' component={Posters} />
              <Route path='/letterhead' component={LetterHead} />
              <Route path='/share-a-story' component={Story} />
              <Route path='/planning-guide' component={PlanningGuide} />
              <Route path='/services' component={Services} />
              <Route path='/glossary' component={Glossary} />
              <Route path='/service-request-form' component={ServiceRequest} />
              <Route path='/tutorial' component={Tutorial} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </MuiThemeProvider>
      </Routes>
    )
  }
}

export default App
