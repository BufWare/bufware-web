import React from 'react';
import {useNavigate} from 'react-router-dom';
import '../css/CancelConfirmCreateOrder.css';

export default function CancelCreateOrder(){
    const navigate = useNavigate();

    const newOrder = () => {
        navigate('/create-order');
    }

    return(
        <div className='cancelConfirmOrderContainer'>
            <h1>Vaši objednávku se nepodařilo vytvořit.</h1>
            <h2>Novou objednávku můžete objednat</h2>
            <div className='newOrder' onClick={newOrder}>Zde</div>
        </div>
    )
}