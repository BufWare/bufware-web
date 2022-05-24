import React from 'react';
import {Routes, Route} from 'react-router-dom';
import CustomerOrderCheckout from './views/CustomerOrderCheckout';
import CreateOrder from './views/CreateOrder';
import ConfirmCreateOrder from './views/ConfirmCreateOrder';
import CancelCreateOrder from './views/CancelCreateOrder';
import AddProduct from './views/AddProduct';
import './css/BufWare.css';

function BufWare (){
    return(
        <Routes>
                <Route path="customer-order-checkout" element={ <CustomerOrderCheckout/>}/>
                <Route path="create-order" element={ <CreateOrder/>}/>
                <Route path="confirm-create-order" element={ <ConfirmCreateOrder/>}/>
                <Route path="cancel-create-order" element={ <CancelCreateOrder/>}/>
                <Route path="" element={<AddProduct/>} /> {/*defaultní stránka*/}
        </Routes>
    )
};

export default BufWare;
