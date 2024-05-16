import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTypeSelector, useTypeDispatch } from "../redux/typeHooks";
import fetchDataContentful from "../redux/fetchContentful";
import shoppingBag from "../assets/icons/bag.svg"
import profile from "../assets/icons/profile.svg"
import SidebarCart from "./SidebarCart";
import { selectCartTotalQuantity } from "../redux/cartSlice";

const Navbar: React.FC = () => {
    const [hiddenMen, setHiddenMen] = useState<boolean>(true);
    const [hiddenWomen, setHiddenWomen] = useState<boolean>(true);
    const [contentIndex, setContentIndex] = useState<number>(0);
    const [visible, setVisible] = useState<boolean>(true);
    const [animateContent, setAnimateContent] = useState<boolean>(false);
    const [sidebarCartActive, setSidebarCartActive] = useState<boolean>(false);
    const [sidebarCartStyle, setSidebarCartStyle] = useState({ display: "none" });
    const cartTotalQuantity = useTypeSelector(selectCartTotalQuantity);

    const { data } = useTypeSelector((state) => state.contentful)
    const dispatch = useTypeDispatch();
    const logo =  data.items && data.items[2]?.fields.logoNavbar.fields.file.url
    const contents = data?.items?.[2]?.fields?.promotion ?? [];
    const menDropdown = data?.items?.[2]?.fields?.menDropDown ?? [];
    const womenDropdown = data?.items?.[2]?.fields?.womenDropDown ?? [];

    const WomenDropdownItems = womenDropdown.map((item: any, index: number) => (
        <Link to={`women/${item.fields.description}`} key={index}>
            <div className={`navbarHoverWomen${item.fields.name}`}>
                <h1>{item.fields.name}</h1>
                <img className="navbarHoverImage" src={item.fields.file.url} alt={item.fields.name} />
            </div>
        </Link>
    ));
    
    const MenDropdownItems = menDropdown.map((item:any, index:number) => (
        <Link to={`men/${item.fields.description}`} key={index}>
            <div className={`navbarHoverMen${item.fields.name}`}>
                <h1>{item.fields.name}</h1>
                <img className="navbarHoverImage" src={item.fields.file.url} alt={item.fields.name} />
            </div>
        </Link>
    ));

    useEffect(() => {
        dispatch(fetchDataContentful())     
    }, [dispatch])
    
    const handleClose = () => {
        setVisible(false);
    };

    const handleCartClick = () => {
        setSidebarCartActive(prevState => !prevState);
        if (sidebarCartActive) {
            setSidebarCartStyle({ display: "none" });
        } else {
            setSidebarCartStyle({ display: "unset" });
        }
    };
    
    const handleSidebarCartClose = () => {
        setSidebarCartActive(false);
        setSidebarCartStyle({ display: "unset" });
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setContentIndex((prevIndex) => (prevIndex + 1) % contents.length);
            setAnimateContent(true);
            setTimeout(() => setAnimateContent(false), 4000);
        }, 6000);
        return () => clearInterval(interval);
    }, [contents]);


    return (
        <>
            {visible && (
                <div className="navbarPromotion">
                    <span className={`navbarPromotionContent ${animateContent ? 'fadeIn' : ''}`}>
                        {contents[contentIndex]}
                    </span>
                    <button className="navbarPromotionButton" onClick={handleClose}>X</button>
                </div>
            )}
            <nav>
                <div className="navbar">
                    <div className="navbarLogoContainer">
                        <Link className="linkTag" to='/'>
                        <img className="navbarLogo" src={logo} alt="the modern boutique logo" />
                        </Link>
                    </div>
                    <div className="navbarMenuItem">
                        <Link className="linkTag" to='/men'>
                            <div
                                className="navbarMenuItemMen"
                                onMouseEnter={() => setHiddenMen(false)}
                                onMouseLeave={() => setHiddenMen(true)}
                            >
                                Men
                                {!hiddenMen && <div className="navbarHoverMen">{MenDropdownItems}</div>}
                            </div>
                        </Link> 
                        <Link className="linkTag" to='/women'>
                        <div className="navbarMenuItemWomen"
                            onMouseEnter={() => setHiddenWomen(false)}
                            onMouseLeave={() => setHiddenWomen(true)}
                        >
                            Women
                            {!hiddenWomen && <div className="navbarHoverWomen">{WomenDropdownItems}</div>}
                        </div>
                        </Link>
                        <Link className="linkTag" to='/accessories'>
                        <div className="navbarMenuItemAccessories">
                            <p className="navbarMenuItemAccessoriesTitle">
                                Accessories
                            </p>
                        </div>
                        </Link>
                    </div>
                    <div className="navbarServiceMenu">
                        <div className="navbarServiceMenuProfile">
                            <img src={profile} alt="profile-icon" />
                        </div>
                        <div className="navbarServiceMenuCart">
                            <img src={shoppingBag} alt="cart-icon" onClick={handleCartClick} />
                            <span>{`('${cartTotalQuantity}')`}</span>
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
            { cartTotalQuantity !== 0 ?
                <div className={`sidebarCart ${ !sidebarCartActive ? "inactive" : sidebarCartActive ? "active"  : "" }`} style={sidebarCartStyle}>
                <SidebarCart label="CLOSE" closeSideCart={handleSidebarCartClose} />
            </div> : null
            }
            
        </>
    );
};

export default Navbar;
