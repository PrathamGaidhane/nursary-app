import React from 'react'
import "./plantcard.css"

function Plantcard({_id,name,categuris,image,price,description}) {
  return (
    <div className='plant-card'>
      <h1 className='plant-name'>{name}</h1>
      <p className='plant-price'>Price : {price}</p>
    </div>
  )
}

export default Plantcard
