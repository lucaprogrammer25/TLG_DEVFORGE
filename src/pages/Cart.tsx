import React, { useEffect, useState } from 'react';
import { useTypeDispatch, useTypeSelector } from '../redux/typeHooks';
import { addToCart, clearCart, decrease, removeFromCart, selectCartTotalPrice, selectCartTotalQuantity } from '../redux/slice/cartSlice';
import fetchDataContentful from "../redux/fetch/fetchContentful";
import trashCanIcon from "../assets/icons/trash-can-svgrepo-com.svg"
import { useNavigate } from 'react-router-dom';
import ShipmentForm from '../components/Forms/Shipment';
import Buttontmg3 from '../components/Buttons/ButtonTmg3';

interface Props {}

const Cart: React.FC<Props> = () => {
  const [shipment, setShipment] = useState(false)
  const cartTotalQuantity = useTypeSelector(selectCartTotalQuantity);
  const cartTotalPrice = useTypeSelector(selectCartTotalPrice);
  const dispatch = useTypeDispatch()
  const navigate = useNavigate()
  
  const { cartItems } = useTypeSelector((state) => state.cart);
  console.log(cartItems);
  
  const { data } = useTypeSelector((state) => state.contentful)
  
  const logo =  data.items && data.items[0]?.fields.logoNavbar.fields.file.url
  useEffect(() => {
    dispatch(fetchDataContentful())     
  }, [dispatch])

  const handleClickShipment = () => {
    setShipment(true)
  }
  
  const shipmentValue: any = cartItems.map((item) => {
    return item.shipment; 
});

const totalPrice = Number(shipmentValue[0]) == 20 ? (Number(cartTotalPrice) + Number(shipmentValue[0])).toFixed(2): cartTotalPrice;

return (
    <div className='containerCart'>
      <div className='wrapperButtonPLP'>
       <img onClick={() => navigate("/")} className='logoCart' src={logo} alt=""  />
       <span onClick={() => navigate("/")} >{`< Go to back`}</span>
       </div>
      <div className='wrapperTitleCart'>
        <div className='titleCart'>
        <h3>Cart</h3>
        <h3>(Items {cartTotalQuantity})</h3>
        </div>
        <img onClick={() => dispatch(clearCart())} src={trashCanIcon} alt="icon trash can" />
      </div>
      {cartTotalQuantity !==0 ? (
      <div className='productMenu'>
        <div className='wrapperProduct'>
        <div className='containerProduct'>
          {cartItems.map((item) => (
            <div className='product' key={item.id}>
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
              <button className='cartButton' onClick={() => dispatch(removeFromCart(item))}>REMOVE</button>
              </div>
              </div>
            </div>
          ))}
        </div>
        <div className='containerPayment'>
        {
          <div className='totalContainer'>
            <span>SUMMARY</span>
            <div className='containerCartPrice'>
              <span>YOUR CART</span>
              <span>${cartTotalPrice} </span> 
              </div>
            <div className='containerCartPrice'>
              <span>SHIPPING</span>
                <span>${shipmentValue[0]}</span>
              </div>
              <hr />
              <div className='containerCartPrice'>
              <span>TOTAL ORDER</span>
              <span>${totalPrice}</span>
              </div>
             
        </div>
        }
        <Buttontmg3 className='buttonBlackPWhite' label='go to checkout' onClick={handleClickShipment}/>
        {shipment ? <ShipmentForm/> : null }
        </div>
        </div>
        <div>
         
        </div>
      </div>) : <h3 className='goBackButton'>Go back to shopping</h3>
      }
    </div>
  );
};

export default Cart;
