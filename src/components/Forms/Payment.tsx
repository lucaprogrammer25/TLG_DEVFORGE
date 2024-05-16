import { useState } from 'react';
import Buttontmg2 from '../Buttons/ButtonTmg2';

const PaymentForm: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [creditCardInfo, setCreditCardInfo] = useState({
    cardNumber: '',
    expirationMonth: '',
    expirationYear: '',
    cvc: '',
    cardHolderName: '',
  });
  const [paypalSelected, setPaypalSelected] = useState(false);

  const handlePaymentMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(event.target.value);
    if (event.target.value === 'paypal') {
      setPaypalSelected(true);
    } else {
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
      <h2>Payment Options</h2>
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
  <label htmlFor="cash-on-delivery">Pay on Delivery (+ €20)</label>
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
  <label htmlFor="credit-card">Pay with Credit Card</label>
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
  <label htmlFor="paypal">Pay with PayPal</label>
</div>

        {paymentMethod === 'credit-card' && (
          <div className='paymentForm'>
            <label htmlFor="Card Number">Card Number:</label>
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
            <label htmlFor="Expiration Month">Expiration Month:</label>
            <select
              aria-label="expiration month"
              id="expiration-month"
              name="expirationMonth"
              value={creditCardInfo.expirationMonth}
              onChange={handleInputChange}
              title="Expiration Month"
            >
              <option value="">Expiration Month</option>
              {monthOptions}
            </select>
            <label htmlFor="Expiration Year">Expiration Year:</label>
            <select
              title="Expiration Year"
              aria-label="expiration year"
              id="expiration-year"
              name="expirationYear"
              value={creditCardInfo.expirationYear}
              onChange={handleInputChange}
            >
              <option value="">Expiration Year</option>
              {yearOptions}
            </select>
            <label htmlFor="CVC">CVC:</label>
            <input
              type="text"
              id="cvc"
              name="cvc"
              value={creditCardInfo.cvc}
              onChange={handleInputChange}
              maxLength={3}
              pattern="\d*"
/>
            <label htmlFor="Card holder name ">Holder name:</label>
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
            <button >Pay with PayPal</button>
          </div>
        )}
        {!paypalSelected && (
          <Buttontmg2 label="Checkout" classButton='checkoutPayment' onClick={handleFormSubmit} />
        )}
      </form>
    </div>
  );
};

export default PaymentForm;