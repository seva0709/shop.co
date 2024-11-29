import React from 'react'
import s from './Card2.module.scss'

const Card2 = ({ name, about='soon..', posted='Posted on August 52, 1945' }) => {
  return (
    <>
     <div className={s.card}>
                <img src="/Happy-svg1.svg" alt="" />
                <div>
                <b>{name} <img src="/Happy-svg2.svg" alt="" /></b>
                <p>{about}</p>
                <p>{posted}</p>
                </div>
              </div>
    </>
  )
}



export default Card2