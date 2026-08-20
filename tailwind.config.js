/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#060814',
        'bg-elevated': '#0b0f21',
        cyan: '#4cdfe8',
        violet: '#8b7cff',
        magenta: '#ff6fd8',
        ink: '#eaf0ff',
        muted: '#8993b3',
        dim: '#5c6584',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        signal: 'linear-gradient(120deg, #4cdfe8, #8b7cff 55%, #ff6fd8)',
        'signal-soft':
          'linear-gradient(120deg, rgba(76,223,232,.15), rgba(139,124,255,.15) 55%, rgba(255,111,216,.15))',
      },
      keyframes: {
        blink: { '0%,100%': { opacity: 1 }, '50%': { opacity: 0.35 } },
        'pulse-ring': { '0%,100%': { opacity: 0.35 }, '50%': { opacity: 0.85 } },
      },
      animation: {
        blink: 'blink 2.2s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
