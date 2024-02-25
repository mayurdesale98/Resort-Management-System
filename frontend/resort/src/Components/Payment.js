import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Payment(totalAmount) {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCVV] = useState('');
    const navigate=useNavigate();
    const handlePayment = () => {
      // Validate card details
      if (!/^\d{3,4}$/.test(cvv)) {
        alert('Please enter a valid 3 or 4-digit CVV');
        return;
      }
      if (!/^\d{2}\/\d{2}$/.test(expiryDate) ) {
        alert('Please enter a valid expiry date in MM/YY format');
        return;
      }
      setTimeout(() => {
        alert('success');
      }, 2000);
      navigate('/booking')
      // Perform payment processing logic
      // Example: Call a function to process payment
    //   onPayment();
    };
  return (
    <div className="payment-container">
    <h2>Payment Details</h2>
    <div className="payment-form">
      <div className="form-group">
        <label>Card Number</label>
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          placeholder="Enter card number"
        />
      </div>
      <div className="form-group">
        <label>Expiry Date</label>
        <input
          type="text"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          placeholder="MM/YYYY"
        />
      </div>
      <div className="form-group">
        <label>CVV</label>
        <input
          type="text"
          value={cvv}
          onChange={(e) => setCVV(e.target.value)}
          placeholder="CVV"
        />
      </div>
      <button onClick={handlePayment}>Pay ${totalAmount}</button>
    </div>
  </div>
);
};
  
