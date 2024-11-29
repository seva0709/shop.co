import React from 'react'
import s from './Stay.module.scss'
import SectionTitle from '../SectionTitle/SectionTitle'

const Stay = () => {
  return (
    <>
    <section className={s.Stay}>
        <div className="container">
            <div className={s.wrapper}>
                <div className={s.card1}>
                    <h2>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
                </div>
                <div className={s.card2}>
                    <input placeholder='Enter your email address'  type="text" /> 
                    
                    <button>Subscribe to Newsletter</button>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Stay
