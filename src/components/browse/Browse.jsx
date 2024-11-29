import React from 'react'
import s from './Browse.module.scss'
import SectionTitle from '../SectionTitle/SectionTitle'

const Browse = () => {
  return (
    <>
    <section className={s.browse}>
        <div className="container">
            <div className={s.wrapper}>
                <SectionTitle>BROWSE BY dress STYLE</SectionTitle>
                <div className={s.cards}>
                    <div className={s.box_1}>
                    <div className={s.card_1}><b>Casual</b></div>
                    <div className={s.card_2}><b>Formal</b></div>
                    </div>
                   <div className={s.box_2}>
                   <div className={s.card_3}><b>Party</b></div>
                   <div className={s.card_4}><b>Gym</b></div>
                   </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Browse
