import React, { useState } from 'react';
import Testimonial from './Testimonial';
import { useEffect } from 'react';

const Testimonials = () => {
    const [testimonialInfo, setTestimonialInfo] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/addReview')
            .then(res => res.json())
            .then(data => setTestimonialInfo(data))
    }, [])

    console.log('ts', testimonialInfo);


    return (
        <div className="mt-5">
            <div className='text-center'>
                <h1>Testimonials</h1>
                <p>our clients are the lucky owners of fixed devices </p>
            </div>
            <div className="mt-5 ml-5 d-flex  justify-content-center row">
                {
                    testimonialInfo.map(testimonial => <Testimonial testimonial={testimonial}></Testimonial>)
                }
            </div>
        </div>
    );
};

export default Testimonials;