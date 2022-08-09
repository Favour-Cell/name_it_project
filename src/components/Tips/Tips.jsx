import React from 'react';
import './Tips.css'

const Tips = ({tipsText}) => {
    return (
        <div className='name-card'>
            <p className='name'>{tipsText}</p>
        </div>
    );
};

export default Tips;