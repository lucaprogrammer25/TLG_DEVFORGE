import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import shoppingBag from "../assets/icons/shopping-bag.svg"
import profile from "../assets/icons/profile.svg"

const Navbar: React.FC = () => {
    const [hiddenMen, setHiddenMen] = useState<boolean>(true);
    const [hiddenWomen, setHiddenWomen] = useState<boolean>(true);
    const [contentIndex, setContentIndex] = useState<number>(0);
    const [visible, setVisible] = useState<boolean>(true);
    const contents = ["New offer buy a minimun of 3 items and if the amount is above 1000$ the 2 lowest are free", "Look up our new summer collection available in the mordern botique store", "Free shipping and deliviries for orders above 2000$"]

    const handleClose = () => {
        setVisible(false);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setContentIndex((prevIndex) => (prevIndex + 1) % contents.length);
        }, 5000);
        
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {visible && (
                <div className="navbarPromotion">
                    <span className="navbarPromotionContent">{contents[contentIndex]}</span>
                    <button className="navbarPromotionButton" onClick={handleClose}>X</button>
                </div>
            )}
            <nav>
                <div className="navbar">
                    <div className="navbarLogo">
                        <img src="logo.png" alt="the modern boutique logo" />
                    </div>
                    <div className="navbarTitleName">
                        <h1>TMB</h1>
                        <h3 className="navbarTitleNameSubTitle">The modern boutique</h3>
                    </div>
                    <div className="navbarMenuItem">
                        <div className="navbarMenuItemMen"
                            onMouseEnter={() => setHiddenMen(false)}
                            onMouseLeave={() => setHiddenMen(true)}
                        >
                            Men
                            {hiddenMen ? null :
                                <div className="navbarHoverMen">
                                    <div className="navbarHoverMenShirt">
                                        {/* <Link to="/menShirt" > */}<img src="" alt="Men-tshirt" />{/* </Link> */}
                                        <p>
                                            {/* <Link to="/menShirt"> */}Shirt {/* </Link> */}
                                        </p>
                                    </div>
                                    <div className="navbarHoverMenTrousers">
                                        <Link to={"trousers"} />
                                        <h1>
                                            {/* <Link to="/menTrousers"> */}Trousers{/* </Link> */}
                                        </h1>
                                        {/* <Link to="/menTrousers" > */}<img src="" alt="Men-Trousers" />{/* </Link> */}
                                    </div>
                                    <div className="navbarHoverMenDresses">
                                        <Link to={"dress"} />
                                        <h1>
                                            {/* <Link to="/menDress"> */}Dress {/* </Link> */}
                                        </h1>
                                        {/* <Link to="/menDress" > */}<img src="" alt="Men-Dress" />{/* </Link> */}
                                    </div>
                                    <div className="navbarHoverMenShoes">

                                        <h1>
                                            {/* <Link to="/menShoes" > */}<img src="" alt="Men-Shoes" />{/* </Link> */}
                                        </h1>
                                        {/* <Link to="/menShoes" > */}<img src="" alt="Men-tshoes" />{/* </Link> */}
                                    </div>
                                </div>}
                        </div>
                        <div className="navbarMenuItemWomen"
                            onMouseEnter={() => setHiddenWomen(false)}
                            onMouseLeave={() => setHiddenWomen(true)}
                        >
                            Women
                            {hiddenWomen ? null :
                                <div className="navbarHoverWomen">
                                    <div className="navbarHoverWomenShirt">

                                        <h1>
                                            {/* <Link to="/womenShirt"> */}shirt {/* </Link> */}
                                        </h1>
                                        {/* <Link to="/menShirt" > */}<img src="" alt="Women-tshirt" />{/* </Link> */}

                                    </div>
                                    <div className="navbarHoverWomenTrousers">
                                        {/* <Link to={"trousers"}/> */}
                                        <h1>
                                            {/* <Link to="/womenTrousers"> */}Trousers {/* </Link> */}
                                        </h1>
                                        {/* <Link to="/menShirt" > */}<img src="" alt="Women-trousers" /> {/* </Link> */}

                                    </div>
                                    <div className="navbarHoverWomenDresses">
                                        {/* <Link to={"dress"}/> */}
                                        <h1>
                                            {/* <Link to="/womenDress"> */}Dress {/* </Link> */}
                                        </h1>
                                        {/* <Link to="/menDress" > */}<img src="" alt="Women-Dress" /> {/* </Link> */}
                                    </div>
                                    <div className="navbarHoverWomenShoes">
                                        {/* <Link to={"shoe"}/> */}
                                        <h1>
                                            {/* <Link to="/womenShoe"> */}Shoe {/* </Link> */}
                                        </h1>
                                        {/* <Link to="/menShoe" > */}<img src="" alt="Women-shoe" /> {/* </Link> */}
                                    </div>
                                </div>}

                        </div>
                        <div className="navbarMenuItemAccessories">
                            <p className="navbarMenuItemAccessoriesTitle">
                                {/* <Link to="/accessories"> */}Accessories {/* </Link> */}
                            </p>
                        </div>
                    </div>
                    <div className="navbarServiceMenu">
                        <div className="navbarServiceMenuProfile">
                            <img src={profile} alt="" />
                        </div>
                        <div className="navbarServiceMenuCart">
                            <img src={shoppingBag} alt="SVG Image" />
                        </div>
                    </div>
                    {/* MOBILE MENU  */}
                    <div className="container">
                        <input type="checkbox" id="checkbox3" aria-label="checkbox" className="visuallyHidden" />
                        <label htmlFor="checkbox3">
                            <div className="hamburger">
                                <span className="barBar1"></span>
                                <span className="barBar2"></span>
                                <span className="barBar3"></span>
                                <span className="barBar4"></span>
                            </div>
                        </label>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
