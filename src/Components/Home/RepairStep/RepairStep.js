import React from 'react';
import Step from './Step';

const RepairStep = () => {
    const stepInfo = [
        {
            count: '01',
            title: 'Broken Device',
            description: 'if your device breaks,do not panic.we offer a huge range of mobile phone $ tablet repair services'
        },
        {
            count: '02',
            title: 'Send it to us',
            description: 'we offer free postage with all mobile phone & table repairs . saving you time and money just print the label and send'
        },
        {
            count: '03',
            title: 'Quick Fix ',
            description: 'Our trained technicians will repair your mobile phone or tablet device quickly and efficiently '
        },
        {
            count: '04',
            title: 'Fast Return',
            description: 'Choose the delivery method and matches your requirements .we will make sure you repaired device'
        },
    ]
    return (
        <div>
            <h1 className="text-center text-primary mt-5">Easy way to get your phone repaired</h1>

            <div className='row '>
                {
                    stepInfo.map(step => <Step step={step}></Step>)
                }
            </div>
        </div>
    );
};

export default RepairStep;