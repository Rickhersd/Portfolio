import React from 'react'
import ServiceInterface from '../js/interfaces/servicesInterface'

export default function Service({ title, description, svgUrl}:ServiceInterface) {

  return (
    <div className='services__service'>
      <div className='services__service-svg-cont'>
        {svgUrl()}
      </div>
      <h1 className='services__service-title'>{title}</h1>
      <p className='services__service-description'>{description}</p>
    </div>
  )
}