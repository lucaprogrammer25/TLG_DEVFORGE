import React from 'react';
import { useTypeDispatch, useTypeSelector } from '../redux/typeHooks';
import { addToCart, decrease, removeFromCart, selectCartTotalPrice, selectCartTotalQuantity } from '../redux/cartSlice';
import { SidebarCartType } from '../interfaces/type';

const SidebarCart: React.FC<SidebarCartType> = ({label, closeSideCart}:SidebarCartType) => {
  const cartTotalQuantity = useTypeSelector(selectCartTotalQuantity);
  const CartTotalPrice = useTypeSelector(selectCartTotalPrice)
  const { cartItems } = useTypeSelector((state) => state.cart);
  console.log(cartItems);
  
  const dispatch = useTypeDispatch()

  
  return (
    <>
      <div className='titleSidebar'>
        <p>Cart {`(${cartTotalQuantity})`}</p>
        <p onClick={closeSideCart}>{label}</p>
      </div>
      <div className='contentCart'>
          {cartItems.map((item) => (
            <div key={item.id} className='boxProduct'> {/* Assicurati di includere una chiave univoca */}
              <img src={item.image} alt="cart product" />
              <div className='productDetails'>
              <p>{item.name}</p>
              <p>{item.price}</p>
              <div className='cartDetail'>
                <button onClick={() => dispatch(decrease(item))} className="cartButton">-</button>
                <p>{item.quantity}</p>
                <button onClick={() => dispatch(addToCart(item))} className="cartButton">+</button>
              </div>
              </div>
              <button className='cartButton' onClick={() => dispatch(removeFromCart(item))}>REMOVE</button>
            </div>
          ))}
      </div>
      <div className='totalPrice'>
      <p>SUBTOTAL</p>
      <p>{`$${CartTotalPrice}`}</p>
      </div>
    </>
  );
};

export default SidebarCart;
