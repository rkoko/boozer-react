import React from 'react'
import { Link } from 'react-router-dom'



const CocktailList = (props) =>{
  console.log("rendering list")
  return(
    <ol>
      {props.list.map(cocktail => (
        <li><Link to={`/cocktails/${cocktail.id}`}  onClick={()=> props.handleClick(cocktail) }>{cocktail.name}</Link></li>
      )
      )}
    </ol>
  )

}

export default CocktailList
