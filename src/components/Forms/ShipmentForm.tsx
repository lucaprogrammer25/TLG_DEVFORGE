import React from 'react';
import { FormData } from '../../interfaces/type';

interface Props {
  formData: FormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  countryOptions: string[];
  prefixOptions: { [key: string]: string },
  billing?:string;
}


const FormFields: React.FC<Props> = ({ formData, handleInputChange, countryOptions, prefixOptions,billing }) => {
  return (
    <ul>
      <li>
        <label htmlFor="email">{billing}Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required aria-label="Email" />
      </li>
      <li>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required aria-label="Name" />
      </li>
      <li>
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required aria-label="Last Name" />
      </li>
      <li>
        <label htmlFor="address">{billing}Address:</label>
        <input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} required aria-label="Address" />
      </li>
      <li>
        <label htmlFor="postalCode">{billing}Postal Code:</label>
        <input type="text" id="postalCode" name="postalCode" value={formData.postalCode} onChange={handleInputChange} required aria-label="Postal Code" />
      </li>
      <li>
        <label htmlFor="country">Country:</label>
        <select id="country" name="country" value={formData.country} onChange={handleInputChange} required aria-label="Country">
          {countryOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </li>
      <li>
        <label htmlFor="province">Province:</label>
        <input type="text" id="province" name="province" value={formData.province} onChange={handleInputChange} required aria-label="Province" />
      </li>
      <li>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <select id="prefix" name="prefix" value={formData} onChange={handleInputChange} required aria-label="Prefix">
          <option value="">Select Prefix</option>
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
