const colors = require('tailwindcss/colors');
const svgToDataUri = require('mini-svg-data-uri');

function withOpacityValue(cssVariable) {
    return ({ opacityVariable, opacityValue }) => {
        if (opacityValue !== undefined) {
            return `rgba(var(${cssVariable}), ${opacityValue})`;
        }
        if (opacityVariable !== undefined) {
            return `rgba(var(${cssVariable}), var(${opacityVariable}, 1))`;
        }
        return `rgb(var(${cssVariable}))`;
    };
}


module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: withOpacityValue('--color-primary-50'),
                    100: withOpacityValue('--color-primary-100'),
                    200: withOpacityValue('--color-primary-200'),
                    300: withOpacityValue('--color-primary-300'),
                    400: withOpacityValue('--color-primary-400'),
                    500: withOpacityValue('--color-primary-500'),
                    600: withOpacityValue('--color-primary-600'),
                    700: withOpacityValue('--color-primary-700'),
                    800: withOpacityValue('--color-primary-800'),
                    900: withOpacityValue('--color-primary-900'),
                },
                black: '#040405',
                red: colors.red,
                teal: colors.teal,
                gray: colors.slate,
            },
            spacing: {
                88: '22rem',
            },
            backgroundImage: (theme) => ({

            }),
        },
        fontFamily: {
            base: ['Poppins', 'sans-serif'],
        }
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
        require('tailwind-scrollbar'),
        require('@rvxlab/tailwind-plugin-ios-full-height'),
        require('@tailwindcss/line-clamp'),
    ],
}
