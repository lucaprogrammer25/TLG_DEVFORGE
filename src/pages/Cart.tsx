import React, { useEffect, useState } from 'react';
import { useTypeDispatch, useTypeSelector } from '../redux/typeHooks';
import { addToCart, clearCart, decrease, removeFromCart, selectCartDiscount, selectCartTotalPrice, selectCartTotalQuantity } from '../redux/slice/cartSlice';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import fetchDataContentful from "../redux/fetch/fetchContentful";
import trashCanIcon from "../assets/icons/trash-can-svgrepo-com.svg"
import ShipmentForm from '../components/Forms/Shipment';
import Buttontmg3 from '../components/Buttons/ButtonTmg3';
import PromoComponent from '../components/PromoComponent';

interface Props {}

const Cart: React.FC<Props> = () => {
  const [shipment, setShipment] = useState(false);
  const [showPromo, setShowPromo] = useState(false);

  const cartTotalQuantity = useTypeSelector(selectCartTotalQuantity);
  const cartTotalPrice = useTypeSelector(selectCartTotalPrice);
  const discountTotalPrice = useTypeSelector(selectCartDiscount);
  const discountTotalPriceNumber = Number(discountTotalPrice)
  console.log(discountTotalPrice);
  
  const dispatch = useTypeDispatch();
  const navigate = useNavigate();

  const { cartItems } = useTypeSelector((state) => state.cart);

  const { data } = useTypeSelector((state) => state.contentful);

  const logo = data.items && data.items[4]?.fields.logoNavbar.fields.file.url;

  useEffect(() => {
    dispatch(fetchDataContentful());
  }, [dispatch]);

  useEffect(() => {
    if (discountTotalPriceNumber !== 0) {
      setShowPromo(true);
      const timer = setTimeout(() => {
        setShowPromo(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [discountTotalPriceNumber]);

  const handleClickShipment = () => {
    setShipment(true);
  };

  const shipmentValue: any = cartItems.map((item) => {
    return item.shipment;
  });

const totalPrice = Number(shipmentValue[0]) == 10 ? (Number(cartTotalPrice) + Number(shipmentValue[0])).toFixed(2): cartTotalPrice;
const yourCartPrice = (Number(totalPrice) + discountTotalPriceNumber).toFixed(2)



  return (
    <>
      <div className='containerCart'>
        <div className='wrapperButtonPLP'>
          <img onClick={() => navigate("/")} className='logoCart' src={logo} alt="" />
          <span onClick={() => navigate("/")} >{`< Go to back`}</span>
        </div>
        <div className='wrapperTitleCart'>
          <div className='titleCart'>
            <h3><FormattedMessage id='carts' defaultMessage="Cart" /></h3>
            <h3><FormattedMessage id='item' defaultMessage="Items" /> ({cartTotalQuantity})</h3>
          </div>
          <img onClick={() => dispatch(clearCart())} src={trashCanIcon} alt="icon trash can" />
        </div>
        {cartTotalQuantity !== 0 ? (
          <div className='productMenu'>
            <div className='wrapperProduct'>
              <div className='containerProduct'>
                {cartItems.map((item, index) => (
                  <div className='product' key={`${item.id}-${index}`}>
                    <img src={item.image} alt={item.name} />
                    <div className='wrapperInfoProduct'>
                      <div className='infoProduct'>
                        <span>{item.name}</span>
                        <span>Size: {item.size}</span>
                        <span>${item.price}</span>
                      </div>
                      <div className='quantityProduct'>
                        <div className='buttonCart'>
                          <button onClick={() => dispatch(decrease(item))} className="cartButton"><span>-</span></button>
                          <span>{item.quantity}</span>
                          <button onClick={() => dispatch(addToCart(item))} className="cartButton"><span>+</span></button>
                        </div>
                        <button className='cartButton' onClick={() => dispatch(removeFromCart(item))}><FormattedMessage id="remove" defaultMessage="Remove" /></button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className='containerPayment'>
                <div className='totalContainer'>
                  <span><FormattedMessage id='summary' defaultMessage="Summary" /></span>
                  <div className='containerCartPrice'>
                    <span><FormattedMessage id="your cart" defaultMessage="Your Cart" /></span>
                    <span>${yourCartPrice}</span>
                  </div>
                  {shipmentValue[0] === 10 ? (
                    <div className='containerCartPrice'>
                      <span><FormattedMessage id="shippingt" defaultMessage="Shipping" /></span>
                      <span>${shipmentValue[0]}</span>
                    </div>) : null
                  }
                  {discountTotalPriceNumber !== 0 ? (
                    <div className='containerCartPrice'>
                      <span><FormattedMessage id="discount" defaultMessage="Discount" /></span>
                      <span>{`-$${discountTotalPriceNumber}`}</span>
                    </div>) : null
                  }
                  <hr />
                  <div className='containerCartPrice'>
                    <span><FormattedMessage id="total price" defaultMessage="Total Price:" /></span>
                    <span>${totalPrice}</span>
                  </div>
                </div>
                <Buttontmg3 className='buttonBlackPWhite' label='go to checkout' onClick={handleClickShipment} />
                {shipment ? <ShipmentForm /> : null}
              </div>
            </div>
            <div>
            </div>
          </div>) : <h3 className='goBackButton'><FormattedMessage id="go back to shopping" defaultMessage="Go back to shopping" /></h3>
        }
      </div>
      <div className={`promoContainer ${showPromo ? 'active' : 'inactive'}`}>
        {discountTotalPriceNumber !== 0 && <PromoComponent />}
      </div>
    </>
  );
};

export default Cart;
