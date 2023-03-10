/** @type {import('tailwindcss').Config} */
const config = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            mono: ['Fira Code', 'monospace'],
            space: ['Space Mono', 'monospace'],
            raleway: ['Raleway', 'sans-serif'],
        },
        extend: {
            borderWidth: {
                1: '1px',
                3: '3px',
            },
            borderRadius: {
                default: '15px',
            },
            colors: {
                primary: '#030026',
                hover: '',
                'sec-hover': '',
                shadow: '',
                accent: '',
                'accent-sec': '',
                background: {
                    dark: '',
                },
            },
        },
    },
    plugins: [],
};

module.exports = config;
