import React from 'react';
import ChosenOrders from  '../components/ChosenOrders'
import './CustomerOrderCheckout.css';
//dwad
function CustomerOrderCheckout() {
    return(
        <div className="orderList">
            <h1>Seznam objednávek</h1>
            <hr/>
            <h2>Objednané</h2>
            <div className="chosenOrderList">
                <ChosenOrders type={0}/>
            </div>
            <h2>Připravené</h2>
            <div className="chosenOrderList">
                <ChosenOrders type={1}/>
            </div>
        </div>
    );
}

export default CustomerOrderCheckout;

