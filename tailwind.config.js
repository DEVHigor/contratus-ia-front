/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'primary-gradient': {
          start: '#4F46E5',
          end: '#7C3AED'
        },
        'accent': {
          light: '#F9FAFB',
          dark: '#111827'
        }
      },
      animation: {
        'gradient': 'gradient 8s ease infinite',
        'fade-in': 'fadeIn 0.5s ease-out'
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        clackdark: {
          "primary": "#A855F7",
          "secondary": "#60A5FA",
          "accent": "#FFFFFF",
          "neutral": "#0F172A",
          "base-100": "#0F172A",
          "base-200": "#1E293B",
          "base-300": "#334155",
          "info": "#60A5FA",
          "success": "#10B981",
          "warning": "#F59E0B",
          "error": "#EF4444"
        }
      }
    ]
  }
};
