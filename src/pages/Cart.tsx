import React, { useState } from "react";
import "../style/Cart/Cart.scss";
import ShippingAddressForm from "./ShippingInfo";
import "../style/ButtonsSCSS/ButtonTmg3.scss";

const CartApp: React.FC = () => {
  const [activeTabs, setActiveTabs] = useState<string[]>(["Cart"]);

  const handleGoToShippingInfo = () => {
    setActiveTabs(["Cart", "Shipping info"]);
  };

  const handleGoToCheckout = () => {
    setActiveTabs(["Cart", "Shipping info", "Checkout"]);
  };

  const handleBackToProduct = () => {
    setActiveTabs(["Cart"]);
  };

  const handleBackToShippingAddress = () => {
    setActiveTabs(["Cart", "Shipping info"]);
  };

  return (
    <div className="tabs-horizontal">
      <div className="tabs">
        <div
          className={`ButtonTmgCss3 ${
            activeTabs.includes("Cart") ? "active" : ""
          }`}
          onClick={() => setActiveTabs(["Cart"])}
        >
          1. Cart
        </div>
        <div
          className={`ButtonTmgCss3 ${
            activeTabs.includes("Shipping info") ? "active" : ""
          }`}
          onClick={handleGoToShippingInfo}
        >
          2. Shipping info
        </div>
        <div
          className={`ButtonTmgCss3 ${
            activeTabs.includes("Checkout") ? "active" : ""
          }`}
          onClick={handleGoToCheckout}
        >
          3. Checkout
        </div>
      </div>

      <div className="tab-content">
        {activeTabs.includes("Cart") && (
          <div className="tab-cart">
            <div className="CheckoutTabPage">
              <div>Carrello (1 prodotto)</div>
              <table>
                <thead>
                  <tr>
                    <th>PRODUCT</th>
                    <th>QUANTITY</th>
                    <th>PRICE</th>
                    <th>TOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>Prodotti scelti</td>
                    <td>Quantità prodotti</td>
                    <td> wdw</td>
                    <td>Totale</td>
                  </tr>
                </tbody>
              </table>
              <div className="buttonsTabs">
                <button
                  className="ButtonTmgCss3"
                  onClick={handleGoToShippingInfo}
                >
                  Go to Address
                </button>
              </div>
            </div>
          </div>
        )}
        {activeTabs.includes("Shipping info") && (
          <div className="CheckoutTabPage">
            <div>Shipping Information Content</div>
            <ShippingAddressForm />
            <div className="buttonsTabs">
              <button className="ButtonTmgCss3" onClick={handleBackToProduct}>
                Back to Product
              </button>
              <button className="ButtonTmgCss3" onClick={handleGoToCheckout}>
               Got Pay
              </button>
            </div>
          </div>
        )}
        {activeTabs.includes("Checkout") && (
          <div className="CheckoutTabPage">
            <div>Checkout Content</div>
            <div className="buttonsTabs">
              <button className="ButtonTmgCss3" onClick={handleBackToProduct}>
              Back to Product
              </button>
              <button
                className="ButtonTmgCss3"
                onClick={handleBackToShippingAddress}
              >
                Back to Address
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartApp;
