import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`

    *, *::before,
    *::after {
        box-sizing: border-box;
    }

    :root {
        /* Dark Theme */
        --bg-color: #191818;
        --fg-color: #E6E6E6;
        --accent-color: #E94540;

        --default-font: 'Open Sans', sans-serif;;
    }
    body {
        margin: 0;
        background: var(--bg-color);
        color: var(--fg-color);
        font-family: var(--default-font);
    }
    .top-bar {
        background: var(--accent-color);
        height: 2px;
        width: 100%;
    }


`

