import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F1C16',
          light: '#1B2A22',
          dark: '#0A120E',
        },
        accent: {
          DEFAULT: '#6FA38B', // Sage
          light: '#8FC0A9',
          dark: '#4F7F68',
          cyan: '#5E9BA1', // Mist Teal
          amber: '#C9A66B', // Sand
          rose: '#C77D6D', // Clay
        },
        background: '#0F1C16',
        'background-alt': '#1B2A22',
        'background-light': '#24342B',
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #6FA38B 0%, #5E9BA1 100%)',
        'gradient-accent': 'linear-gradient(135deg, #5E9BA1 0%, #6FA38B 100%)',
        'gradient-hero': 'linear-gradient(180deg, #0F1C16 0%, #1B2A22 50%, #24342B 100%)',
        'gradient-warm': 'linear-gradient(135deg, #C9A66B 0%, #C77D6D 100%)',
      },
      boxShadow: {
        'glow': '0 0 40px -10px rgba(111, 163, 139, 0.45)',
        'glow-lg': '0 0 60px -10px rgba(111, 163, 139, 0.55)',
        'glow-cyan': '0 0 40px -10px rgba(94, 155, 161, 0.45)',
        'glow-amber': '0 0 40px -10px rgba(201, 166, 107, 0.45)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
        'card-hover': '0 20px 25px -5px rgba(111, 163, 139, 0.28), 0 10px 10px -5px rgba(111, 163, 139, 0.18)',
        'neon': '0 0 5px rgba(111, 163, 139, 0.45), 0 0 20px rgba(111, 163, 139, 0.25)',
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'slide-down': 'slide-down 0.6s ease-out',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'glow-pulse': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(111, 163, 139, 0.35), 0 0 40px rgba(111, 163, 139, 0.2)',
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(111, 163, 139, 0.5), 0 0 60px rgba(111, 163, 139, 0.28)',
          },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
export default config
