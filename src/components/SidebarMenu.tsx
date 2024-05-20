import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";



const SidebarMenu = () => {  

    return (
        <div className="sidebarMenuDropdown">
          <div className="dropDownMan">
            <Link className="linkTag" to="/man">
              <h3>Man</h3>
            </Link>
            <div className="dropDownManBox">
              <Link className="linkTag" to={`/man/t-shirts`}>
                <p>t-shirts</p>
              </Link>
              <Link className="linkTag" to={`/man/trousers`}>
                <p>trousers</p>
              </Link>
              <Link className="linkTag" to={`/man/suit`}>
                <p>suit</p>
              </Link>
              <Link className="linkTag" to={`/man/shoes`}>
                <p>shoes</p>
              </Link>
            </div>
          </div>
          <div className="dropDownWoman">
            <Link className="linkTag" to="/woman">
              <h3>Woman</h3>
            </Link>
            <div className="dropDownWomanBox">
              <Link className="linkTag" to={`/woman/t-shirts`}>
                <p>t-shirts</p>
              </Link>
              <Link className="linkTag" to={`/woman/trousers`}>
                <p>trousers</p>
              </Link>
              <Link className="linkTag" to={`/woman/dresses`}>
                <p>dresses</p>
              </Link>
              <Link className="linkTag" to={`/woman/shoes`}>
                <p>shoes</p>
              </Link>
            </div>
          </div>
          <div className="dropDownAccessories">
            <Link className="linkTag" to="/accessories">
              <h3>Accessories</h3>
            </Link>
          </div>
        </div>
      );
    }

export default SidebarMenu;