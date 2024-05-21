import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentSucceed = () => {

    const [progressWidth, setProgressWidth] = useState(0);

    const navigate = useNavigate()

    useEffect(() => {
      const interval = setInterval(() => {
        if (progressWidth <= 100) {
          setProgressWidth((prevWidth) => prevWidth + 3);
        }else if (progressWidth > 100) {
            setInterval(() =>{
                navigate("/")
            }, 1000)
        }
      }, 100);
  
      return () => clearInterval(interval);
    }, [progressWidth]);


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