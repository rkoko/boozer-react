import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const CocktailDetails = (props) => {

  const shouldRender = () => {
    return (props.currentCocktail.name ? <Card>
      {/* <Image src='/assets/images/avatar/large/matthew.png' /> */}
      <Card.Content>
        <Card.Header>
          {props.currentCocktail.name}
        </Card.Header>
        <Card.Meta>
          <span className='date'>
            {props.currentCocktail.source}
          </span>
        </Card.Meta>
        <Card.Description>
          {props.currentCocktail.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        {props.currentCocktail.instructions}
        <ul>
          {props.currentCocktail.proportions.map(ing => (
            <li>{ing.ingredient_name} - {ing.amount}</li>
          ))}
        </ul>
      </Card.Content>
    </Card> : null)
  }

  return(
    shouldRender()
  )

}

export default CocktailDetails
