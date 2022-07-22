import React from 'react'
import { cards } from '../../Constants/Cards'
import Card from '../Card'

const Cards = () => {
  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2 m-7">
        {
            cards.map(card => <Card key={card.id} data={card}/>)
        }
    </div>
  )
}

export default Cards