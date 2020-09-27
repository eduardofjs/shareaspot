import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

export default function List() {
    const [spots, setSpots] =  useState([]);

    useEffect(()=>{
        async function loadSpots(){
            const user_id = localStorage.getItem('user');
            const response = await api.get('/dashboard', {
                headers: { user_id }
            });
            setSpots(response.data);
        }
        loadSpots();
    }, []);
    return(
        <>
            <h3>Lista de Spots</h3>
            <ul className="spot-list">
                {spots.map(spot => (
                    <li key={spot._id}>
                        <header style={{ backgroundImage: `url(${spot.thumbnail_url})`}}/>
                        <strong>{spot.company}</strong>
                        <span>{spot.price ? `R$${spot.price}/dia` : 'GRATUITO'}</span>
                        <a href="https://api.whatsapp.com/send?phone=93991796351&text=Olá, vi seu spot no ShareASpot e gostaria de fazer uma reserva!"><button className='btnRes'>Reservar</button></a>
                    </li>
                ))}
            </ul>
            <Link to='/new'><button className='btn'>Cadastrar novo spot</button></Link>
            <Link to='/dashboard'><h4 className='aa'>Meus spots</h4></Link>

        </>
    )
}