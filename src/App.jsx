import { AboutSection } from './components/AboutSection.jsx';
import { Header } from './components/Header/Header';
import { IntroSection } from './components/IntroSection.jsx';
import { PrinciplesSection } from './components/PrinciplesSection.jsx';

export const App = () => {
    return (
        <>
            <Header />
            <main>
                <IntroSection />
                <AboutSection />
                <PrinciplesSection />
            </main>
        </>
    );
};
