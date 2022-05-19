import React from 'react'
import {useState, useEffect} from "react";

function ChosenOrders({type}){
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getOrders();
        const interval=setInterval(getOrders,1000);
        return()=>clearInterval(interval);
    }, []);

    const getOrders = async () => {
        try{
            const response = await fetch("https://62849a953060bbd3473b9bce.mockapi.io/overview");
            const orders = await response.json();
            setOrders(orders);
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <div>
            {
                orders.filter(order => order.order_state === type).map(filteredOrder => <div className="order" key={filteredOrder.order_id}>{filteredOrder.order_id}</div>)
            }
        </div>
    )
}

export default ChosenOrders;