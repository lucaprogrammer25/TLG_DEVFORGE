import React from 'react';
import { PropsForms } from '../../interfaces/type';
import { FormattedMessage } from 'react-intl';
import CustomDropdown from './CustomDropdown';  



const FormFields: React.FC<PropsForms> = ({ formData, handleInputChange, countryOptions, prefixOptions }) => {
  return (
    <ul className='shipmentFormList'>
      <li>
        <label htmlFor="email"><FormattedMessage id="email" defaultMessage="Email:"/></label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required aria-label="Email" />
      </li>
      <li>
        <label htmlFor="name"><FormattedMessage id="name" defaultMessage="Name:"/></label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required aria-label="Name" />
      </li>
      <li>
        <label htmlFor="lastName"><FormattedMessage id="last name" defaultMessage="Last Name:"/></label>
        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required aria-label="Last Name" />
      </li>
      <li>
        <label htmlFor="address"><FormattedMessage id="address" defaultMessage="Address:"/></label>
        <input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} required aria-label="Address" />
      </li>
      <li>
        <label htmlFor="postalCode"><FormattedMessage id="postal code" defaultMessage="Postal Code:"/></label>
        <input type="text" id="postalCode" name="postalCode" value={formData.postalCode} onChange={handleInputChange} required aria-label="Postal Code" />
      </li>
      <li>
        <label htmlFor="country"><FormattedMessage id="country" defaultMessage="Country:"/></label>
        <select id="country" name="country" value={formData.country} onChange={handleInputChange} required aria-label="Country">
          {countryOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </li>
      <li>
        <label htmlFor="province"><FormattedMessage id="city" defaultMessage="City:"/></label>
        <input type="text" id="province" name="province" value={formData.province} onChange={handleInputChange} required aria-label="Province" />
      </li>
      <li>
        <label htmlFor="phoneNumber"><FormattedMessage id="phone number" defaultMessage="Phone Number:"/></label>
        <div className='numberField'>
        <CustomDropdown
          options={prefixOptions}
          selectedOption={prefixOptions.find(option => option.value === formData.phonePrefix)}
          handleChange={(option:any) => handleInputChange({ target: { name: 'phonePrefix', value: option.value } })}
        />
        <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} required aria-label="Phone Number" />
        </div>
      </li>
    </ul>
  );
};

export default FormFields;
