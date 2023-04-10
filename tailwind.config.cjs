const plugin = require("tailwindcss/plugin"); // eslint-disable-line

/** @type {import('tailwindcss').Config} */
const config = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            mono: ["Fira Code", "monospace"],
            space: ["Space Mono", "monospace"],
            raleway: ["Raleway", "sans-serif"],
        },
        extend: {
            borderWidth: {
                1: "1px",
                3: "3px",
            },
            borderRadius: {
                default: "15px",
            },
            colors: {
                primary: "#030026",
                accent: "#e61366",
                "accent-hover": "#ff007b",
                github: "#8d31ab",
                twitter: "#1da1f2",
                instagram: "#e1306c",
                cyan: "#2AB9FF",
                turquoise: "#00EAD0",
                pink: "#ED57EC",
                lime: "#9FEA18",
                purpule: "#A431FF",
                "dark-purpule": "#810790",
                yellow: "#F2CB00",
                pearl: "#E9D2F4",
                orange: "#F1841F",
                teal: "#02C2A1",
                red: "#CC2624",
                "dark-blue": "#0c043f",

                background: {
                    dark: "#020116",
                    default: "#030026",
                    light: "#121030",
                },
            },
            gridTemplateColumns: {
                "tech-section": "2fr 1fr",
                "tech-reverse": "1fr 2fr",
            },
        },
    },
    plugins: [
        plugin(function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    "glow-lg": (value) => {
                        return {
                            "--tw-glow-color": value,
                            filter: "drop-shadow(0 0 10px var(--tw-glow-color))",
                        };
                    },
                },
                {
                    values: theme("colors"),
                    type: "any",
                },
            );
        }),
        plugin(function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    "glow-sm": (value) => {
                        return {
                            "--tw-glow-color": value,
                            filter: "drop-shadow(0 0 7px var(--tw-glow-color))",
                        };
                    },
                },
                {
                    values: theme("colors"),
                    type: "any",
                },
            );
        }),
    ],
};

module.exports = config;
