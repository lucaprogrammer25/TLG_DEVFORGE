import { useState } from 'react';
import Buttontmg2 from '../Buttons/ButtonTmg2';
import { useTypeDispatch, useTypeSelector } from '../../redux/typeHooks';
import { addShipping, removeShipping } from '../../redux/slice/cartSlice';
import { FormattedMessage } from 'react-intl';
import Buttontmg3 from '../Buttons/ButtonTmg3';
const PaymentForm: React.FC = () => {
  const {cartItems} = useTypeSelector((state) => state.cart )
  const [paymentMethod, setPaymentMethod] = useState('');
  const [creditCardInfo, setCreditCardInfo] = useState({
    cardNumber: '',
    expirationMonth: '',
    expirationYear: '',
    cvc: '',
    cardHolderName: '',
  });
  const [paypalSelected, setPaypalSelected] = useState(false);
  const dispatch = useTypeDispatch()
  console.log(paymentMethod);
  
  
  const handlePaymentMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(event.target.value);
    if (event.target.value === 'paypal') {
      dispatch(removeShipping())
      setPaypalSelected(true);
    } else if (event.target.value === 'cash-on-delivery') {
      dispatch(addShipping());
      console.log(cartItems);
    } else {
      dispatch(removeShipping())
      setPaypalSelected(false);
    }
  };
 

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target ;
    let formattedValue = value;
    if (name === 'cardNumber') {
      const isHyphen = value.slice(-1) === '-';
      formattedValue = value.replace(/\D/g, '') 
                           .slice(0, 16)      
                           .replace(/(\d{4})/g, '$1-') 
                           .slice(0, 19);    
       if ((event.nativeEvent as any).inputType === 'deleteContentBackward' && isHyphen) {
       formattedValue = formattedValue.slice(0, -1); 
       }
    }
  
    setCreditCardInfo({
      ...creditCardInfo,
      [name]: formattedValue,
    });
  };
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Payment Method:', paymentMethod);
    console.log('Credit Card Info:', creditCardInfo);
  };

  const monthOptions = Array.from({ length: 12 }, (_, index) => {
    const month = index + 1;
    const monthString = month < 10 ? `0${month}` : `${month}`;
    return (
      <option key={month} value={monthString}>
        {monthString}
      </option>
    );
  });

  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from({ length: 5 }, (_, index) => {
    const year = currentYear + index;
    return (
      <option key={year} value={year}>
        {year}
      </option>
    );
  });

  return (
    <div>
  <h2><FormattedMessage id="payment options" /></h2>
  <form onSubmit={handleFormSubmit}>
    <div>   
      <input
        type="radio"
        id="cash-on-delivery"
        name="paymentMethod"
        value="cash-on-delivery"
        checked={paymentMethod === 'cash-on-delivery'}
        onChange={handlePaymentMethodChange}
        className="styled-radio"
      />
      <label htmlFor="cash-on-delivery"><FormattedMessage id="pay on delivery" /></label>
    </div>
    <div>
      <input
        type="radio"
        id="credit-card"
        name="paymentMethod"
        value="credit-card"
        checked={paymentMethod === 'credit-card'}
        onChange={handlePaymentMethodChange}
        className="styled-radio"
      />
      <label htmlFor="credit-card"><FormattedMessage id="pay with credit card" /></label>
    </div>
    <div>
      <input
        type="radio"
        id="paypal"
        name="paymentMethod"
        value="paypal"
        checked={paymentMethod === 'paypal'}
        onChange={handlePaymentMethodChange}
        className="styled-radio"
      />
      <label htmlFor="paypal"><FormattedMessage id="pay with paypal" /></label>
    </div>

    {paymentMethod === 'credit-card' && (
      <div className='paymentForm'>
        <label htmlFor="Card Number"><FormattedMessage id="card number" /></label>
        <input
          type="text"
          id="card-number"
          name="cardNumber"
          value={creditCardInfo.cardNumber}
          onChange={handleInputChange}
          maxLength={19}
          pattern="\d{4} \d{4} \d{4} \d{4}"
          required
        />
        <label htmlFor="Expiration Month"><FormattedMessage id="expiration month" /></label>
        <select
          aria-label="expiration month"
          id="expiration-month"
          name="expirationMonth"
          value={creditCardInfo.expirationMonth}
          onChange={handleInputChange}
          title="Expiration Month"
        >
          <option value=""><FormattedMessage id="expiration month" /></option>
          {monthOptions}
        </select>
        <label htmlFor="Expiration Year"><FormattedMessage id="expiration year" /></label>
        <select
          title="Expiration Year"
          aria-label="expiration year"
          id="expiration-year"
          name="expirationYear"
          value={creditCardInfo.expirationYear}
          onChange={handleInputChange}
        >
          <option value=""><FormattedMessage id="expiration year" /></option>
          {yearOptions}
        </select>
        <label htmlFor="CVC"><FormattedMessage id="cvc" /></label>
        <input
          type="text"
          id="cvc"
          name="cvc"
          value={creditCardInfo.cvc}
          onChange={handleInputChange}
          maxLength={3}
          pattern="\d*"
        />
        <label htmlFor="Holder name "><FormattedMessage id="holder name" /></label>
        <input
          type="text"
          id="card-holder-name"
          name="cardHolderName"
          value={creditCardInfo.cardHolderName}
          onChange={handleInputChange}             
        />
      </div>
    )}
    {paypalSelected && (
      <div>
        <button className='buttonBlackPWhite'><FormattedMessage id="pay with paypal" /></button>
      </div>
    )}
    {!paypalSelected && (
      <Buttontmg3 label="go to checkout" className='buttonBlackPWhite' onClick={handleFormSubmit} />
    )}
  </form>
</div>
  );
};

export default PaymentForm;
