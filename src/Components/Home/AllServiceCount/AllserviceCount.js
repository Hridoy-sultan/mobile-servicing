import React from 'react';
import ServiceCount from './ServiceCount';

const AllserviceCount = () => {
    const serviceCount = [
        {
            number: '2334',
            title: 'Repaired Glasses'
        },
        {
            number: '1234',
            title: 'Water Damaged Repairs'
        },
        {
            number: '3340',
            title: 'Unlocked phones'
        },
        {
            number: '1504',
            title: 'Happy Customary'
        }

    ]
    return (
        <div className=' d-flex bg-primary text-white justify-content-center ' >
            {
                serviceCount.map(repairCount => <ServiceCount serviceCount={repairCount}></ServiceCount>)
            }
        </div>
    );
};

export default AllserviceCount;