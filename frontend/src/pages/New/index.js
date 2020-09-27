import React, { useState, useMemo } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import camera from '../../assets/camera.svg'

import './styles.css';

export default function New({ history }) {
    const [thumbnail, setThumbnail] =useState(null);
    const [company, setCompany] =useState('');
    const [techs, setTechs] =useState('');
    const [price, setPrice] =useState('');

    const preview = useMemo(() => {
        return thumbnail ? URL.createObjectURL(thumbnail) : null;
    }, [thumbnail])

    async function handleSubmit(event){
        event.preventDefault();

        const data = new FormData();
        const user_id = localStorage.getItem('user');

        data.append('thumbnail', thumbnail);
        data.append('company', company);
        data.append('techs', techs);
        data.append('price', price);

        await api.post('/spots', data, {
            headers: {user_id}
        })

        history.push('/dashboard');
    }

    return(
        <form onSubmit={handleSubmit}>

            <label 
            id="thumbnail" 
            style={{backgroundImage: `url(${preview})`}}
            className={thumbnail ? 'has-thumbnail' : ''}
            >
                <input type="file" onChange={event => setThumbnail(event.target.files[0])}/>
                <img src={camera} alt="Select img"/>
            </label>

            <label htmlFor="company">EMPRESA *</label>
            <input type="text"
                id="company"
                placeholder="Sua empresa incrivel"
                onChange={event => setCompany(event.target.value)}
            />

            <label htmlFor="techs">TIPO DE HABITAT * <span>coworking, lab Maker, incubadora...</span></label>
            <input type="text"
                id="techs"
                placeholder="Qual habitat está cadastrando?"
                onChange={event => setTechs(event.target.value)}
            />

            <label htmlFor="techs">VALOR DA DIÁRIA * <span>em branco para GRATUITO</span></label>
            <input type="text"
                id="price"
                placeholder="Valor cobrado por dia"
                onChange={event => setPrice(event.target.value)}
            />
            <button type="submit" className="btn">Cadastrar</button>
            <Link to='/dashboard'><h4 className='aa'>Meus spots</h4></Link>
        </form>
    )
}