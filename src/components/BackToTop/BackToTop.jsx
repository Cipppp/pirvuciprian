import React, { useState } from 'react';
import './BackToTop.css';
import { animateScroll as scroll } from 'react-scroll';

function BackToTop() {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
            /* you can also use 'auto' behaviour
           in place of 'smooth' */
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <button
            id="top_button"
            onClick={() => scroll.scrollToTop()}
            style={{
                visibility: visible ? 'visible' : 'hidden',
                opacity: visible ? '1' : '0',
            }}
        >
            <svg
                width="50"
                height="50"
                viewBox="0 0 96 96"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M48 80C30.36 80 16 65.64 16 48C16 30.36 30.36 16 48 16C65.64 16 80 30.36 80 48C80 65.64 65.64 80 48 80ZM48 88C70.08 88 88 70.08 88 48C88 25.92 70.08 8 48 8C25.92 8 8 25.92 8 48C8 70.08 25.92 88 48 88ZM44 48V64H52V48H64L48 32L32 48H44Z"
                    fill="#2A2E35"
                />
            </svg>
        </button>
    );
}

export default BackToTop;
