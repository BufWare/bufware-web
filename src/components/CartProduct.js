import React from 'react';

export default function CartProduct({cart, products, addToCart, removeFromCart, removeAllFromCart}){
    const product=products.find(product => product.id === cart.id);
    const celkovaCena=product.cena*cart.pocet;
    return(
        <div className='cartProduct'>
            <div key={cart.id}>
                <div className="cartProductId">#{cart.id}</div>
                <div className="cartProductName">{product.nazev}</div>
                <div className="cartProductAmount">{cart.pocet} ks</div>
                <div className="cartProductPrice">{product.cena} Kč/ks</div>
                <div className="cartProductTotalPrice">{celkovaCena} Kč</div>
            </div>
            <div className="cartProductButton Add" onClick={() => addToCart(cart.id)}>+</div>
            <div className="cartProductButton Remove" onClick={() => removeFromCart(cart.id)}>-</div>
            <div className="cartProductButton RemoveAll" onClick={() => removeAllFromCart(cart.id)}>Odebrat</div>
        </div>
    )
}