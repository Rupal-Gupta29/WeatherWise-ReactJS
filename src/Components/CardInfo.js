import React from 'react';
import './cardInfo.css';

const CardInfo = ({heading, value, unit, icon}) => {
  return (
    <div className='info-cards rounded-2 p-3 my-2 text-center'>
      <div>{icon} <span>{heading}</span></div>
      <h4 className='mt-2'><span>{value}</span> {unit}</h4>
    </div>
  )
}

export default CardInfo