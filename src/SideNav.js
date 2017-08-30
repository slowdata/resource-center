import React, { Component } from 'react'

import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import SideBarItem from './SideBarItem'

const links = [
  { isExact: true, linkTo: '/', text: 'Home' },
  { isExact: true, linkTo: '/logos', text: 'Logos' },
  { isExact: true, linkTo: '/posters', text: 'Posters' },
  { isExact: true, linkTo: '/logos-posters', text: 'LogosPosters' }
]

class SideNav extends Component {
  constructor (props) {
    super(props)
    this.state = { open: false }
  }

  handleClose = () => this.setState({ open: false })

  render () {
    return (
      <div>
        <AppBar
          title='Resource Center'
          iconClassNameRight='muidocs-icon-navigation-expand-more'
          onLeftIconButtonTouchTap={() =>
            this.setState({ open: !this.state.open })}
        />

        <Drawer
          open={this.state.open}
          docked={false}
          onRequestChange={open => this.setState({ open })}
        >
          {links.map((link, i) => {
            return (
              <SideBarItem
                isExact={link.isExact}
                linkTo={link.linkTo}
                primaryText={link.text}
                handleClose={this.handleClose}
                key={i}
              />
            )
          })}
        </Drawer>
      </div>
    )
  }
}

export default SideNav
