import React, { useState, useEffect } from 'react';
import s from './Card.module.scss';

const Card = ({ id, image, name = 'Soon...', rate = 0, price = 'Нет в наличии' }) => {
  // Инициализация рейтинга из localStorage для уникального товара
  const [rating, setRating] = useState(() => {
    const savedRating = localStorage.getItem(`card-rating-${id}`);
    return savedRating ? JSON.parse(savedRating) : rate;
  });

  const handleStarClick = (index) => {
    setRating(index + 1); // Установка рейтинга на основе индекса звезды
  };

  // Сохранение рейтинга в localStorage при изменении
  useEffect(() => {
    localStorage.setItem(`card-rating-${id}`, JSON.stringify(rating));
  }, [rating, id]);

  return (
    <div className={s.card}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <div className={s.stars}>
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={index < rating ? s.activeStar : s.inactiveStar} // Активная или неактивная звезда
            onClick={(e) => {
              e.preventDefault(); // Предотвращаем переход по ссылке при клике на звезду
              handleStarClick(index);
            }}
          >
            ★
          </span>
        ))}
      </div>
      <b>{price}</b>
    </div>
  );
};

export default Card;
