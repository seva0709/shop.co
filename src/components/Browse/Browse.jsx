import React from 'react'
import s from './Browse.module.scss'
import SectionTitle from '../SectionTitle/SectionTitle'

const Browse = () => {
  return (
    <>
    <div className={s.wrapp}>
        <div className="container">
            <div className={s.box}>
               <SectionTitle>BROWSE BY dress STYLE</SectionTitle>

                <div className={s.cards}>
                    <div className={s.CARD1}>
                        <h2 className={s.title}>Casual</h2>
                    </div>
                    <div className={s.CARD2}>
                        <h2 className={s.title}>Formal</h2>
                    </div>
                    <div className={s.CARD3}>
                        <h2 className={s.title}>Party</h2>
                    </div>
                    <div className={s.CARD4}>
                        <h2 className={s.title}>Gym</h2>
                    </div>
                </div>

            </div>

        </div>
    </div>
    
    </>
  )
}

export default Browse
