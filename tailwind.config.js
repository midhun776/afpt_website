/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#0b8f4c', // Army Green
                    dark: '#086e3a',
                    light: '#10a558',
                },
                defence: {
                    olive: '#4b5320',
                    army: '#454b1b',
                    navy: '#000080',
                    saffron: '#ff9933',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Outfit', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
