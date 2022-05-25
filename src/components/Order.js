import React from 'react';

export default function Order({type, orders, changeState}){
    if (orders.filter(order => type.includes(order.stav)).length>0){
        return (
            <table>
                <thead>
                <tr>
                    <td>ID</td>
                    <td>Čas</td>
                    <td>Cena</td>
                    <td colSpan="4">Stav</td>
                </tr>
                </thead>
                <tbody>
                {
                    orders.filter(order => type.includes(order.stav)).map(order => {
                            return (
                                <tr key={order.id}>
                                    <td className="orderId">#{order.id}</td>
                                    <td className="orderTime">{order.timestamp}</td>
                                    <td className="orderPrice">{order.cena} Kč</td>
                                    <td className="button" style={{ backgroundColor: (order.stav===0) ? 'red' : 'white'}} onClick={() => changeState(0, order.id)}>Objednaná</td>
                                    <td className="button" style={{ backgroundColor: (order.stav===1) ? 'red' : 'white'}} onClick={() => changeState(1, order.id)}>Připravená</td>
                                    <td className="button" style={{ backgroundColor: (order.stav===2) ? 'red' : 'white'}} onClick={() => changeState(2, order.id)}>Vydaná</td>
                                    <td className="button" style={{ backgroundColor: (order.stav===3) ? 'red' : 'white'}} onClick={() => changeState(3, order.id)}>Zrušená</td>
                                </tr>
                            )
                        }
                    )
                }
                </tbody>
            </table>
        )
    }
    else{
        return(
            <div className='noOrders'>Žádné objednávky s tímto stavem</div>
        )
    }
}
