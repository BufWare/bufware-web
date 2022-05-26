import React from 'react';
import {Link} from 'react-router-dom';
import '../css/Rozcestnik.css';

export default function Rozcestnik() {
  return (
    <div className='rozscestnikContainer container'>
        <ul id="nav">
            <li>
                <Link to="create-order">Tvorba objednávky</Link>
            </li>
            <li>
                <Link to="add-product">Tvorba a editace produktů</Link>
            </li>
            <li>
                <Link to="manage-orders">Správa objednávek</Link>
            </li>
            <li>
                <Link to="customer-order-checkout">Seznam objednávek</Link>
            </li>
        </ul>
    </div>
  )
}
