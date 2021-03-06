import React from 'react';
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Product from  '../components/Product';
import Cart from  '../components/Cart';
import '../css/CreateOrder.css';

export default function CreateOrder(){
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState();
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProducts('load');
        setTotalPrice(0);
    }, []);

    const getProducts = async (type) => {
        try{
            const response = await fetch("https://62849a953060bbd3473b9bce.mockapi.io/products");
            const products = await response.json();
            if(type==='load')
                setProducts(products);
            else if (type==='check')
                return (products);
        } catch (err) {
            console.error(err.message);
            setError(err.message);
        }
        finally {
            setLoading(false);
        }
    };

    const submitOrder = async () => {
        const newProducts=await getProducts('check');
        if(JSON.stringify(newProducts)===JSON.stringify(products)) {
            try{
                const response = await fetch("https://ptsv2.com/t/3wj3z-1653375345/post", {
                    method: 'POST',
                    headers: { "Content-Type": "application/json"},
                    body: JSON.stringify(cart)
                });
                const order = await response.json();
                setCart([]);
                navigate('/confirm-create-order', {state: {id: order.id}});
            } catch (err) {
                console.error(err.message);
                navigate('/cancel-create-order');
            }
        }
        else {
            navigate('/cancel-create-order');
        }
    }

    const addToCart = (id) => {
        const product = products.find(product => product.id === id)
        setTotalPrice(prevTotalPrice => {return prevTotalPrice+product.cena})
        if(cart.find(product => product.id === id)){
            const newCart = [...cart];
            const cartProduct = newCart.find(cartProduct => cartProduct.id === id)
            cartProduct.pocet += 1
            setCart(newCart)
        }
        else{
            setCart(prevCart => {
                return [...prevCart, { id: id, pocet: 1}]
            })
        }
    };

    const removeFromCart = (id) => {
        const cartProduct = cart.find(cartProduct => cartProduct.id === id)
        if(cartProduct){
            if(cartProduct.pocet === 1){
                removeAllFromCart(id);
            }
            else{
                const newCart = [...cart];
                const product = products.find(product => product.id === id)
                cartProduct.pocet -= 1;
                setTotalPrice(prevTotalPrice => {return prevTotalPrice-product.cena})
                setCart(newCart);
            }
        }
    };

    const removeAllFromCart = (id) => {
        const product = products.find(product => product.id === id)
        const cartProduct = cart.find(cartProduct => cartProduct.id === id)
        const newCart = cart.filter(cartProduct => cartProduct.id !== id);
        setTotalPrice(prevTotalPrice => {return prevTotalPrice-product.cena*cartProduct.pocet})
        setCart(newCart);
    };

    return(
            <div className="createOrderContainer container containerBorder">
                <h1>Produkty</h1>
                {loading && <div>Na????t??n??...</div>}
                {error && (<div>Nastal probl??m p??i na????t??n?? dat - {error}</div>)}
                {!loading && !error &&
                    <>
                        <div className="productContainer">
                            <Product className="product" products={products} addToCart={addToCart}/>
                        </div>
                        <Cart cart={cart} totalPrice={totalPrice} products={products} addToCart={addToCart}
                        removeFromCart={removeFromCart} removeAllFromCart={removeAllFromCart} submitOrder={submitOrder}/>
                    </>
                }
            </div>
    )
}