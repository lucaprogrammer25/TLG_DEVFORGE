import React, { useEffect } from 'react';
import { useTypeDispatch, useTypeSelector } from '../redux/typeHooks';
import { addToCart, clearCart, decrease, removeFromCart, selectCartTotalPrice, selectCartTotalQuantity } from '../redux/cartSlice';
import fetchDataContentful from "../redux/fetchContentful";
import trashCanIcon from "../assets/icons/trash-can-svgrepo-com.svg"
import { useNavigate } from 'react-router-dom';

interface Props {}

const Cart: React.FC<Props> = () => {
  const cartTotalQuantity = useTypeSelector(selectCartTotalQuantity);
  const cartTotalPrice = useTypeSelector(selectCartTotalPrice);
  const dispatch = useTypeDispatch()
  const navigate = useNavigate()
  const { cartItems } = useTypeSelector((state) => state.cart);
  const { data } = useTypeSelector((state) => state.contentful)
  const logo =  data.items && data.items[2]?.fields.logoNavbar.fields.file.url
  console.log(cartItems);
  useEffect(() => {
    dispatch(fetchDataContentful())     
  }, [dispatch])
  

  return (
    <div className='containerCart'>
      <div className='wrapperButtonPLP'>
       <img onClick={() => navigate("/")} className='logoCart' src={logo} alt=""  />
       <span onClick={() => navigate("/")} >{`< Indietro`}</span>
       </div>
      <div className='wrapperTitleCart'>
        <div className='titleCart'>
        <h3>Cart</h3>
        <h3>(Items {cartTotalQuantity})</h3>
        </div>
        <img onClick={() => dispatch(clearCart())} src={trashCanIcon} alt="icon trash can" />
      </div>
      <div></div>
      <div className='productMenu'>
        <div className='wrapperProduct'>
        <div className='containerProduct'>
          {cartItems.map((item) => (
            <div className='product' key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className='wrapperInfoProduct'>
                <div className='infoProduct'>
              <span>{item.name}</span>
              <span>${item.price}</span>
              </div>
              <div className='quantityProduct'>
                <div className='buttonCart'>
              <button onClick={() => dispatch(decrease(item))} className="cartButton"><span>-</span></button>
              <span>{item.quantity}</span>
              <button onClick={() => dispatch(addToCart(item))} className="cartButton"><span>+</span></button>
              </div>
              <button className='cartButton' onClick={() => dispatch(removeFromCart(item))}>REMOVE</button>
              </div>
              </div>
              
            </div>
          ))}
        </div>
        {
          cartTotalQuantity !== 0 ? (<div className='totalContainer'>
            <span>SUMMARY</span>
            <div className='containerCartPrice'>
              <span>YOUR CART</span>
              <span>${cartTotalPrice} </span> 
              </div>
            <div className='containerCartPrice'>
              <span>SHIPPING</span>
              <span>$0</span> 
              </div>
              <hr />
              <div className='containerCartPrice'>
              <span>TOTAL ORDER</span>
              <span>${cartTotalPrice}</span>  
              </div>
             
        </div>) : null
        }
        
        </div>
        <div>
         
        </div>
      </div>
    </div>
  );
};

export default Cart;
