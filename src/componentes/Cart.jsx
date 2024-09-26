
import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cart, updateQuantity, removeFromCart }) => {
    return (
        <div className="container mt-4">
            <h2>Carrinho de Compras</h2>
            {cart.length === 0 ? (
                <p>Seu carrinho está vazio!</p>
            ) : (
                <ul className="list-group">
                    {cart.map(item => (
                        <CartItem 
                            key={item.id} 
                            item={item} 
                            updateQuantity={updateQuantity} 
                            removeFromCart={removeFromCart} 
                        />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
