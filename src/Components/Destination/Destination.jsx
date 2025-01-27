import React from 'react'
import {destinations} from '../../Data'

export default function Destination() {
  return (
    <>
      <div className="destinations-container">
        <h1 className="destinations-header">Best Destination</h1>
        <div className="destinations">
            {destinations.map((destination) =>(
<div key={destination.id} className='destinations-item'>
    <img src={destination.image} alt="" className='destinations-img'/>
    <div className="destinations-title">
        <h1>{destination.title}</h1>
    </div>
</div>

            ))}
        </div>
      </div>
    </>
  )
}
