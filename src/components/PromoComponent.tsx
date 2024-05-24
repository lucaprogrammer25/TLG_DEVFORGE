import React from 'react';
import gift from '../assets/icons/gift.svg'
import { FormattedMessage } from 'react-intl';

interface Props {
  // Definisci le tue props qui
}

const PromoComponent: React.FC<Props> = ({ /* props */ }) => {
  return (
    <>
    <div className='promoContainer' >
        <img src={gift} alt="" />
        <p><FormattedMessage id="promotionCart" defaultMessage="Promo active, we'll give you the two least expensive products for free!" /></p>
    </div>
    </>
  );
};

export default PromoComponent;