import React, { useState } from 'react';
import logo from '/public/logo-name.svg';

export const Header = () => {
    const [now, setNow] = useState(new Date());

    setInterval(() => {
        setNow(new Date());
    }, 1000);

    return (
        <header>
            <img src={logo} alt="Cat" />

            <span>Время сейчас: {now.toLocaleTimeString()}</span>
        </header>
    );
};
