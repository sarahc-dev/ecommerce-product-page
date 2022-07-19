import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --ff-main: 'Kumbh Sans', sans-serif;
        --clr-background: hsl(0, 0%, 100%);
        --clr-headers: hsl(220, 13%, 13%);
        --clr-text: hsl(219, 9%, 45%);
        --clr-text-price: hsl(220, 14%, 75%);
        --clr-line: hsl(219, 35%, 92%);
        --clr-highlight: hsl(26, 100%, 55%);
        --clr-highlight-light: hsl(25, 100%, 94%);
        --clr-highlight-hover: hsl(26, 100%, 71%);
        --clr-input-background: hsl(223, 64%, 98%);
        --clr-lightbox: hsla(0, 0%, 0%, .75);
        --clr-white: hsl(0, 100%, 100%);
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
    }

    img,
    picture {
        display: block;
        max-width: 100%;
    }

    button {
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 0;
    }

    ul {
        list-style: none;
        padding-left: 0;
    }

    body {
        font-family: var(--ff-main);
        font-size: 0.9375rem;
        line-height: 1.5625rem;
        min-height: 100vh;
        text-rendering: optimizeSpeed;
        
        @media (min-width: 825px) {
            font-size: 1rem;
            line-height: 1.625rem;
        }
    }

    .sr-only {
        position: absolute; 
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px; 
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
    }

    @media (prefers-reduced-motion: reduce) {  
        html:focus-within {
            scroll-behavior: auto;
        }

        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }
    `;

export default GlobalStyle;
