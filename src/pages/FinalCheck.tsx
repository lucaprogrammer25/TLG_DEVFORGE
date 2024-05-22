import PaymentFailed from "../components/PaymentFailed";
import PaymentSucceed from "../components/PaymentSucceed";


const paymentCheck: Boolean = true;

const FinalCheck = () => {
    return (
        <>
         {paymentCheck ? <PaymentSucceed/> : <PaymentFailed/>};
        </>
    );
};

export default FinalCheck;