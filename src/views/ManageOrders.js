import React, {useEffect, useState} from 'react'
import Order from '../components/Order'

export default function ManageOrders(){
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getOrders();
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
        <div className='manageOrderContainer'>
            <Order orders={orders}/>
        </div>
    );
}