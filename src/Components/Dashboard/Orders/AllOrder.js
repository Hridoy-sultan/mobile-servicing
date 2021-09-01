import React, { useEffect, useState } from 'react';

const AllOrder = () => {
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/addBooking')
            .then(res => res.json())
            .then(data => setAllOrders(data));
    }, [])

    return (
        <div className='d-flex'>
            {
                allOrders.map(allOrder =>

                    <div className='border col-md-4'>
                        <h4>Name: {allOrder.Name}</h4>
                        <h4>Device Name: {allOrder.DeviceName}</h4>
                        <h4>email: {allOrder.email}</h4>
                        <h4>Description: {allOrder.discretion}</h4>
                        <button className='btn btn-primary' type="button">Complite</button>
                    </div>

                )
            }
        </div>
    );
};

export default AllOrder;