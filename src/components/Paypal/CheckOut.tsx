import PaypalButton from "./PaypalButton";
import { useTypeSelector } from "../../redux/typeHooks";
import { selectCartTotalPrice } from "../../redux/slice/cartSlice";

interface Paypal {
    closeCheckOut: any
}

const CheckOut = ({ closeCheckOut }: Paypal) => {
    const cartTotalPrice = useTypeSelector(selectCartTotalPrice);
    

  return (
    <div className="checkout-div">
      <p style={{ color: "white", fontSize: "25px" }} onClick={closeCheckOut}>
      </p>
      <script
        src={`https://www.paypal.com/sdk/js?client-id=AQeudPAOCE1BgK2BQ4LXBWo-nUwNpjM4KCGjNMyTCHxONCYXIBrdaoC0YDR-NAh6LG7kOLvyitgTSxSE&currency=EUR`}
      ></script>
      <PaypalButton totalPrice={cartTotalPrice} />
    </div>
  );
};

export default CheckOut;
