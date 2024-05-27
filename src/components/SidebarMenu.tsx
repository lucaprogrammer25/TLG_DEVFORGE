import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

const SidebarMenu = ({closeSideMenu}:any) => {
 
  return (
    <div className="sidebarMenuDropdown">
      <div className="dropDownMan">
        <Link className="linkTag" to="/men" onClick={closeSideMenu}>
          <h3><FormattedMessage id='men' defaultMessage="Men"/></h3>
        </Link>
        <div className="dropDownManBox">
          <Link className="linkTag" to="/men/T-shirts" onClick={closeSideMenu}>
            <p><FormattedMessage id='shirt' defaultMessage="Shirt"/></p>
          </Link>
          <Link className="linkTag" to="/men/trousers" onClick={closeSideMenu}>
            <p><FormattedMessage id='trousers' defaultMessage="Trousers"/></p>
          </Link>
          <Link className="linkTag" to="/men/Dresses" onClick={closeSideMenu}>
            <p><FormattedMessage id='dress' defaultMessage="Suit"/></p>
          </Link>
          <Link className="linkTag" to="/men/Shoes" onClick={closeSideMenu}>
            <p><FormattedMessage id='shoes' defaultMessage="Shoes"/></p>
          </Link>
        </div>
      </div>
      <div className="dropDownWoman">
        <Link className="linkTag" to="/women" onClick={closeSideMenu}>
          <h3><FormattedMessage id='women' defaultMessage="Women"/></h3>
        </Link>
        <div className="dropDownWomanBox">
          <Link className="linkTag" to="/women/T-shirts" onClick={closeSideMenu}>
            <p><FormattedMessage id='shirt' defaultMessage="Shirt"/></p>
          </Link>
          <Link className="linkTag" to="/women/trousers" onClick={closeSideMenu}>
            <p><FormattedMessage id='trousers' defaultMessage="Trousers"/></p>
          </Link>
          <Link className="linkTag" to="/women/Dresses" onClick={closeSideMenu}>
            <p><FormattedMessage id='dress' defaultMessage="Dress"/></p>
          </Link>
          <Link className="linkTag" to="/women/Shoes" onClick={closeSideMenu}>
            <p><FormattedMessage id='shoes' defaultMessage="Shoes"/></p>
          </Link>
        </div>
      </div>
      <div className="dropDownAccessories">
        <Link className="linkTag" to="/unisex" onClick={closeSideMenu}>
          <h3><FormattedMessage id='accessories' defaultMessage="Accessories"/></h3>
        </Link>
      </div>
    </div>
  );
};

export default SidebarMenu;