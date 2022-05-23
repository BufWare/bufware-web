import React from 'react';
import {useEffect, useState} from 'react';
import Product from  '../components/Product';
import Cart from  '../components/Cart';

export default function CreateOrder(){
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState();

    useEffect(() => {
        getProducts();
        setTotalPrice(0);
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

    const submitOrder = async () => {
        try{
            const response = await fetch("https://62849a953060bbd3473b9bce.mockapi.io/new-order", {method: 'POST', body: JSON.stringify(cart)});
            const order = await response.json();
            console.log(cart);
            console.log(order);
        } catch (err) {
            console.error(err.message);
        }
    }

    const addToCart = (id) => {
        const product = products.find(product => product.id === id)
        setTotalPrice(prevTotalPrice => {return prevTotalPrice+product.cena})
        if(cart.find(product => product.id === id)){
            const newCart = [...cart];
            const cartProduct = newCart.find(cartProduct => cartProduct.id === id)
            cartProduct.mnozstvi += 1
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
                const cartProduct = newCart.find(cartProduct => cartProduct.id === id);
                const product = products.find(product => product.id === id)
                cartProduct.mnozstvi -= 1;
                setTotalPrice(prevTotalPrice => {return prevTotalPrice-product.cena})
                setCart(newCart);
            }
        }
    };

    const removeAllFromCart = (id) => {
        const product = products.find(product => product.id === id)
        const cartProduct = cart.find(cartProduct => cartProduct.id === id);
        const newCart = cart.filter(cartProduct => cartProduct.id !== id);
        setTotalPrice(prevTotalPrice => {return prevTotalPrice-product.cena*cartProduct.mnozstvi})
        setCart(newCart);
    };

    return(
        <>
            <h1>Produkty</h1>
            <Product products={products} addToCart={addToCart}/>
            <h2>Košík</h2>
            <Cart cart={cart} totalPrice={totalPrice} products={products} addToCart={addToCart} removeFromCart={removeFromCart} removeAllFromCart={removeAllFromCart} submitOrder={submitOrder}/>
        </>
    )
}