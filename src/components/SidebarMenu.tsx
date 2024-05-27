import { Link } from 'react-router-dom';

const SidebarMenu = ({closeSideMenu}:any) => {
 
  return (
    <div className="sidebarMenuDropdown">
      <div className="dropDownMan">
        <Link className="linkTag" to="/men" onClick={closeSideMenu}>
          <h3>Man</h3>
        </Link>
        <div className="dropDownManBox">
          <Link className="linkTag" to="/men/T-shirts" onClick={closeSideMenu}>
            <p>t-shirts</p>
          </Link>
          <Link className="linkTag" to="/men/trousers" onClick={closeSideMenu}>
            <p>trousers</p>
          </Link>
          <Link className="linkTag" to="/men/Dresses" onClick={closeSideMenu}>
            <p>suit</p>
          </Link>
          <Link className="linkTag" to="/men/Shoes" onClick={closeSideMenu}>
            <p>shoes</p>
          </Link>
        </div>
      </div>
      <div className="dropDownWoman">
        <Link className="linkTag" to="/women" onClick={closeSideMenu}>
          <h3>Woman</h3>
        </Link>
        <div className="dropDownWomanBox">
          <Link className="linkTag" to="/women/T-shirts" onClick={closeSideMenu}>
            <p>t-shirts</p>
          </Link>
          <Link className="linkTag" to="/women/trousers" onClick={closeSideMenu}>
            <p>trousers</p>
          </Link>
          <Link className="linkTag" to="/women/Dresses" onClick={closeSideMenu}>
            <p>dresses</p>
          </Link>
          <Link className="linkTag" to="/women/Shoes" onClick={closeSideMenu}>
            <p>shoes</p>
          </Link>
        </div>
      </div>
      <div className="dropDownAccessories">
        <Link className="linkTag" to="/unisex" onClick={closeSideMenu}>
          <h3>Accessories</h3>
        </Link>
      </div>
    </div>
  );
};

export default SidebarMenu;