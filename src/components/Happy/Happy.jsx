import React from "react";
import s from "./Happy.module.scss";
import SectionTitle from "../SectionTitle/SectionTitle";
import Card2 from "../card2/Card2";

const Happy = () => {
  return (
    <>
      <section className={s.Happy}>
        <div className="container">
          <div className={s.wrapper}>
            <div className={s.Happy__Head}>
              <SectionTitle>OUR HAPPY CUSTOMERS</SectionTitle>
              <div className={s.arrow}>
              <img src="/Happy-arrow.svg" alt="" />
              <img src="/Happy-arrow2.svg" alt="" />
              </div>
            </div>
            <div className={s.cards}>
             <Card2 name='Sarah M.' about='Im blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece Ive bought has exceeded my expectations.'/>
             <Card2 name='Alex K.' about='"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”'/>
             <Card2 name='James L.' about="As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends"/>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Happy;
