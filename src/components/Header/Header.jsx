import React, { useState } from 'react';
import s from './Header.module.scss';
import { Link } from 'react-router-dom';
import { AppContextProvider, useAppContext } from '../../context';

const Header = () => {

  const {isActive, toggleMenu, closeMenu} = useAppContext()

  return (
    <>
      <header className={s.header}>
        <div className="container">
          <nav className={s.nav}>
            <img className={s.burger} onClick={toggleMenu} src="/burger-img.svg" alt="" />
            <Link onClick={closeMenu} to={'/'} className={s.logo}>
              SHOP.CO
            </Link>
            <div className={`${s.menu} ${isActive ? s.active : null}`}>
              <Link onClick={closeMenu} to={'/shop'} className={s.dropdown}>
                Shop
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5306 6.53063L8.53063 11.5306C8.46095 11.6005 8.37816 11.656 8.28699 11.6939C8.19583 11.7317 8.09809 11.7512 7.99938 11.7512C7.90067 11.7512 7.80293 11.7317 7.71176 11.6939C7.6206 11.656 7.53781 11.6005 7.46813 11.5306L2.46813 6.53063C2.32723 6.38973 2.24808 6.19864 2.24808 5.99938C2.24808 5.80012 2.32723 5.60902 2.46813 5.46813C2.60902 5.32723 2.80012 5.24808 2.99938 5.24808C3.19864 5.24808 3.38973 5.32723 3.53063 5.46813L8 9.9375L12.4694 5.4675C12.6103 5.32661 12.8014 5.24745 13.0006 5.24745C13.1999 5.24745 13.391 5.32661 13.5319 5.4675C13.6728 5.6084 13.7519 5.7995 13.7519 5.99875C13.7519 6.19801 13.6728 6.38911 13.5319 6.53L13.5306 6.53063Z"
                    fill="black"
                  />
                </svg>
                <div>
                  <Link to={'/'}>Casual</Link>
                  <Link to={'/'}>Party</Link>
                  <Link to={'/'}>Formal</Link>
                  <Link to={'/'}>GYM</Link>
                </div>
                </Link>
              <Link onClick={closeMenu} to={'/'}>On Sale</Link>
              <Link onClick={closeMenu} to={'/'}>New Arrivals</Link>
              <Link onClick={closeMenu} to={'/'}>Brands</Link>
            </div>
            <input placeholder='Search for products...' className={s.search} type="text" />
            <div className={s.box}>
              <img src="/icon-1.svg" alt="" />
              <img src="/icon-2.svg" alt="" />
            </div>

          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
