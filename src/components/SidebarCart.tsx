import React from 'react';
import { useTypeDispatch, useTypeSelector } from '../redux/typeHooks';
import { addToCart, decrease, removeFromCart, selectCartTotalPrice, selectCartTotalQuantity } from '../redux/slice/cartSlice';
import { SidebarCartType } from '../interfaces/type';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import Buttontmg3 from './Buttons/ButtonTmg3';
import iconP from '../assets/icons/iconP.svg'
import iconPaypal from '../assets/icons/iconPaypal.svg'


const SidebarCart: React.FC<SidebarCartType> = ({ closeSideCart}:SidebarCartType) => {
  const cartTotalQuantity = useTypeSelector(selectCartTotalQuantity);
  const CartTotalPrice = useTypeSelector(selectCartTotalPrice)
  const { cartItems } = useTypeSelector((state) => state.cart);
  const dispatch = useTypeDispatch()
  const navigate = useNavigate()

  const handleClickCheckout = () => {
    navigate("/cart")
  }

  
  return (
    <>
      <div className='titleSidebar'>
        <p><FormattedMessage id="cart" defaultMessage="Shopping cart"/> {`(${cartTotalQuantity})`}</p>
        <p onClick={closeSideCart}><FormattedMessage id="close" defaultMessage="Close"/></p>
      </div>
      <div className='contentCart'>
          {cartItems.map((item) => (
            <div key={item.id} className='boxProduct'> 
              <img src={item.image} alt="cart product" />
              <div className='productDetails'>
                <div>
              <p>{item.name}</p>
              <p>{item.price}</p>
              </div>
              <div className='wrapperOptionsCart'>
              <div className='cartDetail'>
                <button onClick={() => dispatch(decrease(item))} className="cartButton">-</button>
                <p>{item.quantity}</p>
                <button onClick={() => dispatch(addToCart(item))} className="cartButton">+</button>
              </div>
              <button className='cartButton' onClick={() => dispatch(removeFromCart(item))}><FormattedMessage id="remove" defaultMessage="Remove"/></button>
              </div>
              </div>
            </div>
          ))}
      </div>
      <div className='totalPrice'>
      <p><FormattedMessage id="total" defaultMessage="Total"/></p>
      <p>{`$${CartTotalPrice}`}</p>
      </div>
          <Buttontmg3 label={"go to checkout"} classButton="ButtonTmgCss3"onClick={handleClickCheckout} />
          <div className='buttonPaypal'>
            <img src={iconP} alt="" />
            <img src={iconPaypal} alt="" />
          </div>
    </>
  );
};

export default SidebarCart;
