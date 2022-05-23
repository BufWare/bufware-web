import React from 'react';
import {Link} from 'react-router-dom'; //BrowserRouter as Router, 
import '../css/Rozcestnik.css';

export default function Rozcestnik() {
  return (
    <div>
        <ul id="nav">
            <li>
                <Link to="create-order">TVORBA OBJEDNÁVKY</Link>
            </li>
            <li>
                <Link to="customer-order-checkout">TABULE OBJEDNÁVEK</Link>
            </li>
            <li>
                <Link to="add-product">TVORBA / EDITACE PRODUKTŮ</Link>
            </li>
        </ul>
    </div>
  )
}
