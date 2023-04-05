module.exports = {
  content: ['./views/**/*.ejs'],
  theme: {
    extend: {
      keyframes: {
        loading: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        skeleton: {
          '0%': { backgroundPosition: '-200px 0' },
          '100%': { backgroundPosition: 'calc(200px + 100%) 0' },
        },
      },
      animation: {
        loading: 'loading 1s linear infinite',
        skeleton: 'skeleton 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};