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
          DEFAULT: '#0A0E27',
          light: '#1A1F3A',
          dark: '#050711',
        },
        accent: {
          DEFAULT: '#10B981', // Emerald
          light: '#34D399',
          dark: '#059669',
          cyan: '#06B6D4', // Cyan
          amber: '#F59E0B', // Amber
          rose: '#F43F5E', // Rose
        },
        background: '#0A0E27',
        'background-alt': '#1A1F3A',
        'background-light': '#252B48',
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #10B981 0%, #06B6D4 100%)',
        'gradient-accent': 'linear-gradient(135deg, #06B6D4 0%, #10B981 100%)',
        'gradient-hero': 'linear-gradient(180deg, #0A0E27 0%, #1A1F3A 50%, #252B48 100%)',
        'gradient-warm': 'linear-gradient(135deg, #F59E0B 0%, #F43F5E 100%)',
      },
      boxShadow: {
        'glow': '0 0 40px -10px rgba(16, 185, 129, 0.5)',
        'glow-lg': '0 0 60px -10px rgba(16, 185, 129, 0.6)',
        'glow-cyan': '0 0 40px -10px rgba(6, 182, 212, 0.5)',
        'glow-amber': '0 0 40px -10px rgba(245, 158, 11, 0.5)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
        'card-hover': '0 20px 25px -5px rgba(16, 185, 129, 0.3), 0 10px 10px -5px rgba(16, 185, 129, 0.2)',
        'neon': '0 0 5px rgba(16, 185, 129, 0.5), 0 0 20px rgba(16, 185, 129, 0.3)',
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'slide-down': 'slide-down 0.6s ease-out',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'glow-pulse': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(16, 185, 129, 0.4), 0 0 40px rgba(16, 185, 129, 0.2)',
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(16, 185, 129, 0.6), 0 0 60px rgba(16, 185, 129, 0.3)',
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
      },
    },
  },
  plugins: [],
}
export default config
