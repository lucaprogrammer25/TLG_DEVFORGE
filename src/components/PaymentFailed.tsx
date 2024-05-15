import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const PaymentFailed = () => {

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
            <div className="errorBox">
                <div className="errorPBox">    
                    <h1 className="purchaseError">Error!</h1>
                    <h3 className="errorSubtitle">Something went wrong...</h3>
                </div>
                <div className="progress-barError">
                    <div className="progressError" style={{ width: `${progressWidth}%` }}></div>
                </div>
            </div>
        </>
    )
}

export default PaymentFailed;