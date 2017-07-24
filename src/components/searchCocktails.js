import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'


export default class SearchCocktails extends Component {
  constructor() {
    super()
    this.state = {
      searchTerm: ''
    }
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.props.handleSearchSubmit(event.target.value)
    }
  }

  handleSearchChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render() {
    console.log(this.state);
    return (
      <Input placeholder='Search Cocktails'
        value={this.state.searchTerm}
        onChange={this.handleSearchChange}
        onKeyPress={this.handleKeyPress}
      />
        )
  }
}
