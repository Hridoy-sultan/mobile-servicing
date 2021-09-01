import React from 'react';

const News = ({ news }) => {
    return (
        <div>
            <div className=' col-md-3 w-75'>
                <img style={{ width: '250px' }} src={news.image} alt="" />
                <div >
                    <h4>{news.title}</h4>
                    <p>{news.description}</p>
                    <button className='btn btn-primary'>{news.button}</button>
                </div>
            </div>
        </div>
    );
};

export default News;