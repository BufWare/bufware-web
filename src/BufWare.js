import React from 'react';
import {Routes, Route} from 'react-router-dom';
import CustomerOrderCheckout from './views/CustomerOrderCheckout';

function BufWare (){
    return(
        <Routes>
            <Route path="/" element={ <CustomerOrderCheckout/>}> //defaultní stránka
                <Route path="customer-order-checkout" element={ <CustomerOrderCheckout/>}/>
            </Route>
        </Routes>
    )
};

export default BufWare;
