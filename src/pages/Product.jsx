import React from 'react'
import { useParams } from 'react-router-dom'
import Products from '/public/products.json'
import ProductWrap from '../components/ProductWrap/ProductWrap'


const Product = () => {
    const {id} = useParams()
    const product = Products.find(item => item.id === Number(id))
  return (
    <>
   <ProductWrap product={product}/>
    </>
  )
}

export default Product