import React from 'react';
import CartProduct from "./CartProduct";

export default function Cart({cart, products, addToCart, removeFromCart, removeAllFromCart}){
    return (
        <div>
            {
                cart.map(cart => {
                        return (
                            <>
                                <CartProduct cart={cart} products={products} addToCart={addToCart} removeFromCart={removeFromCart} removeAllFromCart={removeAllFromCart}/>
                            </>
                        )
                    }
                )
            }
        </div>
    )
}