module.exports = {
  content: ['./views/**/*.ejs'],
  theme: {
    extend: {
      keyframes: {
        loading: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        loading: 'loading 1s linear infinite',
      },
    },
  },
  plugins: [],
};