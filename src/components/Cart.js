import React from 'react';
import CartProduct from "./CartProduct";

export default function Cart({cart, products, addToCart, removeFromCart, removeAllFromCart, submitOrder, totalPrice}){
    if(cart.length>0){
        return (
            <>
                <h1>Košík</h1>
                <div className='cartProductContainer'>
                    {
                        cart.map(cart => {
                                return (
                                    <>
                                        <CartProduct key={cart.id} cart={cart} products={products} addToCart={addToCart} removeFromCart={removeFromCart} removeAllFromCart={removeAllFromCart}/>
                                    </>
                                )
                            }
                        )
                    }
                    <div className="totalPrice">Celkem {totalPrice} Kč</div>
                    <div className="submitOrder" onClick={submitOrder}>Odeslat objednávku</div>
                </div>
            </>
        )
    }
}