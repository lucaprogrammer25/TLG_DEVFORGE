import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTypeDispatch } from "../../redux/typeHooks";
import { clearCart } from "../../redux/slice/cartSlice";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { PaypalButtonProps } from "../../interfaces/type";

declare global {
    interface Window {
        handleApprovedPay?: () => void;
    }
}

const initialOptions = {
    "clientId": "AQeudPAOCE1BgK2BQ4LXBWo-nUwNpjM4KCGjNMyTCHxONCYXIBrdaoC0YDR-NAh6LG7kOLvyitgTSxSE",
    currency: "EUR",
    intent: "capture",
    "disable-funding": "credit,card",
};


const PaypalButton = ({ totalPrice }: PaypalButtonProps) => {
    const dispatch = useTypeDispatch();
    const clearCartButton = () => dispatch(clearCart());
    const navigate = useNavigate();

    useEffect(() => {
        const approvedPay = () => {
            clearCartButton();
            navigate("/finalcheck");
        };

        window.handleApprovedPay = approvedPay;

        return () => {
         
            window.handleApprovedPay = undefined;
        };
    }, [clearCartButton, navigate]);

    return (
        <PayPalScriptProvider options={initialOptions}>
            <PayPalButtons
                createOrder={(data, actions) => {
                    return actions.order.create({
                        intent: "CAPTURE", 
                        purchase_units: [
                            {
                                amount: {
                                    currency_code: "EUR",
                                    value: totalPrice.toString(),
                                },
                            },
                        ],
                    });
                }}
                onApprove={(): any => {
                    window.handleApprovedPay && window.handleApprovedPay();
                }}
            />
        </PayPalScriptProvider>
    );
};

export default PaypalButton;
