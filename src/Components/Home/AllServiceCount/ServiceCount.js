import React from 'react';

const ServiceCount = ({ serviceCount }) => {

    return (
        <div className='col-md-3 text-center '>
            <div className='row  w-100 h-25 text-center'>
                <h1> {serviceCount.number}</h1>
                <h4>{serviceCount.title}</h4>
            </div>
        </div>
    );
};

export default ServiceCount;