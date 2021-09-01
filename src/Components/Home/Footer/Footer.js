import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
const Footer = () => {
    return (
        <div style={{ height: '200px' }} className="bg-dark text-white text-center ">
            <h1 className='mt-4'>
                <i class="bi bi-facebook m-4"></i>
                <i class="bi bi-twitter m-4"></i>
                <i class="bi bi-linkedin m-4"></i>
            </h1>
            <p className="mt-5">©Copyright | mobile servicing 2021. All Right Reserved</p>
        </div>
    );
};

export default Footer;