import React from 'react';

export const DetailCard = ({ title, description }) => {
    return (
        <li>
            <p>
                <strong>{title}</strong>
                {description}
            </p>
        </li>
    );
};
