import React from 'react';

export default function Product({products, addToCart}){
    return (
        <div>
            {
                products.map(product => {
                        return (
                            <>
                                <div key={product.id} onClick={() => addToCart(product.id)} className="product">{product.id}. - {product.nazev}  - {product.cena} Kč</div>
                            </>
                        )
                    }
                )
            }
        </div>
    )
}