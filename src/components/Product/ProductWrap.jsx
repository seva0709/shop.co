import React from 'react'
import s from './ProductWrap.module.scss'

const ProductWrap = ({product}) => {
  return (
    <>
        <section className={s.productWrap}>
            <div className="container">
                <div className={s.wrap}>

                    <div className={s.images}>
                        <div>
                            <img src={product.image} alt="" />
                            <img src={product.image} alt="" />
                            <img src={product.image} alt="" />
                        </div>

                        <img src={product.image} alt="" />
                    </div>
                  
                  <div className={s.box}>
                    <div>
                        <h2>{product.name}</h2>
                        <h3>❤️❤️❤️❤️ 4/5 </h3>
                        <div className={s.price}>
                            <b>{product.price}сум</b>
                            <s>{product.price * 1.1}сум</s>
                        </div>

                        <p></p>
                    </div>

                    <div >
                        <p>Select colors</p>
                        <div className={s.colors}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>

                    <div>
                        <p>Choose Size</p>
                        <div className={s.btns}>
                            <button>Small</button>
                            <button>Medium</button>
                            <button>Large</button>
                            <button>X-Large</button>
                        </div>
                    </div>

                  </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ProductWrap