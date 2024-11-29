import React from 'react'
import s from './Card3.module.scss'

const Card3 = ({ image="/also-img1.png", name='T-shirt', rate, price, secondPrice, discount}) => {
  return (
    <>
    <div className={s.card}>
      <img src={image} alt="" />
      <h3>{name}</h3>
      <p><img src="/also-svg.svg" alt="" />{rate}</p>
      <div className={s.sale}>

        {price ? (
          <b>{price}</b>
        ): (
          null
        )}
        
        {secondPrice ? (
            <s>{secondPrice}</s>
        ): (
          null
        )}

        {discount ? (
          <p>{discount}</p>
        ): (
          null
        )}
      </div>

    </div>
    </>
  )
}

export default Card3