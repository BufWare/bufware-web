import React, {useEffect, useState} from 'react'
import Order from '../components/Order'
import '../css/ManageOrders.css'

export default function ManageOrders(){
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getOrders();
    }, []);

    const getOrders = async () => {
        try{
            const response = await fetch("https://62849a953060bbd3473b9bce.mockapi.io/order");
            const orders = await response.json();
            setOrders(orders);
        } catch (err) {
            console.error(err.message);
            setError(err.message);
        }
        finally {
            setLoading(false);
        }
    };

    const changeState = async (state, id) => {
        const newOrders = [...orders];
        const order = newOrders.find(order => order.id === id);
        order.stav = state;
        setOrders(newOrders);
        /*
        try{
            await fetch("https://ptsv2.com/t/gnry0-1653476753/post", {
                method: 'POST',
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify({"id": id, "stav": state})
            });
            getOrders();
        } catch (err) {
            console.error(err.message);
        }
        */
    };

    const orderDetail = (order) => {
        order.detail=!order.detail
        const newOrders = [...orders];
        setOrders(newOrders);
    };

    return(
        <div className="manageOrderContainer container containerBorder">

            <h1>Správa objednávek</h1>
            {loading && <div>Načítání...</div>}
            {error && (<div>Nastal problém při načítání dat - {error}</div>)}
            {!loading && !error &&
            <>
            <h2>Objednané</h2>
            <Order orders={orders} changeState={changeState} orderDetail={orderDetail} type={[0]}/>
            <h2>Připravené</h2>
            <Order orders={orders} changeState={changeState} orderDetail={orderDetail} type={[1]}/>
            <h2>Ukončené</h2>
            <Order orders={orders} changeState={changeState} orderDetail={orderDetail} type={[2,3]}/>
            </>}
        </div>
    );
}