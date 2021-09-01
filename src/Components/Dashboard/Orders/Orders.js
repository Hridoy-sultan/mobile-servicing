import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../../App';
import Order from './Order';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:5000/addBooking')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])

    const user = orders.filter(order => order.email === loggedInUser.email);

    console.log('userData', user);


    return (
        <section>
            <div className="d-flex justify-content-around mt-4">

                {
                    orders.length >= 1 ?
                        user.map(orderInfo => <Order orderInfo={orderInfo}></Order>)
                        : <h4>You have no order</h4>
                }

            </div>


        </section>
    );
};

export default Orders;