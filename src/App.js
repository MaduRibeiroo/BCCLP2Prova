// src/App.js
import React, { useState, useEffect } from 'react';
import ProductList from './componentes/ProductList';
import Cart from './componentes/Cart';
import './App.css';

const App = () => {
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false); 

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(savedCart);
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product, quantity) => {
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
            setCart(cart.map(item => 
                item.id === product.id 
                ? { ...item, quantity: item.quantity + quantity } 
                : item
            ));
        } else {
            setCart([...cart, { ...product, quantity }]);
        }
    };

    const updateQuantity = (id, quantity) => {
        if (quantity < 1) return;
        setCart(cart.map(item => 
            item.id === id ? { ...item, quantity } : item
        ));
    };

    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const toggleCart = () => {
        setShowCart(!showCart); 
    };
    const calculateTotal = () => {
      return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

    return (
          <div>
          
            <nav className="navbar">
            <a className="navbar-brand custom-navbar-brand" href="#">FELIPE ELETRO</a>
                <button className="btn btn-outline-success" onClick={toggleCart}>
                    <i className="fas fa-shopping-cart"></i> 
                    {cart.reduce((total, item) => total + item.quantity, 0)} item(s) - R$ {calculateTotal()}
                </button>
            </nav>

            
            <div className="container">
                <ProductList addToCart={addToCart} />
                {showCart && ( 
                    <Cart 
                        cart={cart} 
                        updateQuantity={updateQuantity} 
                        removeFromCart={removeFromCart} 
                    />
                )}
            </div>
           
        </div>
    );
};

export default App;
