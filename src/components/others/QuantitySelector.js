import React, { useState } from 'react';

/* Quantity Count of Product */
    const QuantitySelector = ({ onChange }) => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        setQuantity(quantity + 1);
        onChange(quantity + 1);
    };

    const handleDecrease = () => {
        if(quantity > 1){
            setQuantity(quantity - 1);
            onChange(quantity - 1);
        }
    }

    return (
        <div>
            <button onClick={handleDecrease} className='decrease-quantity'>-</button>
          <input type="text" value={quantity} readOnly />
          <button onClick={handleIncrease} className='increase-quantity'>+</button>
        </div>
    )
};

export default QuantitySelector;