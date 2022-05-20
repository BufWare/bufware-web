import React from 'react';

export default function ChosenOrders({type, orders}){
    return (
        <div>
            {
                orders.filter(order => order.stav === type).map(filteredOrder => <div className="order" key={filteredOrder.id}>{filteredOrder.id}</div>)
            }
        </div>
    )
}