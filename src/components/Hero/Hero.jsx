import React from 'react';
import s from './Hero.module.scss';

const Hero = () => {
  return (
    <>
      <section className={s.hero}>
        <div className="container">
          <div className={s.wrapper}>
            <div className={s.hero__card1}>
              <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
              <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
              <button>Shop Now</button>
              <div className={s.boxes}>
                <div className={s.box}>
                  <h2>200+</h2>
                  <p>International Brands</p>
                </div>
                <div className={s.line}></div>
                <div className={s.box}>
                <h2>2,000+</h2>
                <p>High-Quality Products</p>
                </div>
                <div className={s.line2}></div>
                <div className={s.box}>
                <h2>30,000+</h2>
                <p>Happy Customers</p>
                </div>
              </div>
            </div>
            <div className={s.hero__card2}>
              <img src="/hero-img.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
