import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';


export default function Dashboard() {
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
            <h3>Reservas</h3>
            
            <Link to='/dashboard'><button className='btn'>Gerenciar spots</button></Link>

        </>
    )
}