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
<<<<<<< HEAD
            setAnimateContent(true);
            setTimeout(() => setAnimateContent(false), 4000);
        }, 6000);
=======
        }, 5000);

>>>>>>> develop
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
<<<<<<< HEAD
                    <div className="navbarLogoContainer">
                        <img className="navbarLogo" src={logo} alt="the modern boutique logo" />
=======
                    <div className="navbarLogo">
                       <Link to="/"><img src="logo.png" alt="the modern boutique logo" /></Link> 
>>>>>>> develop
                    </div>
                    <div className="navbarTitleName">
                        <h1>TMB</h1>
                        <h3 className="navbarTitleNameSubTitle">The modern boutique</h3>
                    </div>
                    <div className="navbarMenuItem">
<<<<<<< HEAD
                        <div
                            className="navbarMenuItemMen"
                            onMouseEnter={() => setHiddenMen(false)}
                            onMouseLeave={() => setHiddenMen(true)}
                        >
                            Men
                            {!hiddenMen && <div className="navbarHoverMen">{MenDropdownItems}</div>}
=======
                   
                      <div className="navbarMenuItemMen"
                            onMouseEnter={() => setHiddenMen(false)}
                            onMouseLeave={() => setHiddenMen(true)}
                        > 
                        <Link className="linkTag" to="/men">  
                           <span>Men</span>
                           </Link>
                            {hiddenMen ? null :
                                <div className="navbarHoverMen">
                                    <Link className="linkTag" to="/men/T-shirts">  
                                    <div className="navbarHoverMenShirt">
                                       <img src="" alt="Men-tshirt" />
                                        <p>
                                            Shirt 
                                        </p>
                                    </div>
                                    </Link>
                                    <Link className="linkTag" to="/men/trousers">
                                    <div className="navbarHoverMenTrousers">
                                        <h1>
                                           Trousers
                                        </h1>
                                        {/* <Link to="/menTrousers" > */}<img src="" alt="Men-Trousers" />{/* </Link> */}
                                    </div></Link> 
                                        <Link className="linkTag" to="/men/Dresses">
                                    <div className="navbarHoverMenDresses">
                                        <h1>
                                            {/* <Link to="/menDress"> */}Dress {/* </Link> */}
                                        </h1>
                                        {/* <Link to="/menDress" > */}<img src="" alt="Men-Dress" />{/* </Link> */}
                                    </div>
                                    </Link>
                                    <Link className="linkTag" to="/men/shoes">
                                    <div className="navbarHoverMenShoes">

                                        <h1>
                                            {/* <Link to="/menShoes" > */}<img src="" alt="Men-Shoes" />{/* </Link> */}
                                        </h1>
                                        {/* <Link to="/menShoes" > */}<img src="" alt="Men-tshoes" />{/* </Link> */}
                                    </div>
                                    </Link>
                                </div>}
>>>>>>> develop
                        </div>
                        
                        
                        <div className="navbarMenuItemWomen"
                            onMouseEnter={() => setHiddenWomen(false)}
                            onMouseLeave={() => setHiddenWomen(true)}
                        >
<<<<<<< HEAD
                            Women
                            {!hiddenWomen && <div className="navbarHoverWomen">{WomenDropdownItems}</div>}
=======
                            <Link className="linkTag" to="/women">
                            <span>Women</span>
                            </Link>
                            {hiddenWomen ? null :
                                <div className="navbarHoverWomen">
                                    <Link className="linkTag" to="/women/T-shirts">
                                    <div className="navbarHoverWomenShirt">

                                        <h1>
                                          shirt
                                        </h1>
                                       <img src="" alt="Women-tshirt" />

                                    </div>
                                    </Link>
                                    <Link className="linkTag" to="/women/trousers">
                                    <div className="navbarHoverWomenTrousers">
                                        {/* <Link to={"trousers"}/> */}
                                        <h1>
                                            {/* <Link to="/womenTrousers"> */}Trousers {/* </Link> */}
                                        </h1>
                                        {/* <Link to="/menShirt" > */}<img src="" alt="Women-trousers" /> {/* </Link> */}

                                    </div>
                                    </Link>
                                    <Link className="linkTag" to="/women/dresses">
                                    <div className="navbarHoverWomenDresses">
                                        {/* <Link to={"dress"}/> */}
                                        <h1>
                                            {/* <Link to="/womenDress"> */}Dress {/* </Link> */}
                                        </h1>
                                        {/* <Link to="/menDress" > */}<img src="" alt="Women-Dress" /> {/* </Link> */}
                                    </div>
                                    </Link>
                                    <Link className="linkTag" to="/women/shoes">
                                    <div className="navbarHoverWomenShoes">
                                        {/* <Link to={"shoe"}/> */}
                                        <h1>
                                            {/* <Link to="/womenShoe"> */}Shoe {/* </Link> */}
                                        </h1>
                                        {/* <Link to="/menShoe" > */}<img src="" alt="Women-shoe" /> {/* </Link> */}
                                    </div>
                                    </Link>
                                </div>}

>>>>>>> develop
                        </div>
                      
                        <Link className="linkTag" to="/accessories"> 
                        <div className="navbarMenuItemAccessories">
                            <p className="navbarMenuItemAccessoriesTitle">
                            
                                <span>Accessories</span>
                       
                            </p>
                        </div>
                        </Link>
                    </div>
                    <div className="navbarServiceMenu">
<<<<<<< HEAD
                        <div className="navbarServiceMenuProfile">
                            <img src={profile} alt="profile-icon" />
=======
                        <Link to="/login"><div className="navbarServiceMenuProfile">
                            <img src={profile} alt="" />
>>>>>>> develop
                        </div>
                        </Link>
                        <Link to="/cart">
                        <div className="navbarServiceMenuCart">
                            <img src={shoppingBag} alt="cart-icon" />
                            <span>(`{/* ${counter} */}0`)</span>
                        </div>
                        </Link>
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
