import React from 'react'
import s from './Brand.module.scss'

const Brand = () => {
  return (
   <>
   <section className={s.brand}>
    <div className={s.wrapper}>
      <div className={s.image}>
      <img src="/brand-img1.png" alt="" />
      <img src="/brand-img2.png" alt="" />
      <img src="/brand-img3.png" alt="" />
      <img src="/brand-img4.png" alt="" />
      <img src="/brand-img5.png" alt="" />
      </div>
    </div>
   </section>
   </>
  )
}

export default Brand