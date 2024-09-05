import { AboutSection } from './components/AboutSection.jsx';
import { Header } from './components/Header/Header';
import { PrinciplesSection } from './components/PrinciplesSection.jsx';

export const App = () => {
    return (
        <>
            <Header />
            <main>
                <AboutSection />
                <PrinciplesSection />
            </main>
        </>
    );
};
