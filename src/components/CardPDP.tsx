import React, { useEffect, useState } from "react";
import { Props } from "../interfaces/type";
import Buttontmg3 from "./Buttons/ButtonTmg3";

interface DefaultProps extends Props {
  category: string;
}

const CardPDP: React.FC<DefaultProps> = ({
  image,
  title,
  price,
  description,
  category = "",
  addToCart,
}: DefaultProps) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);
  const [errorSize, setErrorSize] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddToCart = () => {
    if (category.toLowerCase() === "shoes") {
      if (selectedNumber) {
        addToCart(selectedNumber);
      } else {
        setErrorSize(true);
        setTimeout(() => {
          setErrorSize(false);
        }, 3500);
      }
    } else if (category.toLowerCase() !== "accessories") {
      if (selectedSize) {
        addToCart(selectedSize);
      } else {
        setErrorSize(true);
        setTimeout(() => {
          setErrorSize(false);
        }, 3500);
      }
    } else {
      addToCart();
    }
  };

  return (
    <div className="containerCardPDP">
      <div className="wrapperImg">
        <div className="contentProducts">
          <div className="containerImgPDP">
            <img src={image} alt="" />
            <div className="containerPricePDP">
              <p>{price}€</p>
              <div className="buttonErrorPrice">
                <Buttontmg3
                  className="ButtonTmgCss3"
                  label={"add to cart"}
                  onClick={handleAddToCart}
                />
                {errorSize ? (
                  <span>
                    {category.toLowerCase() === "shoes"
                      ? "Select number please!"
                      : "Select size please!"}
                  </span>
                ) : null}
              </div>
            </div>
          </div>
          <div className="infoCardPDP">
            <h2 className="titleCardPDP">{title}</h2>
            <div className="detailsPDP">
              <h3>Description</h3>
              <p>{description}</p>
            </div>
            {category.toLowerCase() !== "shoes" &&
              category.toLowerCase() !== "accessories" && (
                <div className="sizeCard">
                  <h3>Size</h3>
                  <div className="sizeContainer">
                    <p
                      className={
                        selectedSize === "XS" ? "itemSizeOnActive" : "itemSize"
                      }
                      onClick={() => setSelectedSize("XS")}
                    >
                      XS
                    </p>
                    <p
                      className={
                        selectedSize === "S" ? "itemSizeOnActive" : "itemSize"
                      }
                      onClick={() => setSelectedSize("S")}
                    >
                      S
                    </p>
                    <p
                      className={
                        selectedSize === "M" ? "itemSizeOnActive" : "itemSize"
                      }
                      onClick={() => setSelectedSize("M")}
                    >
                      M
                    </p>
                    <p
                      className={
                        selectedSize === "L" ? "itemSizeOnActive" : "itemSize"
                      }
                      onClick={() => setSelectedSize("L")}
                    >
                      L
                    </p>
                    <p
                      className={
                        selectedSize === "XL" ? "itemSizeOnActive" : "itemSize"
                      }
                      onClick={() => setSelectedSize("XL")}
                    >
                      XL
                    </p>
                  </div>
                </div>
              )}
            {category.toLowerCase() === "shoes" && (
              <div className="numberSelect">
                <h3>Number</h3>
                <select
                  value={selectedNumber ?? ""}
                  onChange={(e) => setSelectedNumber(parseInt(e.target.value))}
                >
                  <option value="" disabled hidden>
                    Scegli la taglia
                  </option>
                  {[...Array(15).keys()].map((num) => (
                    <option key={num + 34} value={num + 34}>
                      {num + 34}
                    </option>
                  ))}
                </select>
              </div>
            )}
            {category.toLowerCase() !== "accessories" && (
              <div className="colorCard">
                <h3>Colors</h3>
                <div className="colorsContainer">
                  <div className="squareGreen"></div>
                  <div className="squareYellow"></div>
                  <div className="squareRed"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPDP;
