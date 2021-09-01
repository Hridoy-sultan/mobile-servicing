import React from 'react';
import News from './News';
const dNews = () => {
    const newsInfo = [
        {
            image: 'https://i.ibb.co/8mmnC7X/newsimage1.jpg',
            title: 'Do not fix your device on your own',
            description: 'in this article , we picked a few reasons why it is a bad idea ',
            button: 'READ MORE',
        },
        {
            image: 'https://i.ibb.co/80Gv5Fw/newsimage2.jpg',
            title: 'Changing a camera module ',
            description: ' is it possible to upgrade your phone camera ? Lets see',
            button: 'READ MORE',

        },
        {
            image: 'https://i.ibb.co/gw3W8mV/newsimage3.jpg',
            title: 'The Process of a tablet assembling ',
            description: 'We are going to shed the light on the entire procedure',
            button: 'READ MORE',
        },

    ];
    return (
        <div>
            <h1 className="text-center mt-5">News</h1>
            <div className="mt-5 d-flex  justify-content-center ">
                {
                    newsInfo.map(news => <News news={news}></News>)
                }
            </div>
        </div>
    );
};

export default dNews;