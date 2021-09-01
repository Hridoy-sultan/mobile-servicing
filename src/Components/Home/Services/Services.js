import React, { useState } from 'react';
import ServiceInfo from './ServiceInfo';
import { useEffect } from 'react';


const Services = ({ handleBook }) => {

    const [serviceInfo, setServiceInfo] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/addService')
            .then(res => res.json().then(data => setServiceInfo(data)))

    }, [])


    return (
        <section className="mt-5">

            <div className="text-center text-primary">
                <h1 >Our Company Services</h1>
                <p>We are able to repair any mobile device,smart phone and tablet , no mater what brand name it is </p>
                <hr />
            </div>
            <div className='row w-75  offset-2  '>
                {
                    serviceInfo.map(service => <ServiceInfo handleBook={() => handleBook(service)} service={service}></ ServiceInfo>)
                }


            </div>
        </section>
    );
};

export default Services;