import React from 'react';
import {Routes, Route, Link} from 'react-router-dom'; //BrowserRouter as Router, 
import CustomerOrderCheckout from './views/CustomerOrderCheckout';
import CreateOrder from './views/CreateOrder';
import AddProduct from './views/AddProduct';
import './BufWare.css';

function BufWare (){
    return(
        <div>
            <ul id="nav">
                <li>
                    <Link to="/">Main</Link>
                </li>
                <li>
                    <Link to="create-order">Create Order</Link>
                </li>
                <li>
                    <Link to="customer-order-checkout">Customer Order Checkout</Link>
                </li>
                <li>
                    <Link to="add-product">Add Product</Link>
                </li>
            </ul>
            <Routes>
                    <Route path="customer-order-checkout" element={ <CustomerOrderCheckout/>}/>
                    <Route path="create-order" element={ <CreateOrder/>}/>
                    <Route path="add-product" element={ <AddProduct/>}/>
                    <Route path=""/> {/*defaultní stránka*/}
            </Routes>
        </div>
    )
};

export default BufWare;
