import React, { useEffect, useState } from 'react';
import Delete from './Delete';

const DeleteService = () => {
    const [displayServices, setDisplayService] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/addService')
            .then(res => res.json())
            .then(data => setDisplayService(data))
    }, [])

    return (
        <div className=' row col-md-4 w-100 '>
            {
                displayServices.map(displayService => <Delete displayService={displayService}></Delete>)
            }
        </div>
    );
};

export default DeleteService;