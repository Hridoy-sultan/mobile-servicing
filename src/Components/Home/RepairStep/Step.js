import React from 'react';

const Step = ({ step }) => {
    return (
        <div className='col-md-3 mt-4 border '>
            <div className='w-30'>
                <h2 className='text-primary'>{step.count}</h2>
                <h4>{step.title}</h4>
                <p className='text-secondary'>{step.description}</p>
            </div>

        </div>
    );
};

export default Step;