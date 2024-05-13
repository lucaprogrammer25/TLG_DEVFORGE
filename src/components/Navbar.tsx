import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTypeSelector, useTypeDispatch } from "../redux/typeHooks"
import fetchDataContentful from "../redux/fetchContentful";
import shoppingBag from "../assets/icons/bag.svg"
import profile from "../assets/icons/profile.svg"

const Navbar: React.FC = () => {
    const [hiddenMen, setHiddenMen] = useState<boolean>(true);
    const [hiddenWomen, setHiddenWomen] = useState<boolean>(true);
    const [contentIndex, setContentIndex] = useState<number>(0);
    const [visible, setVisible] = useState<boolean>(true);
    const [animateContent, setAnimateContent] = useState<boolean>(false);

    const { data } = useTypeSelector((state) => state.contentful)
    const dispatch = useTypeDispatch();

    const logo =  data.items && data.items[2]?.fields.logoNavbar.fields.file.url
    const contents = data?.items?.[2]?.fields?.promotion ?? [];
    const menDropdown = data?.items?.[2]?.fields?.menDropDown ?? [];
    const womenDropdown = data?.items?.[2]?.fields?.womenDropDown ?? [];
    /* console.log(data?.items?.[2].fields.menDropDown); */
    

    const WomenDropdownItems = womenDropdown.map((item: any, index: number) => (
        <div key={index} className={`navbarHoverWomen${item.fields.name}`}>
            <Link to={"/"} />
            <h1>{item.fields.name}</h1>
            <img className="navbarHoverImage" src={item.fields.file.url} alt={item.fields.name} />
        </div>
    ));
    const MenDropdownItems = menDropdown.map((item:any, index:number) => (
        <div key={index} className={`navbarHoverMen${item.fields.name}`}>
            <Link to={"/"} />
            <h1>{item.fields.name}</h1>
            <img className="navbarHoverImage" src={item.fields.file.url} alt={item.fields.name} />
        </div>
    ));

    useEffect(() => {
        dispatch(fetchDataContentful())     
    }, [dispatch])
    
    const handleClose = () => {
        setVisible(false);
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
                        <img className="navbarLogo" src={logo} alt="the modern boutique logo" />
                    </div>
                    <div className="navbarTitleName">
                        <h1>TMB</h1>
                        <h3 className="navbarTitleNameSubTitle">The modern boutique</h3>
                    </div>
                    <div className="navbarMenuItem">
                        <div
                            className="navbarMenuItemMen"
                            onMouseEnter={() => setHiddenMen(false)}
                            onMouseLeave={() => setHiddenMen(true)}
                        >
                            Men
                            {!hiddenMen && <div className="navbarHoverMen">{MenDropdownItems}</div>}
                        </div>
                        <div className="navbarMenuItemWomen"
                            onMouseEnter={() => setHiddenWomen(false)}
                            onMouseLeave={() => setHiddenWomen(true)}
                        >
                            Women
                            {!hiddenWomen && <div className="navbarHoverWomen">{WomenDropdownItems}</div>}
                        </div>
                        <div className="navbarMenuItemAccessories">
                            <p className="navbarMenuItemAccessoriesTitle">
                                {/* <Link to="/accessories"> */}Accessories {/* </Link> */}
                            </p>
                        </div>
                    </div>
                    <div className="navbarServiceMenu">
                        <div className="navbarServiceMenuProfile">
                            <img src={profile} alt="profile-icon" />
                        </div>
                        <div className="navbarServiceMenuCart">
                            <img src={shoppingBag} alt="cart-icon" />
                            <span>(`{/* ${counter} */}0`)</span>
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
