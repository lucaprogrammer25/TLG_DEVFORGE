import { SidebarCartType } from '../../interfaces/type';
import { FormattedMessage } from 'react-intl';
import Buttontmg3 from '../Buttons/ButtonTmg3';
import Search from './Search';



const SidebarSearchBox: React.FC<SidebarCartType> = ({ closeSideCart}:SidebarCartType) => {

  return (
    <>
    <div style={{display:"flex", flexDirection:"column", gap:"2rem"}}>
      <div className='titleSidebar'>
      <p><FormattedMessage id="searchBox" defaultMessage="Search"/></p>
        <p onClick={closeSideCart}><FormattedMessage id="close" defaultMessage="Close"/></p>
      </div>
     <Search/>
     </div>
     
    </>
  );
};

export default SidebarSearchBox;
