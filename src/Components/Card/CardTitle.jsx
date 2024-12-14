import React from 'react';

const CardTitle = ({children}) => {
    return (
        <h2 className='title'>
            {children}
        </h2>
    );
};

export default CardTitle;