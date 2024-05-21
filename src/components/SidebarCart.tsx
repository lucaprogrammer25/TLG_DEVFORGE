import React, { useState } from 'react';
import { useTypeDispatch, useTypeSelector } from '../redux/typeHooks';
import { addToCart, decrease, removeFromCart, selectCartTotalPrice, selectCartTotalQuantity } from '../redux/slice/cartSlice';
import { SidebarCartType } from '../interfaces/type';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import Buttontmg3 from './Buttons/ButtonTmg3';



const SidebarCart: React.FC<SidebarCartType> = ({ closeSideCart}:SidebarCartType) => {
  const [checkOutDivOpen, setCheckOutDivOpen] = useState(false);
  const cartTotalQuantity = useTypeSelector(selectCartTotalQuantity);
  const CartTotalPrice = useTypeSelector(selectCartTotalPrice)
  const { cartItems } = useTypeSelector((state) => state.cart);
  const dispatch = useTypeDispatch()
  const navigate = useNavigate()

  const handleClickCheckout = () => {
    navigate("/cart")
    document.body.classList.remove('sidebar-open');
  }

  const openCheckOut=()=>{
    if (checkOutDivOpen == true){
      setCheckOutDivOpen(false)
    } else {
      setCheckOutDivOpen(true)
    }
    
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
              <p>Size: {item.size}</p>
              <p>${item.price}</p>
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
      <div style={{display:"flex", flexDirection:"row", gap:"2rem"}}>
          <Buttontmg3 label={"go to checkout"} className="buttonWhitePBlack"onClick={handleClickCheckout} />
          </div>
           
    </>
  );
};

export default SidebarCart;
