import React, { Component } from 'react'
import MenuItem from 'material-ui/MenuItem'
import { NavLink } from 'react-router-dom'

class SideBarItem extends Component {
  constructor (props) {
    super(props)
    this.state = { open: false }
  }

  render () {
    return (
      <NavLink
        activeClassName='active'
        exact={this.props.isExact}
        to={this.props.linkTo}
      >
        <MenuItem
          onTouchTap={this.props.handleClose}
          primaryText={this.props.primaryText}
        />
      </NavLink>
    )
  }
}

export default SideBarItem
