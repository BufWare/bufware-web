import React from 'react';
import {Routes, Route} from 'react-router-dom';
import CustomerOrderCheckout from './views/CustomerOrderCheckout';
import CreateOrder from './views/CreateOrder';
import AddProduct from './views/AddProduct';

function BufWare (){
    return(
        <Routes>
                <Route path="customer-order-checkout" element={ <CustomerOrderCheckout/>}/>
                <Route path="create-order" element={ <CreateOrder/>}/>
                <Route path="" element={<AddProduct/>} /> {/*defaultní stránka*/}
        </Routes>
    )
};

export default BufWare;
