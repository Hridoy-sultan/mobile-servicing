import React from 'react';

const Delete = ({ displayService }) => {

    const deleteService = id => {
        fetch(`http://localhost:5000/addService/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => console.log(data)
            )
        alert('Service Deleted successfully')
        window.location.reload()
    }
    return (
        <div className='d-flex w-25 justify-content-center border m-2 ms-5 mt-4'>
            <div>
                <h4>{displayService.name}</h4>
                <p>{displayService.discretion}</p>
                <button className='btn btn-primary' onClick={() => deleteService(displayService._id)}>Delete</button>
            </div>
        </div>
    );
};

export default Delete;