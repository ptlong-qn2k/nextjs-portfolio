/** @type {import('tailwindcss').Config} */

export default {
    darkMode: 'class', // <== Quan trọng
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                xanhduong: '#1fb6ff',
                maupurple: '#7e5bef',
                mauhong: '#ff49db',
                maucam: '#ff7849',
                xanhla: '#13ce66',
                mauvang: '#ffc82c',
                'gray-dark': '#273444',
                mauxam: '#8492a6',
                'gray-light': '#d3dce6',
                maudo: '#FF1C03',
                gray_cus: '#FAFAFA',
            },
            // keyframes: {
            //     'slide-in-left': {
            //         '0%': { transform: 'translateX(-100%)', opacity: '0' },
            //         '100%': { transform: 'translateX(0)', opacity: '1' },
            //     },

            //     'fade-in': {
            //         '0%': { opacity: '0', transform: 'translateX(20px)' },
            //         '100%': { opacity: '1', transform: 'translateX(0)' },
            //     },
            // },
            // animation: {
            //     'slide-in-left': 'slide-in-left 1s ease-out forwards',

            //     'fade-in': 'fade-in 0.6s ease-out forwards',
            // },
        },
        screens: {
            mobile: { min: '375px' },
            sm: { min: '550px' },
            md: { min: '768px' },
            lg: { min: '900px' },
            xl: { min: '1300px' },
        },
    },
};
