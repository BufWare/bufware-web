import React from 'react';

function ChosenOrders({type, orders}){
    return (
        <div>
            {
                orders.filter(order => order.stav === type).map(filteredOrder => <div className="order" key={filteredOrder.id}>{filteredOrder.id}</div>)
            }
        </div>
    )
}

export default ChosenOrders;