import { SidebarCartType } from '../../interfaces/type';
import { FormattedMessage } from 'react-intl';
import Buttontmg3 from '../Buttons/ButtonTmg3';
import Search from './Search';



const SidebarSearchBox: React.FC<SidebarCartType> = ({ closeSideCart}:SidebarCartType) => {

  return (
    <>
      <div className='titleSidebar'>
        <p onClick={closeSideCart}><FormattedMessage id="close" defaultMessage="Close"/></p>
      </div>
     <Search/>
     
    </>
  );
};

export default SidebarSearchBox;
