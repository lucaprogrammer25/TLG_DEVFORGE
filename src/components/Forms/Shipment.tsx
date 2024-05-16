import React, { useState } from 'react';
import FormFields from './ShipmentForm';
import PaymentForm from './Payment';
import Buttontmg2 from '../Buttons/ButtonTmg2';
import { FormattedMessage } from 'react-intl';

const ShipmentForm: React.FC = () => {
  const [showBillingAddress, setShowBillingAddress] = useState(false);

  const handleCheckboxChange = () => {
    setShowBillingAddress(!showBillingAddress);
  };

  const [formData, setFormData] = useState({
    email: '',
    name: '',
    lastName: '',
    address: '',
    postalCode: '',
    country: '',
    province: '',
    phoneNumber: '',
  });

  const [selectedCountry, setSelectedCountry] = useState('');

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setSelectedCountry(value);
    setFormData({ ...formData, country: value });
  };

  const [phonePrefix , setPhonePrefix] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'prefix') {
      setPhonePrefix(value);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const countryOptions = [<FormattedMessage id="choose a country"/> as any, 'Spain', 'Germany', 'France', 'Italy'];

  const prefixOptions:any = {
    Spain: '+34',
    Germany: '+49',
    France: '+33',
    Italy: '+39',
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submitted Form Data:', formData);
  };

  return (
    <div className='shipmentContainer'>
      <form onSubmit={handleFormSubmit}>
        <h2>Shipment Information</h2>
        <FormFields
          formData={formData}
          countryOptions={countryOptions}
          prefixOptions={prefixOptions}
          phonePrefix={phonePrefix}
          selectedCountry={selectedCountry}
          handleCountryChange={handleCountryChange}
          handleInputChange={handleInputChange}
        />
        <label htmlFor="showBillingAddress">
          <input type="checkbox" id="showBillingAddress" onChange={handleCheckboxChange} checked={showBillingAddress} />
          <FormattedMessage id="different address"/>
        </label>
        {showBillingAddress && (
          <FormFields
            formData={formData}
            handleInputChange={handleInputChange}
            countryOptions={countryOptions}
            prefixOptions={prefixOptions}
            billing='Billing '
          />
        )}
        {/* <Buttontmg2 label="Checkout" classButton='checkoutPayment' onClick={handleFormSubmit} /> */}
      </form>
      <PaymentForm />
    </div>
  );
};

export default ShipmentForm;
