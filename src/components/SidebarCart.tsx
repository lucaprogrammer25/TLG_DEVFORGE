import React from 'react';
import { useTypeDispatch, useTypeSelector } from '../redux/typeHooks';
import { addToCart, decrease, removeFromCart, selectCartTotalPrice, selectCartTotalQuantity } from '../redux/cartSlice';
import { SidebarCartType } from '../interfaces/type';
import Buttontmg2 from './Buttons/ButtonTmg2';
import { useNavigate } from 'react-router-dom';
import iconP from '../assets/icons/iconP.svg'
import iconPaypal from '../assets/icons/iconPaypal.svg'

const SidebarCart: React.FC<SidebarCartType> = ({label, closeSideCart}:SidebarCartType) => {
  const cartTotalQuantity = useTypeSelector(selectCartTotalQuantity);
  const CartTotalPrice = useTypeSelector(selectCartTotalPrice)
  const { cartItems } = useTypeSelector((state) => state.cart);
  const dispatch = useTypeDispatch()
  const navigate = useNavigate()

  const handleClickCheckout = () => {
    navigate("/cart")
    document.body.classList.remove('sidebar-open');
  }

  
  return (
    <>
      <div className='titleSidebar'>
        <p>SHOPPING CART {`(${cartTotalQuantity})`}</p>
        <p onClick={closeSideCart}>{label}</p>
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
              <button className='cartButton' onClick={() => dispatch(removeFromCart(item))}>REMOVE</button>
              </div>
              </div>
            </div>
          ))}
      </div>
      <div className='totalPrice'>
      <p>TOTAL</p>
      <p>{`$${CartTotalPrice}`}</p>
      </div>
          <Buttontmg2 onClick={handleClickCheckout}  classButton='buttonCheckout' label='GO TO CHECKOUT'/>
          <div className='buttonPaypal'>
            <img src={iconP} alt="" />
            <img src={iconPaypal} alt="" />
          </div>
    </>
  );
};

export default SidebarCart;
