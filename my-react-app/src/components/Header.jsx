import { UpArrow } from './svgs.jsx';
import React, { useState } from 'react';

const Header = () => {
    const [visible, setVisible] = useState(true);

    return (
        <>
            <header
                className={visible ? 'visible' : 'hidden'}
                style={{
                    display: 'flex',
                    position: 'fixed',
                    alignItems: 'center',
                    padding: '20px',
                    backgroundColor: '#f6ccff',
                }}
            >
                <div
                    style={{
                        width: '50px',
                        height: '50px',
                        backgroundColor: '#ffd4f4',
                        borderRadius: '50%',
                        padding: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '10px',
                        fontSize: '30px',
                        fontWeight: 'bold',
                        color: '#333',
                    }}
                >
                    P
                </div>
                <h1 style={{ margin: 0 }}>Pomo</h1>
            </header>

            <button
                id="header-toggle"
                onClick={() => setVisible(v => !v)}
                aria-pressed={!visible}
                aria-label={visible ? 'Hide header' : 'Show header'}
                className="header-toggle"
                style={{
                    right: '60px',
                    top: '20px',
                    position: 'fixed',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '8px'
                }}
            >
                {/* inline SVG icon — rotates with CSS for smooth animation */}
                <UpArrow className={`header-toggle__icon ${visible ? 'open' : 'closed'}`} aria-hidden='true'
                />
            </button>
        </>
    );
};

export default Header;