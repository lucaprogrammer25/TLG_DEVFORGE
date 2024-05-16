import PaymentFailed from "../components/PaymentFailed";
import PaymentSucceed from "../components/PaymentSucceed";


const paymentCheck: Boolean = false;

const FinalCheck = () => {
    return (
        <>
         {paymentCheck ? <PaymentSucceed/> : <PaymentFailed/>};
        </>
    );
};

export default FinalCheck;