import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { DropdownProps } from '../../interfaces/type';


const CustomDropdown = ({ options, selectedOption, handleChange }:DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectOption = (option:any) => {
    handleChange(option);
    setIsOpen(false);
  };

  return (
    <div className="custom-dropdown">
      <div className="custom-dropdown__selected" onClick={() => setIsOpen(!isOpen)}>
        {selectedOption ? (
          <>
            <img src={selectedOption.flag} alt={selectedOption.country} style={{ width: '20px', marginRight: '10px' }} />
            {selectedOption.value}
          </>
        ) : (
          <FormattedMessage id='prefix' defaultMessage="Prefix"></FormattedMessage>
        )}
      </div>
      {isOpen && (
        <ul className="custom-dropdown__list">
          {options.map((option:any) => (
            <li key={option.value} onClick={() => handleSelectOption(option)}>
              <img src={option.flag} alt={option.country} style={{ width: '20px', marginRight: '10px' }} />
              {option.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
