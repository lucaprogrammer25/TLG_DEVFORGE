import { useTypeDispatch, useTypeSelector } from "../../redux/typeHooks";
import fetchDataContentful from "../../redux/fetch/fetchContentful";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Content = () => {
    const { data } = useTypeSelector((state) => state.contentful);
    const dispatch = useTypeDispatch();
    const [hovered, setHovered] = useState("");
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

    const logoMen = data.items && data.items[3].fields.maleImage.fields.file.url;
    const logoWomen = data.items && data.items[3].fields.womenImage.fields.file.url;

    useEffect(() => {
        dispatch(fetchDataContentful());
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 600);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [dispatch]);

    return (
        <>
        <h2 className="TitleHomePage">TMB COLLECTIONS </h2>
            <div className="contentImages">
                <div className="contentMen" onMouseEnter={() => setHovered("men")} onMouseLeave={() => setHovered("")}>
                    <Link to="/men">
                        <img src={logoMen} alt="Men Clothes" />
                    </Link>
                    {(isMobile || hovered === "men") && (
                        <div className="tooltip top-left">Men Collection</div>
                    )}
                </div>
                <div className="contentWomen" onMouseEnter={() => setHovered("women")} onMouseLeave={() => setHovered("")}>
                    <Link to="/women">
                        <img src={logoWomen} alt="Women Clothes" />
                    </Link>
                    {(isMobile || hovered === "women") && (
                        <div className="tooltip top-right">Women Collection</div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Content;
