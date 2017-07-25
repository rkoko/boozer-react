import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class Nav extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Link to='/' >
          <Menu.Item
          name='Home'
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>
      </Link>
      <Link to='/cocktails' >
        <Menu.Item
          name='Cocktails'
          active={activeItem === 'Cocktails'}
          onClick={this.handleItemClick}
        >
          Cocktails
        </Menu.Item>
      </Link>
      <Link to='/login' >
        <Menu.Item
          name='Login'
          active={activeItem === 'Login'}
          onClick={this.handleItemClick}
        >
          Log In
        </Menu.Item>
      </Link>

      </Menu>
    )
  }
}
