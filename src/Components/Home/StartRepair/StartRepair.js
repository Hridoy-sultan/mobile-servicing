import React from 'react';
import { Link } from 'react-router-dom';
import './startRepair.css'
const StartRepair = () => {
    return (
        <div className="Repair-Continar">
            <div className="row w-100 d-flex justify-content-center">
                <div className="text-white w-50 offset-1 m-4">
                    <h2>Need a smartphone or tablet Repair?</h2></div>
                <div className="w-30 m-4 col-md-4 offset-1">
                    <Link to='booking'>
                        <button className="border btn-lg btn btn-warning ">Get in Touch</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default StartRepair;