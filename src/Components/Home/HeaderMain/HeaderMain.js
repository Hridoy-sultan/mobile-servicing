import React from 'react';
import HeaderSideImg from '../../../images/service.png';
import './HeaderMain.css'
const HeaderMain = () => {
    return (
        <div class=' row justify-content-between mt-5'>

            <div class=' text-white col-md-4   '>
                <h1  >Finding solutions</h1>
                <h2>for your problems</h2>
                <p >For us, the repair work is not just about finding the fault and fixing it, it is about quality parts that are made to last long.</p>
                <button className='btn btn-primary'> Contact us</button>
            </div>
            <div class='col-md-4 '>
                <img class='img-fluid' src={HeaderSideImg} alt="" />
            </div>
        </div>
    );
};

export default HeaderMain;