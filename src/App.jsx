import React from 'react'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/footer/Footer'
import Header from './components/Header/Header'
import Shop from './pages/Shop'
import Product from './pages/Product'


const App = () => {
  return (
    <>
     <Header />
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/shop' element={<Shop/>} />
    <Route path='/product/:id' element={<Product/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App