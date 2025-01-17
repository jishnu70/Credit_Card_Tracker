import React from 'react';
import Slider from 'react-slick';
import styles from './CardsCarrousel.module.css';
import CreditCard from './CreditCardComponent/CreditCard';
import BottomDrawer from './Drawer/BottomDrawer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carrousel-styles.css';

const CreditCardsInfo = [
  {
    nameId: 'CardA',
    account: '3283-02-009-76275-1',
    number: '3890 2345 3283',
    date: '01/29',
    name: 'Name LastName',
    ica: '123',
    balance: '$2.000',
    client: 'US2864254-6658-508043',
    type: 'americanExpress', //visa,mastercard or americanExpress
    styles: 'linear-gradient(126deg, rgba(58, 46, 72, 1) 0%, rgba(103, 92, 121, 1) 100%)'
  },
  {
    nameId: 'CardB',
    account: '2972-91-997-65148-2',
    number: '4513 6305 2972',
    date: '06/28',
    name: 'Name LastName',
    ica: '456',
    balance: '$9.070',
    client: 'US1838250-7124-871250',
    type: 'mastercard', //visa,mastercard or americanExpress
    styles: 'linear-gradient( 76.3deg,  rgba(44,62,78,1) 12.6%, rgba(69,103,131,1) 82.8% )'
  },
  {
    nameId: 'CardC',
    account: '0328-77-999-27481-7',
    number: '8547 6637 0328',
    date: '03/24',
    name: 'Name LastName',
    ica: '789',
    balance: '$4.000',
    client: 'US8434248-1007-87432',
    type: 'visa', //visa,mastercard or americanExpress
    styles: 'radial-gradient( circle farthest-corner at 10% 20%,  rgba(37,145,251,0.98) 0.1%, rgba(0,7,128,1) 99.8% )'
  }
];

function CardsCarrousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className={styles.father} id='father'>
      <div className={styles.header}>
        <h2 style={{ fontSize: '30px', fontWeight: 'bolder', margin: '0 30px' }}>
          Your Credit Cards
        </h2>
      </div>
      <Slider className={styles.carrousel} {...settings}>
        {CreditCardsInfo.map((cardData, index) => (
          <div key={index} className={styles.item}>
            <CreditCard locked={true} data={cardData} />
            <BottomDrawer data={cardData} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CardsCarrousel;