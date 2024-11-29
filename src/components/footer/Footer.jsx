import React from 'react'
import s from './Footer.module.scss'

const Footer = () => {
  return (
    <>
    <footer className={s.footer}>
        <div className="container">
            <div className={s.wrapper}>
                <div className={s.wrap}>
                <div className={s.card1}>
                  <h2>SHOP.CO</h2>
                  <p>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                  <div className={s.image}>
                    <img src="/footer-img1.svg" alt="" />
                    <img src="/footer-img2.svg" alt="" />
                    <img src="/footer-img3.svg" alt="" />
                    <img src="/footer-img4.svg" alt="" />
                  </div>
                </div>
                </div>

                <div className={s.card2}>
                  <h3>Company</h3>
                  <p>About</p>
                  <p>Features</p>
                  <p>Works</p>
                  <p>Career</p>
                </div>
                <div className={s.card2}>
                  <h3>Help</h3>
                  <p>Customer Support</p>
                  <p>Delivery Details</p>
                  <p>Terms & Conditions</p>
                  <p>Privacy Policy</p>
                </div>
                <div className={s.card2}>
                  <h3>FAQ</h3>
                  <p>Account</p>
                  <p>Manage Deliveries</p>
                  <p>Orders </p>
                  <p>Payments</p>
                </div>
                <div className={s.card2}>
                  <h3>Resources</h3>
                  <p>Free eBooks</p>
                  <p>Development Tutorial</p>
                  <p>How to - Blog</p>
                  <p>Youtube Playlist</p>
                </div>

            </div>

            <div className={s.line}></div>

            <div className={s.end}>
              <p>Shop.co © 2000-2023, All Rights Reserved</p>
              <div className={s.images}>
              <img src="/footer-img5.svg" alt="" />
              <img src="/footer-img6.svg" alt="" />
              <img src="/footer-img7.svg" alt="" />
              <img src="/footer-img8.svg" alt="" />
              </div>
            </div>

        </div>
    </footer>
    </>
  )
}

export default Footer
