import React from 'react';
import {Routes, Route, Link} from 'react-router-dom'; //BrowserRouter as Router, 
import CustomerOrderCheckout from './views/CustomerOrderCheckout';
import CreateOrder from './views/CreateOrder';
import AddProduct from './views/AddProduct';
import Rozcestnik from './views/Rozcestnik';
import './BufWare.css';

function BufWare (){
    return(
        <div>
            <Routes>
                    <Route path="customer-order-checkout" element={ <CustomerOrderCheckout/>}/>
                    <Route path="create-order" element={ <CreateOrder/>}/>
                    <Route path="add-product" element={ <AddProduct/>}/>
                    <Route path="" element={ <Rozcestnik/>}/> {/*defaultní stránka*/}
            </Routes>
        </div>
    )
};

export default BufWare;
