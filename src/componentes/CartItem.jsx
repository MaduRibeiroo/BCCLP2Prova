
import React from 'react';

const CartItem = ({ item, updateQuantity, removeFromCart }) => {
    const handleChange = (event) => {
        const newQuantity = parseInt(event.target.value, 10);
        updateQuantity(item.id, newQuantity);
    };

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div>
                <h5>{item.name}</h5>
                <p>Preço: R$ {item.price}</p>
            </div>
            <div className="d-flex align-items-center">
                <input 
                    type="number" 
                    min="1" 
                    value={item.quantity} 
                    onChange={handleChange} 
                    className="form-control w-25 mr-2" 
                />
                <button 
                    className="btn btn-danger" 
                    onClick={() => removeFromCart(item.id)}>
                    Remover
                </button>
            </div>
        </li>
    );
};

export default CartItem;
