import React from 'react';
import CartProduct from "./CartProduct";

export default function Cart({cart, products, addToCart, removeFromCart, removeAllFromCart, submitOrder, totalPrice}){
    return (
        <div className='cartProductContainer'>
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
            <div>Celkem {totalPrice} Kč</div>
            <button onClick={submitOrder}>Odeslat objednávku</button>
        </div>
    )
}