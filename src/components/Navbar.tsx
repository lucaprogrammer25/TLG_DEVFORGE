
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTypeSelector, useTypeDispatch } from "../redux/typeHooks";
import fetchDataContentful from "../redux/fetch/fetchContentful";
import { selectCartTotalQuantity } from "../redux/slice/cartSlice";
import SidebarMenu from "./SidebarMenu";
import { FormattedMessage } from "react-intl";
import { NavbarProps } from "../interfaces/type";
import getBase64FromUrl from "../hooks/imagesToString";
import DropdownItems from "./navbar/Dropdown";
import SidebarCart from "./SidebarCart";
import LanguageSelect from "./navbar/LanguageSelect";
import Promotion from "./navbar/Promotion";
import mobileLogo from "../assets/icons/OnlyLogo.png"
import hamburgerMenu from "../assets/icons/burger-menu.svg"
import hamburgerMenuClose from "../assets/icons/x-close.svg"
import shoppingBag from "../assets/icons/bag.svg";
import profile from "../assets/icons/profile.svg";
import language from "../assets/icons/world svg.svg";

const Navbar: React.FC<NavbarProps> = ({ changeLocale }) => {
    const [hiddenMen, setHiddenMen] = useState<boolean>(true);
    const [hiddenWomen, setHiddenWomen] = useState<boolean>(true);
    const [sidebarCartActive, setSidebarCartActive] = useState<boolean>(false);
    const [sidebarCartStyle, setSidebarCartStyle] = useState({ display: "none" });
    const [languageMenuVisible, setLanguageMenuVisible] = useState<boolean>(false);
    const cartTotalQuantity = useTypeSelector(selectCartTotalQuantity);
    
    const [sidebarMenuActive, setSidebarMenuActive] = useState<boolean>(false);
    const [sidebarMenuStyle, setSidebarMenuStyle] = useState({ right: "-100%"});
    const [sidebarMenuIcon, setSidebarMenuIcon] = useState(hamburgerMenu)

    const { data } = useTypeSelector((state) => state.contentful);
    
    
    const dispatch = useTypeDispatch();
    const logo = data.items && data.items[1]?.fields.logoNavbar.fields.file.url;
    const contents = data?.items?.[1]?.fields?.promotion ?? [];

    const [menDropdown, setMenDropdown] = useState<any[]>(() => {
        const storedMenDropdown = localStorage.getItem("menDropdown");
        return storedMenDropdown ? JSON.parse(storedMenDropdown) : [];
    });

    const [womenDropdown, setWomenDropdown] = useState<any[]>(() => {
        const storedWomenDropdown = localStorage.getItem("womenDropdown");
        return storedWomenDropdown ? JSON.parse(storedWomenDropdown) : [];
    });

    useEffect(() => {
        dispatch(fetchDataContentful());
    }, [dispatch])

    useEffect(() => {
        const saveImagesToLocalStorage = async () => {
            if (data?.items) {
                const menItems = data.items[1]?.fields?.menDropDown ?? [];
                const womenItems = data.items[1]?.fields?.womenDropDown ?? [];

                const menBase64Promises = menItems.map(async (item: any) => {
                    const base64 = await getBase64FromUrl(`https:${item.fields.file.url}`);
                    return { ...item, base64 };
                });

                const womenBase64Promises = womenItems.map(async (item: any) => {
                    const base64 = await getBase64FromUrl(`https:${item.fields.file.url}`);
                    return { ...item, base64 };
                });

                const menBase64Items = await Promise.all(menBase64Promises);
                const womenBase64Items = await Promise.all(womenBase64Promises);

                setMenDropdown(menBase64Items);
                setWomenDropdown(womenBase64Items);

                localStorage.setItem("menDropdown", JSON.stringify(menBase64Items));
                localStorage.setItem("womenDropdown", JSON.stringify(womenBase64Items));
            }
        };

        saveImagesToLocalStorage();
    }, [data]);

    const handleCartClick = () => {
        setSidebarCartActive((prevState) => !prevState);
        setSidebarCartStyle({ display: sidebarCartActive ? "none" : "unset" });
    };

    const handleSidebarCartClose = () => {
        setSidebarCartActive(false);
        setSidebarCartStyle({ display: "unset" });
    };
    const handleSidebarMenu = () => {
        if (!sidebarMenuActive) {
            setSidebarMenuActive(true);
            setSidebarMenuStyle({ right: "0"});
            setSidebarMenuIcon(hamburgerMenuClose)
        } else {
            setSidebarMenuActive(false);
            setSidebarMenuStyle({ right: "-100%"});
            setSidebarMenuIcon(hamburgerMenu)
        } ;
    };

    useEffect(() => {
        if (sidebarCartActive && cartTotalQuantity !== 0) {
            document.body.classList.add("sidebar-open");
        } else {
            document.body.classList.remove("sidebar-open");
        }
    }, [sidebarCartActive, cartTotalQuantity]);

    const handleLanguageChange = (newLocale: string) => {
        changeLocale(newLocale);
    };
    const handleCloseLanguageMenu = () => {
        setLanguageMenuVisible(false);
    };

    return (
        <>
            <Promotion contents={contents} />
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
                                <FormattedMessage id="men" defaultMessage="Men" />
                                {!hiddenMen && <div className="navbarHoverMen"><DropdownItems items={menDropdown} category="men" /></div>}
                            </div>
                        </Link>
                        <Link className="linkTag" to='/women'>
                            <div
                                className="navbarMenuItemWomen"
                                onMouseEnter={() => setHiddenWomen(false)}
                                onMouseLeave={() => setHiddenWomen(true)}
                            >
                                <FormattedMessage id="women" defaultMessage="Women" />
                                {!hiddenWomen && <div className="navbarHoverWomen"><DropdownItems items={womenDropdown} category="women" /></div>}
                            </div>
                        </Link>
                        <Link className="linkTag" to='/unisex'>
                            <div className="navbarMenuItemAccessories">
                                <p className="navbarMenuItemAccessoriesTitle">
                                    <FormattedMessage id="accessories" defaultMessage="Accessories" />
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div className="navbarServiceMenu">
                        <div className="navbarServiceMenuLanguage" onClick={() => setLanguageMenuVisible(!languageMenuVisible)}>
                            <img src={language} alt="language-icon" />
                        </div>
                        {languageMenuVisible && <LanguageSelect handleLanguageChange={handleLanguageChange} handleCloseMenu={handleCloseLanguageMenu}/>}
                        <div className="navbarServiceMenuProfile">
                            <img src={profile} alt="profile-icon" />
                        </div>
                        <div className="navbarServiceMenuCart">
                            <img src={shoppingBag} alt="cart-icon" onClick={handleCartClick} />
                            <span>{`('${cartTotalQuantity}')`}</span>
                        </div>
                    </div>
                </div>
            </nav>
                    {/* MOBILE MENU  */}
                    <div className="mobileBar">
                        <div className="mobileBarLogoContainer">
                            <Link className="linkTag" to='/'>
                                <img className="mobileBarLogo" src={logo} alt="the modern boutique logo" />
                                <img className="mobileBarLogo600px" src={mobileLogo} alt="TMB" />
                            </Link>
                        </div>
                        <div className="mobileBarServiceMenu">
                            <div className="mobileBarServiceMenuLanguage" onClick={() => setLanguageMenuVisible(!languageMenuVisible)}>
                            <img src={language} alt="language-icon" />
                            {languageMenuVisible && <LanguageSelect handleLanguageChange={handleLanguageChange} handleCloseMenu={handleCloseLanguageMenu}/>}
                            </div>
                            <div className="mobileBarServiceMenuProfile">
                                <img src={profile} alt="profile-icon" />
                            </div>
                            <div className="mobileBarServiceMenuCart">
                                <img src={shoppingBag} alt="cart-icon" onClick={handleCartClick} />
                                <span>{`('${cartTotalQuantity}')`}</span>
                            </div>
                            <div className="hamburgerLogoContainer" onClick={handleSidebarMenu}>
                                <img src={sidebarMenuIcon} alt={hamburgerMenu} className="hamburgerLogo"/>
                            </div>
                        </div>

                    </div>

            {cartTotalQuantity !== 0 ?
                <div className={`sidebarCart ${!sidebarCartActive ? "inactive" : sidebarCartActive ? "active" : ""}`} style={sidebarCartStyle}>
                    <SidebarCart closeSideCart={handleSidebarCartClose} />
                </div> : null
            }
            <div className="sidebarBox" style={sidebarMenuStyle}>
                <SidebarMenu closeSideMenu={handleSidebarMenu}/>
            </div>

        </>
    );
};

export default Navbar;




