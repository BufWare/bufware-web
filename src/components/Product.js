import React from 'react';

export default function Product({products, addToCart}){
    return (
        <div>
            {
                products.filter(order => order.skryty===false).map(product => {
                        return (
                            <>
                                <div key={product.id} onClick={() => addToCart(product.id)} className="product">
                                    <div className="productId">#{product.id}</div>
                                    <div className="productName">{product.nazev}</div>
                                    <div className="productDescription">{product.popis}</div>
                                    <div className="productPrice">{product.cena} Kč</div>
                                </div>
                            </>
                        )
                    }
                )
            }
        </div>
    )
}