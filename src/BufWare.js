import React from 'react';
import {Routes, Route} from 'react-router-dom';
import CustomerOrderCheckout from './views/CustomerOrderCheckout';
import CreateOrder from './views/CreateOrder';
import './css/BufWare.css';

function BufWare (){
    return(
        <Routes>
                <Route path="customer-order-checkout" element={ <CustomerOrderCheckout/>}/>
                <Route path="create-order" element={ <CreateOrder/>}/>
                <Route path="" element={<CustomerOrderCheckout/>} /> //defaultní stránka
        </Routes>
    )
};

export default BufWare;
