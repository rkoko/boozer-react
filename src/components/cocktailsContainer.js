import React, {Component} from 'react'
import CocktailList from './cocktailList'
import CocktailDetails from './cocktailDetails'
import { Grid, Image } from 'semantic-ui-react'
import SearchCocktails from './searchCocktails'

class CocktailsContainer extends Component{
  constructor(){
    super();

    this.state={
      cocktails: [],
      currentCocktail: {},
      searchResults: []
    }
  }

  componentDidMount(){
    fetch(`http://localhost:3000/api/v1/cocktails`)
    .then(res => res.json())
    .then(json => this.setState({
      cocktails: json,
      searchResults: json
    }))
  }

  handleClick = (cocktail) => {
    this.setState({
      currentCocktail: cocktail
    })

  }

  onSearchSubmit = (searchTerm) => {
    this.setState({
      searchResults: this.state.cocktails.filter(cocktail => cocktail.name.includes(searchTerm.toUpperCase()))
    })
  }



  render(){
    console.log(this.state)
    return(
      <Grid>
        <Grid.Row>
          <Grid.Column width={6}>
            <SearchCocktails handleSearchSubmit={this.onSearchSubmit}/>
            <CocktailList list={this.state.searchResults} handleClick={this.handleClick} />
          </Grid.Column>
          <Grid.Column width={10}>
            <CocktailDetails currentCocktail={this.state.currentCocktail} />
          </Grid.Column>
        </Grid.Row>
    </Grid>
    )
  }

}

export default CocktailsContainer
