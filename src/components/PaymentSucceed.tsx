import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentSucceed = () => {

    let [progressWidth, setProgressWidth] = useState(0);

    const navigate = useNavigate()

    useEffect(() => {
        const interval = setInterval(() => {
            setProgressWidth((prevWidth) => {
                if (prevWidth < 100) {
                    return prevWidth + 3;
                } else {
                    clearInterval(interval);
                    setTimeout(() => {
                        navigate("/");
                    }, 1000); // Delay of 1 second before redirecting
                    return prevWidth; // Keep progressWidth at 100
                }
            });
        }, 100);

        return () => clearInterval(interval);
    }, [navigate]);


    return (
        <>
            <div className="succeedBox">
                <div className="succeedPBox">    
                    <h1 className="purchaseThanks">Thank you for your purchase</h1>
                    <h3 className="purchaseSubtitle">You'll be reinderized to the home soon!</h3>
                </div>
                <div className="progress-bar">
                    <div className="progress" style={{ width: `${progressWidth}%` }}></div>
                </div>
            </div>
        </>
    )
}

export default PaymentSucceed;