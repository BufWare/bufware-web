import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import '../css/CancelConfirmCreateOrder.css';

export default function ConfirmCreateOrder(){
    const location = useLocation();
    const navigate = useNavigate();
    const id = location.state.id;

    const newOrder = () => {
        navigate('/create-order');
    }

    return(
        <div className='cancelConfirmOrderContainer'>
            <h1>Vaše objednávka s číslem {id} byla úspěšně vytvořena.</h1>
            <h2>Její stav můžete sledovat na informační tabuli.</h2>
            <h3>Pro tvorbu nové objednávky klikněte</h3>
            <div className='newOrder' onClick={newOrder}>Zde</div>
        </div>
    )
}