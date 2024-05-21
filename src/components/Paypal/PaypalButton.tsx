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
            // Clean up the event handler when component unmounts
            window.handleApprovedPay = undefined;
        };
    }, [clearCartButton, navigate]);

    return (
        <PayPalScriptProvider options={initialOptions}>
            <PayPalButtons
                createOrder={(data,actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: totalPrice,
                                },
                            },
                        ],
                    });
                }}
                onApprove={():any => {
                    window.handleApprovedPay && window.handleApprovedPay();
                }}
            />
        </PayPalScriptProvider>
    );
};

export default PaypalButton;
