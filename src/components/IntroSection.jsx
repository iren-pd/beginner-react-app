import React from 'react';

export const IntroSection = () => {
    return (
        <section>
            <h1 className="centered">Введение в React</h1>
            <h3 className="centered" style={{ color: '#666' }}>
                React — библиотека JavaScript для создания пользовательских
                интерфейсов. Она позволяет строить динамичные и отзывчивые
                веб-приложения, используя компоненты, которые легко повторно
                использовать и обновлять.
            </h3>
        </section>
    );
};
