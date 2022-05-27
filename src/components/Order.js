import React from 'react';
import OrderContent from "../components/OrderContent"

export default function Order({type, orders, changeState, orderDetail}){


    if (orders.filter(order => type.includes(order.stav)).length>0){
        return (
            <table>
                <thead>
                    <tr>
                        <th>ID objednávky</th>
                        <th>Čas</th>
                        <th>Cena</th>
                        <th colSpan="4">Stav</th>
                        <th>Obsah</th>
                    </tr>
                </thead>
                <tbody>
                {
                    orders.filter(order => type.includes(order.stav)).map(order => {
                            return (
                                <>
                                    <tr key={order.id}>
                                        <td className="orderId">#{order.id}</td>
                                        <td className="orderTime">{new Date(order.timestamp).toLocaleString()}</td>
                                        <td className="orderPrice">{order.cena} Kč</td>
                                        <td className="button" style={{ backgroundColor: (order.stav===0) ? '#cc000099' : ''}} onClick={() => changeState(0, order.id)}>Objednaná</td>
                                        <td className="button" style={{ backgroundColor: (order.stav===1) ? '#cc000099' : ''}} onClick={() => changeState(1, order.id)}>Připravená</td>
                                        <td className="button" style={{ backgroundColor: (order.stav===2) ? '#cc000099' : ''}} onClick={() => changeState(2, order.id)}>Vydaná</td>
                                        <td className="button" style={{ backgroundColor: (order.stav===3) ? '#cc000099' : ''}} onClick={() => changeState(3, order.id)}>Zrušená</td>
                                        <td className={"button arrow"} onClick={()=> orderDetail(order) }><img style={{ transform: (order.detail===true) ? 'rotate(180deg)' : 'rotate(0deg)'}} alt="Šipka" src="./arrow.png"/></td>
                                    </tr>
                                    {order.detail &&
                                        <OrderContent order={order}/>
                                    }
                                </>
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