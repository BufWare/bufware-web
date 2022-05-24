import React from 'react';
import {Routes, Route} from 'react-router-dom'; //BrowserRouter as Router, 
import CustomerOrderCheckout from './views/CustomerOrderCheckout';
import CreateOrder from './views/CreateOrder';
import ConfirmCreateOrder from './views/ConfirmCreateOrder';
import CancelCreateOrder from './views/CancelCreateOrder';
import AddProduct from './views/AddProduct';
import ManageOrders from './views/ManageOrders';
import Rozcestnik from './views/Rozcestnik';
import './css/BufWare.css';

function BufWare (){
    return(
        <Routes>
                <Route path="customer-order-checkout" element={<CustomerOrderCheckout/>}/>
                <Route path="create-order" element={<CreateOrder/>}/>
                <Route path="confirm-create-order" element={<ConfirmCreateOrder/>}/>
                <Route path="cancel-create-order" element={<CancelCreateOrder/>}/>
                <Route path="manage-orders" element={<ManageOrders/>}/>
                <Route path="add-product" element={<AddProduct/>}/>
                <Route path="" element={<Rozcestnik/>}/> {/*defaultní stránka*/}
        </Routes>
    )
};

export default BufWare;
