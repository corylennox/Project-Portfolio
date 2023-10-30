const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    screens: {
      'xxs': '250px',
      'xs': '360px',
      'sm': '640px',
      'md': '760px',
      'md2': '900px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },

    extend: {
      colors: {
        // Light Mode
        primary: "#fffdf2",
        secondary: "#36393B",
        accent: colors.red[400],
        text: "#303030",
        accentHover: "#F09191",
        offPrimary: "#fff0db",
        projectsHover: "#000000", // don't change
        buttonTxt: colors.gray[800],

        // Dark Mode
        primaryDark: "#30343F",
        secondaryDark: "#6F73D2",
        accentDark: "#6F73D2",
        textDark: "#FAFAFF",
        accentHoverDark: "#8A8EDF",  
        offPrimaryDark: colors.gray[500],  
        projectsHoverDark: "#000000", // don't change
        buttonTxtDark: colors.gray[800],

        // Custom Colors
        themeIcon: "#38BDF8",

      },
      fontSize: {
        'proj-xxs': ['.65rem', { fontWeight: '100', lineHeight: '.95rem' }],
        'proj-xs': ['.9rem', { fontWeight: '300', lineHeight: '.7rem' }],
        'proj-sm': ['.8rem', { fontWeight: '300', lineHeight: '.5rem' }],
        'proj-md': ['.9rem', { fontWeight: '400', lineHeight: '.7rem' }],
        'proj-md2': ['1rem', { fontWeight: '400', lineHeight: '.9rem' }],
      },
    },
  },
    variants: {
    extend: {
      backgroundColor: ['active', 'hover'],
    },
  },
};
