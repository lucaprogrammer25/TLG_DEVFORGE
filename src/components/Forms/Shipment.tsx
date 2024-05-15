import React, { useState } from 'react';
import FormFields from './ShipmentForm';

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
    prefix: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const countryOptions = ['Choose a country', 'Spain', 'Germany', 'France', 'Italy'];
  const prefixOptions = {
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
    <form className="formShipment"onSubmit={handleFormSubmit}>
      <h2>Shipment Information</h2>
      <FormFields formData={formData} countryOptions={countryOptions} prefixOptions={prefixOptions} handleInputChange={handleInputChange} />
      
      {/* Checkbox for toggling Billing Address */}
      <label htmlFor="showBillingAddress">
        <input type="checkbox" id="showBillingAddress" onChange={handleCheckboxChange} checked={showBillingAddress} />
        Use a different address for billing 
      </label>
      
      {/* Conditional rendering for Billing Address */}
      {showBillingAddress && (
        <FormFields formData={formData} handleInputChange={handleInputChange} countryOptions={countryOptions} prefixOptions={prefixOptions} billing='Billing'/>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};

export default ShipmentForm;
