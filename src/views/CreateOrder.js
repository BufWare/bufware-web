import React from 'react';
import {useEffect, useState} from 'react';
import Product from  '../components/Product';
import Cart from  '../components/Cart';

export default function CreateOrder(){
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        try{
            const response = await fetch("https://62849a953060bbd3473b9bce.mockapi.io/products");
            const products = await response.json();
            setProducts(products);
        } catch (err) {
            console.error(err.message);
        }
    };

    const addToCart = (id) => {
        if(cart.find(product => product.id === id)){
            const newCart = [...cart];
            const product = newCart.find(product => product.id === id)
            product.mnozstvi += 1
            setCart(newCart)
        }
        else{
            setCart(prevCart => {
                return [...prevCart, { id: id, mnozstvi: 1}]
            })
        }
    };

    const removeFromCart = (id) => {
        if(cart.find(product => product.id === id)){
            if(cart.find(product => product.mnozstvi === 1)){
                removeAllFromCart(id);
            }
            else{
                const newCart = [...cart];
                const product = newCart.find(product => product.id === id);
                product.mnozstvi -= 1;
                setCart(newCart);
            }
        }
    };

    const removeAllFromCart = (id) => {
        const newCart = cart.filter(product => product.id !== id);
        setCart(newCart);
    };

    return(
        <>
            <h1>Produkty</h1>
            <Product products={products} addToCart={addToCart}/>
            <h2>Košík</h2>
            <Cart cart={cart} products={products} addToCart={addToCart} removeFromCart={removeFromCart} removeAllFromCart={removeAllFromCart}/>
        </>
    )
}