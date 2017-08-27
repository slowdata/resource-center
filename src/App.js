import React, { Component } from 'react'
import './App.css'
import MenuItem from 'material-ui/MenuItem'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import fusTheme from './fusTheme'

injectTapEventPlugin()

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { open: false }
  }

  handleClose = () => this.setState({ open: false })

  render () {
    return (
      <BrowserRouter>
        <MuiThemeProvider muiTheme={getMuiTheme(fusTheme)}>
          <div>
            <AppBar
              title='Title'
              iconClassNameRight='muidocs-icon-navigation-expand-more'
              onLeftIconButtonTouchTap={() =>
                this.setState({ open: !this.state.open })}
            />
            <Drawer
              open={this.state.open}
              docked={false}
              onRequestChange={open => this.setState({ open })}
            >
              <MenuItem onClick={this.handleClose}>
                <Link to='/'>Home</Link>
              </MenuItem>
              <MenuItem onClick={this.handleClose}>
                <Link to='/logos'>Logos</Link>
              </MenuItem>
              <MenuItem onClick={this.handleClose}>
                <Link to='/posters'>Posters</Link>
              </MenuItem>
              <MenuItem onClick={this.handleClose}>
                <Link to='/tutorial'>Tutorial</Link>
              </MenuItem>
            </Drawer>

            <Route exact path='/' render={() => <h1>Home View</h1>} />
            <Route
              exact
              path='/logos-posters'
              render={() => <h1>Logos and Posters View</h1>}
            />
            <Route exact path='/logos' render={() => <h1>Logos View</h1>} />
            <Route exact path='/posters' render={() => <h1>Posters View</h1>} />
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    )
  }
}

export default App
