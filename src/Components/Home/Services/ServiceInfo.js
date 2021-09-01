import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './serviceInfo.css';
const ServiceInfo = ({ handleBook, service }) => {


    return (

        <div className=' border  d-flex  serviceInfo-continar  '>
            <div className='col-md-4'>
                <img className='w-100 service-img' src={`http://localhost:5000/${service.img}`} alt="" /></div>
            <div  >
                <h1>{service.name}</h1>
                <p>{service.discretion}</p>
                <Link to='/booking'><button onClick={handleBook} className='btn btn-primary'>Book Service</button></Link>
            </div>
        </div>
    );
};


export default ServiceInfo;