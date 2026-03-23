import onesazConfig from '@onesaz/tailwind-config'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@onesaz/ui/dist/**/*.js",
  ],
  presets: [onesazConfig],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#8B5CF6',
        accent: '#10B981',
        dark: '#1F2937',
      },
    },
  },
  plugins: [],
}
