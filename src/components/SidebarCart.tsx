import { useTypeDispatch, useTypeSelector } from '../redux/typeHooks';
import { addToCart, decrease, removeFromCart, selectCartDiscount, selectCartTotalPrice, selectCartTotalQuantity } from '../redux/slice/cartSlice';
import { SidebarCartType } from '../interfaces/type';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import Buttontmg3 from './Buttons/ButtonTmg3';



const SidebarCart: React.FC<SidebarCartType> = ({ closeSideCart}:SidebarCartType) => {
  const cartTotalQuantity = useTypeSelector(selectCartTotalQuantity);
  const CartTotalPrice = useTypeSelector(selectCartTotalPrice)
  const discountTotalPrice = useTypeSelector(selectCartDiscount)
  const discountTotalPriceNumber = Number(discountTotalPrice)
  const blurOutletElement = document.getElementById('blurOutlet');
    const blurNavbarElement = document.getElementById('blurNavbar');
  
  const { cartItems } = useTypeSelector((state) => state.cart);
  const dispatch = useTypeDispatch()
  const navigate = useNavigate()

  const handleClickCheckout = () => {
    navigate("/cart")
    document.body.classList.remove('sidebar-open');
  }

  const handleClickDeleteItem = (product: any) => {
    dispatch(removeFromCart(product));
    if (blurOutletElement && blurNavbarElement) {
      blurOutletElement.style.filter =  'blur(0px)';
      blurNavbarElement.style.filter = 'blur(0px)';
  }
  }

  const handleClickDecreaseItem = (product: any) => {
    dispatch(decrease(product));
    if(product.quantity <=1){
      if (blurOutletElement && blurNavbarElement) {
        blurOutletElement.style.filter =  'blur(0px)';
        blurNavbarElement.style.filter = 'blur(0px)';
    }
    }
   
  }

  return (
    <>
      <div className='titleSidebar'>
        <p><FormattedMessage id="cart" defaultMessage="Shopping cart"/> {`(${cartTotalQuantity})`}</p>
        <p onClick={closeSideCart}><FormattedMessage id="close" defaultMessage="Close"/></p>
      </div>
      <div className='contentCart'>
          {cartItems.map((item, index) => (
            <div key={`${item.id}-${index}`} className='boxProduct'>
              <img src={item.image} alt="cart product" />
              <div className='productDetails'>
                <div>
              <p>{item.name}</p>
              <p>Size: {item.size}</p>
              <p>${item.price}</p>
              </div>
              <div className='wrapperOptionsCart'>
              <div className='cartDetail'>
                <button onClick={() => handleClickDecreaseItem(item)} className="cartButton">-</button>
                <p>{item.quantity}</p>
                <button onClick={() => dispatch(addToCart(item))} className="cartButton">+</button>
              </div>
              <button className='cartButton' onClick={() => handleClickDeleteItem(item)}><FormattedMessage id="remove" defaultMessage="Remove"/></button>
              </div>
              </div>
            </div>
          ))}
      </div>
      <div className='wrapperPrice'>
        {discountTotalPriceNumber !== 0 ? (<div className='discountContainer'>
      <p><FormattedMessage id="discount" defaultMessage="Discount"/></p>
      <p>{`-$${discountTotalPriceNumber}`}</p>
      </div>) : null}
      <div className='totalPrice'>
      <p><FormattedMessage id="total" defaultMessage="Total"/></p>
      <p>{`$${CartTotalPrice}`}</p>
      </div>
      </div>
      <div style={{display:"flex", flexDirection:"row", gap:"2rem"}}>
          <Buttontmg3 label={"go to checkout"} className="buttonWhitePBlack"onClick={handleClickCheckout} />
          </div>
           
    </>
  );
};

export default SidebarCart;
