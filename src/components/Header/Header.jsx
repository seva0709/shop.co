import React from 'react'
import s from './Header.module.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <header className={s.header}>
        <div className="container">
            <nav className={s.nav}>
                <Link to={'/'} className={s.logo} >  SHOP.CO</Link>

                <div className={s.menu}>
                    <Link to={'/'}>Shop</Link>
                    <Link to={'/'}>On Sale</Link>
                    <Link to={'/'}>New Arrivals</Link>
                    <Link to={'/'}>Brands</Link>
                </div>

                <input type={s.search} typeof="text" />

                <div className={s.box}>
                    <img src="/icon-1.svg" alt="" />
                    <img src="/icon-2.svg" alt="" />
                </div>
            </nav>
        </div>
    </header>
    </>
  )
}

export default Header