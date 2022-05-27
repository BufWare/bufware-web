import React from 'react';

export default function ChosenOrders({type, orders}){
    if (orders.filter(order => (order.stav===type)).length>0){
        return (
            <>
                {
                    orders.filter(order => (order.stav===type)).map(filteredOrder => <div className="order" key={filteredOrder.id}>{filteredOrder.id}</div>)
                }
            </>
        )
    }
    else{
        return(
            <div className='noOrders'>Žádné objednávky s tímto stavem</div>
        )
    }
}