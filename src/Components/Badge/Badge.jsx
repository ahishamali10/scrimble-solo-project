import React from 'react';

const Badge = ({children, color = 'gray', shape = 'square'}) => {
    return (
        <div className={`badge badge-${color} ${shape}`}>
            {children}
        </div>
    );
};

export default Badge;