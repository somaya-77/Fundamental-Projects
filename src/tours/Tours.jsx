import React from 'react'
import Tour from './Tour'

const Tours = ({tours, deleteItem}) => {
  return (
    <div>
        <h1>Our Tours</h1>
        <hr />
        {tours.map((tour) => {
            return <Tour key={tour.id} {...tour} deleteItem={deleteItem}/>
        })}
    </div>
  )
}

export default Tours