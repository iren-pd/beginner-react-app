import React from 'react';
import { infoBlocks } from '../data';
import { DetailCard } from './DetailCard/DetailCard';

export const AboutSection = () => {
    return (
        <section>
            <h3>React: Основные Принципы и Возможности</h3>
            <ul>
                {infoBlocks.map((item, index) => (
                    <DetailCard key={index} {...item} />
                ))}
            </ul>
        </section>
    );
};
