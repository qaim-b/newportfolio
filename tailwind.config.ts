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
          DEFAULT: '#0F172A',
          light: '#1E293B',
          dark: '#020617',
        },
        accent: {
          DEFAULT: '#4A90E2',
          light: '#6BA3E8',
          dark: '#3578D4',
          purple: '#7B68EE',
          teal: '#20B2AA',
          pink: '#D87093',
        },
        background: '#ffffff',
        'background-alt': '#F8FAFC',
      },
      fontFamily: {
        serif: ['Merriweather', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #4A90E2 0%, #7B68EE 100%)',
        'gradient-accent': 'linear-gradient(135deg, #20B2AA 0%, #4A90E2 100%)',
        'gradient-hero': 'linear-gradient(180deg, #ffffff 0%, #F8FAFC 50%, #EFF6FF 100%)',
      },
      boxShadow: {
        'glow': '0 0 40px -10px rgba(74, 144, 226, 0.35)',
        'glow-lg': '0 0 60px -10px rgba(74, 144, 226, 0.45)',
        'glow-purple': '0 0 40px -10px rgba(123, 104, 238, 0.35)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
export default config
