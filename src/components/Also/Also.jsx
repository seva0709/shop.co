import React from 'react'
import s from './Also.module.scss'
import SectionTitle from '../SectionTitle/SectionTitle'
import Card3 from '../card3/Card3'

const Also = () => {
  return (
    <>
    <section className={s.also}>
      <div className="container">
        <div className={s.wrapper}>
          <SectionTitle>You might also like</SectionTitle>
          <div className={s.cards}>
          <Card3 image='/also-img1.png' name='Polo with Contrast Trims' rate='4.0/5' price='$212' secondPrice='242$' discount='-20%'/>
          <Card3 image='/also-img2.png' name='Gradient Graphic T-shirt' rate='3.5/5' price='$145' />
          <Card3 image='/also-img3.png' name='Polo with Tipping Details' rate='4.5/5' price='$180'/>
          <Card3 image='/also-img4.png' name='Black Striped T-shirt' rate='5.0/5' price='$120' secondPrice='$150' discount='-30%'/>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Also