import { FormattedMessage } from 'react-intl';
import { LanguageSelectProps } from '../../interfaces/type';

const LanguageSelect: React.FC<LanguageSelectProps> = ({ handleLanguageChange, handleCloseMenu }) => {
    const handleLanguageClick = (locale: string) => {
        handleLanguageChange(locale);
        handleCloseMenu(); 
    };

    return (
        <div className="navbarServiceMenuLanguageMenu">
            <div onClick={() => handleLanguageClick('en')}>
                <FormattedMessage id="english" defaultMessage="English" />
            </div>
            <div onClick={() => handleLanguageClick('it')}>
                <FormattedMessage id="italian" defaultMessage="Italian" />
            </div>
        </div>
        
    );
};

export default LanguageSelect;
