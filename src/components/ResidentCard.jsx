import React from 'react'
import useFetch from '../hooks/useFetch'
import { useEffect } from 'react'
import './Styles/residentCard.css'

const ResidentCard = ({info}) => {

    const[resident, getResident] =  useFetch()
    useEffect(() => {
        getResident(info)

    }, [])

  return (
    <article className='residentCard'>
        <figure className='residentCard_img'>
            <img src={resident?.image} alt="character image"/>
            <figcaption className={`residentCard_status`}>
                <span>{resident?.status}</span>
                <div className={`residentCard_circle ${resident?.status}`}></div>
            </figcaption>
        </figure>
        <h2 className='residentCard_name'>{resident?.name}</h2>
        <hr className='residentCard_separator'/>
        <ul className='residentCard_list'>
            <li className='residentCard_item'><span>Specie: </span><span></span>{resident?.species}</li>
            <li className='residentCard_item'><span>Origin: </span><span></span>{resident?.origin.name}</li>
            <li className='residentCard_item'><span>Eppisodes where appear: </span><span>{resident?.episode.length}</span></li>
        </ul>
    </article>
  )
}

export default ResidentCard