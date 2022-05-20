import React from 'react';

export default function CartProduct({cart, products, addToCart, removeFromCart, removeAllFromCart}){
    const product=products.find(product => product.id === cart.id);
    return(
        <>
            <div key={cart.id} className="product">
                {cart.id}. - {product.nazev} - {cart.mnozstvi} ks - {product.cena} Kč/ks - {product.cena*cart.mnozstvi} Kč celkem
            </div>
            <button onClick={() => addToCart(cart.id)}>+</button>
            <button onClick={() => removeFromCart(cart.id)}>-</button>
            <button onClick={() => removeAllFromCart(cart.id)}>Odebrat</button>
        </>
    )
}