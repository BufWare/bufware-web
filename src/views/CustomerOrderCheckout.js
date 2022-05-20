import React from 'react';
import {useEffect, useState} from 'react';
import ChosenOrders from  '../components/ChosenOrders';
import './CustomerOrderCheckout.css';


export default function CustomerOrderCheckout() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getOrders();
        const interval=setInterval(getOrders,1000);
        return()=>clearInterval(interval);
    }, []);

    const getOrders = async () => {
        try{
            const response = await fetch("https://62849a953060bbd3473b9bce.mockapi.io/orders");
            const orders = await response.json();
            setOrders(orders);
        } catch (err) {
            console.error(err.message);
        }
    };

    return(
        <div className="orderList">
            <h1>Seznam objednávek</h1>
            <hr/>
            <h2>Objednané</h2>
            <div className="chosenOrderList">
                <ChosenOrders type={0} orders={orders}/>
            </div>
            <h2>Připravené</h2>
            <div className="chosenOrderList">
                <ChosenOrders type={1} orders={orders}/>
            </div>
        </div>
    );
}

