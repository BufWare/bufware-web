import React from 'react';
import {Link} from 'react-router-dom';
import '../css/Rozcestnik.css';

export default function Rozcestnik() {
  return (
      <>
      <img className="rozcestnikLogo" alt="BufWareLogo" src="./BufWareLogo.svg"/>
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
                    <Link to="customer-order-checkout">Seznam objednávek pro zákazníky</Link>
                </li>
            </ul>
        </div>
      </>
  )
}
