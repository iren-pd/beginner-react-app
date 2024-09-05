import { useState } from 'react';
import { Button } from './components/Button/Button';
import { DetailCard } from './components/DetailCard/DetailCard';
import { Header } from './components/Header/Header';
import { infoBlocks, reactPrinciples } from './data.js';

export const App = () => {
    const [content, setContent] = useState('Нажми на кнопку');

    const handleClick = (type) => {
        setContent(type);
    };

    return (
        <div>
            <Header />
            <main>
                <section>
                    <h3>React: Основные Принципы и Возможности</h3>
                    <ul>
                        {infoBlocks.map((item, index) => (
                            <DetailCard
                                key={index}
                                title={item.title}
                                description={item.description}
                            />
                        ))}
                    </ul>
                </section>

                <section>
                    <h3>React: Основные Принципы</h3>

                    <Button onClick={() => handleClick('dataFlow')}>
                        Данные
                    </Button>
                    <Button onClick={() => handleClick('declarative')}>
                        Декларативность
                    </Button>
                    <Button onClick={() => handleClick('virtualDOM')}>
                        Виртуальный DOM
                    </Button>
                    <Button onClick={() => handleClick('rendering')}>
                        Рендеринг
                    </Button>

                    <p>{reactPrinciples[content]}</p>
                </section>
            </main>
        </div>
    );
};
