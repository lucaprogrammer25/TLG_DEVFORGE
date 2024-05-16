import React from 'react';
import { FormData } from '../../interfaces/type';
import { FormattedMessage } from 'react-intl';

interface Props {
  formData: FormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  countryOptions: string[];
  prefixOptions: { [key: string]: string },
  billing?:string;
}


const FormFields: React.FC<Props> = ({ formData, handleInputChange, countryOptions, prefixOptions}) => {
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
        <label htmlFor="lastName"><FormattedMessage id="last name"/></label>
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
        <label htmlFor="country"><FormattedMessage id="country" defaultMessage="Address:"/></label>
        <select id="country" name="country" value={formData.country} onChange={handleInputChange} required aria-label="Country">
          {countryOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </li>
      <li>
        <label htmlFor="province"><FormattedMessage id="city"/></label>
        <input type="text" id="province" name="province" value={formData.province} onChange={handleInputChange} required aria-label="Province" />
      </li>
      <li>
        <label htmlFor="phoneNumber"><FormattedMessage id="phone number"/></label>
        <select id="prefix" name="prefix" value={formData.phonePrefix} onChange={handleInputChange} required aria-label="Prefix">
          <option value=""> </option>
          {Object.entries(prefixOptions).map(([country, prefix]) => (
            <option key={prefix} value={prefix}>
              {country} {prefix}
            </option>
          ))}
        </select>
        <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} required aria-label="Phone Number" />
      </li>
    </ul>
  );
};

export default FormFields;
