import React from 'react';

export default function Product({orders}){
    return (
        <div>
            {
                orders.map(order => {
                        return (
                            <>
                                <div key={order.id} className="order">
                                    <div className="orderId">#{order.id}</div>
                                    <div className="orderTime">{order.cas}</div>
                                    <div className="orderState">{order.stav} Kč</div>
                                    <div className="orderPrice">{order.cena} Kč</div>
                                </div>
                            </>
                        )
                    }
                )
            }
        </div>
    )
}