import React from 'react'
import s from './Categort.module.scss'
import SectionTitle from '../SectionTitle/SectionTitle'
import Card from '../Card/Card'
import Products from '/public/products.json'

const Category = () => {
  return (
    <>
    
    <section className={s.Category}>
        <div className="container">

            <SectionTitle arient="center">NEW ARRIVALS</SectionTitle>

            <div className={s.wrapper}>
                
                    {Products.slice(0, 4).map(card =>(

                <Card key={card.id} image={card.image} name={card.name} price={card.price} />
                    ))}

            </div>
        </div> 
    </section>

    </>
  )
  }

export default Category