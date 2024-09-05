import './Button.css';

export const Button = ({ children, onClick, isActive }) => {
    // let classes = 'button';

    // if (isActive) classes = ' active';
    return (
        <button
            className={isActive ? 'button active' : 'button'}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
