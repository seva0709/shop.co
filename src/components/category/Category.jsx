import React from 'react';
import s from './Category.module.scss';
import SectionTitle from '../SectionTitle/SectionTitle';
import Card from '../Card/Card';
import Products from '/public/products.json';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context';

const Category = () => {
  const { visibleProducts, loadMoreProducts } = useAppContext();

  return (
    <>
      <section className={s.Category}>
        <div className="container">
          <SectionTitle orient="center">NEW ARRIVALS</SectionTitle>

          <div className={s.wrapper}>
            {Products.slice(0, visibleProducts).map((card) => (
              <Link className={s.link} key={card.id} to={`/product/${card.id}`}>
                <Card
                  id={card.id} // Передаем id для уникального рейтинга
                  image={card.image}
                  name={card.name}
                  price={card.price}
                />
              </Link>
            ))}
          </div>

          {visibleProducts < Products.length && (
            <div className={s.loadMore}>
              <button onClick={loadMoreProducts} className={s.loadMoreButton}>
                Еще
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Category;
