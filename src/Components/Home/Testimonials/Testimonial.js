import React from 'react';
import './testimonial.css'
const Testimonial = ({ testimonial }) => {
    return (
        <div className='col-md-4 text-center text-primary'>
            <div className="testimonial-img-continar text-center">
                <img className="rounded-circle" src={`http://localhost:5000/${testimonial.img}`} alt="" />
            </div>
            <div className="testimonial-info ">
                <h3>{testimonial.serviceName
                }</h3>
                <p>{testimonial.discretion}</p>
                <h4>{testimonial.name}</h4>
            </div>
        </div>
    );
};

export default Testimonial;