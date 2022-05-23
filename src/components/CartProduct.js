import React from 'react';

export default function CartProduct({cart, products, addToCart, removeFromCart, removeAllFromCart}){
    const product=products.find(product => product.id === cart.id);
    const celkovaCena=product.cena*cart.mnozstvi;
    return(
        <div className='cartProduct'>
            <div key={cart.id}>
                {cart.id}. - {product.nazev} - {cart.mnozstvi} ks - {product.cena} Kč/ks - {celkovaCena} Kč celkem
            </div>
            <button onClick={() => addToCart(cart.id)}>+</button>
            <button onClick={() => removeFromCart(cart.id)}>-</button>
            <button onClick={() => removeAllFromCart(cart.id)}>Odebrat</button>
        </div>
    )
}