import React from 'react'
import './Styles/locationCard.css'

const LocationCard = ({info}) => {
  return (
    <article className='location'>
      <h2 className='location_name'>{info?.name}</h2>
      <ul className='location_list'>
        <li className='location_item'><span className='location_itemTitle'>Type: </span><span>{info?.type}</span></li>
        <li className='location_item'><span className='location_itemTitle'>Dimension: </span><span>{info?.dimension}</span></li>
        <li className='location_item'><span className='location_itemTitle'>Population: </span><span>{info?.residents.length}</span></li>
      </ul>
    </article>
  )
}

export default LocationCard