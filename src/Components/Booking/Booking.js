import React from 'react';
import { useForm } from "react-hook-form";
import ProcessPayment from '../ProcessPayment/ProcessPayment';

import './booking.css';
const Booking = ({ bookInfo }) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data, e) => {
        console.log(data)
        fetch('http://localhost:5000/addBooking', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),

        })
            .then(res => res.json())
            .then(success => {
                if (success === true) {
                }
            })
        e.target.reset();
        alert('thanks for order service')

    };


    return (
        <div className='bookingContinar text-white '>

            <form className="formContinar " onSubmit={handleSubmit(onSubmit)}>
                <h3 className='text-center'>Get Service</h3>
                <input placeholder='Your Name' {...register("Name")} />
                <input type='email' placeholder='Email' {...register("email", { required: true })} />
                <input defaultValue={bookInfo?.name} {...register("DeviceName")} placeholder='Device Name' />
                {errors.email && <span className="text-danger" >This field is required</span>}
                <textarea type='text' rows="7" cols='53' placeholder='discretion' {...register("discretion", { required: true })}></textarea>
                <br />
                <ProcessPayment></ProcessPayment> <br />
                <p>service charge 100$ </p>
                <input type="submit" />

            </form>


        </div>
    );
};

export default Booking;