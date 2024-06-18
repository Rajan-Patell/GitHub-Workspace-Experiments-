import React, { useState } from 'react';

const Promotions = () => {
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const applyPromotion = () => {
    // This is a placeholder for the logic to apply a promotion code
    // In a real application, this would involve validating the promo code
    // and calculating the discount based on the promotion details
    console.log(`Applying promotion code: ${promoCode}`);
    // For demonstration, assume a flat 10% discount for any code
    setDiscount(10);
  };

  return (
    <div>
      <h2>Apply Promotion Code</h2>
      <input
        type="text"
        value={promoCode}
        onChange={(e) => setPromoCode(e.target.value)}
        placeholder="Enter promotion code"
      />
      <button onClick={applyPromotion}>Apply</button>
      {discount > 0 && <p>Congratulations! You've received a {discount}% discount.</p>}
    </div>
  );
};

export default Promotions;
