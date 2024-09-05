import React, { useState } from 'react';
import { reactPrinciples } from '../../data.js';
import { Button } from '../Button/Button';

export const PrincipiesButtons = () => {
    const [contentType, setContentType] = useState(null);

    const handleClick = (type) => {
        setContentType(type);
    };
    
    return (
        <>
            <Button
                isActive={contentType === 'dataFlow'}
                onClick={() => handleClick('dataFlow')}
            >
                Данные
            </Button>
            <Button
                isActive={contentType === 'declarative'}
                onClick={() => handleClick('declarative')}
            >
                Декларативность
            </Button>
            <Button
                isActive={contentType === 'virtualDOM'}
                onClick={() => handleClick('virtualDOM')}
            >
                Виртуальный DOM
            </Button>
            <Button
                isActive={contentType === 'rendering'}
                onClick={() => handleClick('rendering')}
            >
                Рендеринг
            </Button>

            {contentType ? (
                <p>{reactPrinciples[contentType]}</p>
            ) : (
                <p>Нажми на кнопку</p>
            )}
        </>
    );
};
