import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import Orders from './Orders/Orders';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setAdmin] = useState(false)

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setAdmin(data))
    }, [loggedInUser.email])
    console.log('is admin', isAdmin)

    return (
        <section>
            <h1 className='bg-primary text-center text-white' >Dashboard</h1>

            <div className='row text-white'>
                <div style={{ height: '700px' }} className="col-md-3 bg-primary text-center">
                    {isAdmin ? <div>
                        <Link to='/addService'>
                            <h4 className='text-white'>Add Service</h4> <hr /></Link>
                        <Link to='/addAdmin'>
                            <h4 className='text-white' >Add Admin</h4>
                        </Link> <hr />
                        <Link to='/deleteService'>
                            <h4 className='text-white' >Delete Service</h4>

                        </Link> <hr />
                        <Link to='/allOrder'>
                            <h4 className='text-white' >All service Request</h4>

                        </Link>
                    </div>
                        :
                        <div>
                            <Link to={'/dashboard'}>
                                <h4 className='text-white'>Your services orders</h4> <hr /> </Link>
                            <Link to='/review'>
                                <h4 className='text-white'>Add Review</h4> <hr /></Link>
                            <Link to='/booking'>
                                <h4 className='text-white'>Get New Service</h4> <hr /></Link>

                        </div>}



                </div>

                {<div style={{ height: '700px' }} className="col-md-9 bg-secondary text-center">
                    <Orders></Orders> <hr />
                </div>}
            </div >

        </section >
    );
};

export default Dashboard;
